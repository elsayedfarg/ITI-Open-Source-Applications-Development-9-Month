"use strict";

const userRole = localStorage.getItem("userRole");

if (!localStorage.getItem("token")) {
  window.location.replace("./login.html");
}

if (userRole === "admin") {
  window.location.replace("../pages/admin-dashboard.html");
}

const campaignId = new URLSearchParams(window.location.search).get("id");

if (!campaignId) {
  alert("No campaign selected");
  window.location.replace("./mycampaigns.html");
}

const titleInput = document.querySelector(
  '.form-group input[type="text"].disabled-field',
);
const categoryInput = document.querySelector(
  ".form-group select.disabled-field",
);
const goalInput = document.querySelector(
  '.form-row input[type="text"].disabled-field',
);
const deadlineInput = document.querySelector('input[type="date"]');
const descriptionInput = document.querySelector("textarea");
const imagePreview = document.querySelector(".image-upload-preview img");
const changeImageBtn = document.querySelector(".change-image-btn");
const saveBtn = document.querySelector(".btn-primary");
const cancelBtn = document.querySelector(".btn-cancel");
const imageInput = document.getElementById("campaign-image");
const uploadArea = document.querySelector(".image-upload-preview");
const previewDate = document.querySelector("#preview-date");

const previewImage = document.querySelector(".preview-image");
const previewTitle = document.querySelector(".preview-title");
const previewDescription = document.querySelector(".preview-description");
const previewCategory = document.querySelector(".category-badge");
const progressFill = document.querySelector(".progress-fill");
const campaignRaisedAmount = document.querySelector("#raised");
const campaignGoalAmount = document.querySelector("#goal");

let imageBase64 = null;
let campaign = null;

// form initialization
function initializeForm(campaign) {
  titleInput.value = campaign.title;
  categoryInput.innerHTML = `<option>${campaign.category}</option>`;
  goalInput.value = `$${campaign.goal}`;

  // Use endDate as the primary source, fallback to deadline
  const dateValue = campaign.endDate || campaign.deadline;
  if (dateValue) {
    // Parse the date string and format as yyyy-MM-dd
    const dateStr = dateValue.split("T")[0]; // Get just the date part if it's ISO format
    deadlineInput.value = dateStr;
  }

  descriptionInput.value = campaign.description;

  imagePreview.src = campaign.image;
  imageBase64 = campaign.image;

  document.querySelector("h1").textContent = `Edit: ${campaign.title}`;
}

// preview initialization
function initializePreview(campaign) {
  previewTitle.textContent = campaign.title;
  previewDescription.textContent = campaign.description;
  previewCategory.textContent = campaign.category;
  previewImage.src = campaign.image;

  // Use endDate for calculations
  const deadlineDate = new Date(campaign.endDate || campaign.deadline);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  deadlineDate.setHours(0, 0, 0, 0);

  const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));

  previewDate.textContent = `Ends in ${
    daysLeft > 0 ? `${daysLeft} days` : "ended"
  }`;

  const progress = calculateProgress(campaign.currentAmount, campaign.goal);
  progressFill.style.width = `${progress}%`;

  campaignRaisedAmount.textContent = `$${campaign.currentAmount}`;
  campaignGoalAmount.textContent = `$${campaign.goal}`;
}

async function fetchCampaign() {
  try {
    const url = `http://localhost:5000/campaigns/${campaignId}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch campaign");
    }

    campaign = await response.json();
    initializeForm(campaign);
    initializePreview(campaign);
  } catch (error) {
    alert(error.message);
  }
}

fetchCampaign();

function validateImageFile(file) {
  const validTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/webp",
  ];
  const maxSize = 5 * 1024 * 1024;

  if (!validTypes.includes(file.type)) {
    alert("Please upload a valid image file");
    return false;
  }

  if (file.size > maxSize) {
    alert("Image must be less than 5MB");
    return false;
  }

  return true;
}

function handleImageUpload(file) {
  if (!validateImageFile(file)) {
    imageInput.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    imageBase64 = e.target.result;

    imagePreview.src = imageBase64;
    previewImage.src = imageBase64;
  };
  reader.readAsDataURL(file);
}

function calculateProgress(current, goal) {
  if (!goal) return 0;
  return Math.min(Math.round((current / goal) * 100), 100);
}

const updatePreview = function () {
  const description = descriptionInput.value.trim();

  previewDescription.textContent = description;

  if (imageBase64) {
    previewImage.src = imageBase64;
  }

  if (deadlineInput.value) {
    const deadlineDate = new Date(deadlineInput.value + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    deadlineDate.setHours(0, 0, 0, 0);

    const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));

    previewDate.textContent = `Ends in ${
      daysLeft > 0 ? `${daysLeft} days` : "ended"
    }`;
  }
  const progress = calculateProgress(campaign.currentAmount, campaign.goal);
  progressFill.style.width = `${progress}%`;

  campaignRaisedAmount.textContent = `$${campaign.currentAmount}`;
  campaignGoalAmount.textContent = `$${campaign.goal}`;
};

let validateUserInput = function (input) {
  if (!input.endDate) {
    alert("Please select a valid end date");
    deadlineInput.focus();
    return false;
  }

  // Parse the date at midnight to avoid timezone issues
  const endDate = new Date(input.endDate + "T00:00:00");

  if (isNaN(endDate.getTime())) {
    alert("Please select a valid end date");
    deadlineInput.focus();
    return false;
  }

  const maxDate = new Date();
  maxDate.setHours(0, 0, 0, 0);
  maxDate.setFullYear(maxDate.getFullYear() + 2);

  if (endDate > maxDate) {
    alert("End date cannot be more than 2 years from now");
    deadlineInput.focus();
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (endDate < today) {
    alert("End date cannot be in the past");
    deadlineInput.focus();
    return false;
  }

  // description validation
  if (!input.description || input.description.length < 10) {
    alert("Description must be at least 10 characters");
    descriptionInput.focus();
    return false;
  }

  return true;
};

async function saveChanges() {
  if (!deadlineInput.value) {
    alert("please select an end date");
    deadlineInput.focus();
    return;
  }

  // Save as yyyy-MM-dd format (no time component)
  const updatedData = {
    description: descriptionInput.value.trim(),
    endDate: deadlineInput.value,
    image: imageBase64,
  };

  if (!validateUserInput(updatedData)) {
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:5000/campaigns/${campaignId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to update campaign");
    }

    window.location.replace("./mycampaigns.html");
  } catch (error) {
    alert(error.message);
  }
}

saveBtn.addEventListener("click", saveChanges);

cancelBtn.addEventListener("click", () => {
  window.location.replace("./mycampaigns.html");
});

changeImageBtn.addEventListener("click", () => {
  imageInput.click();
});

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (file) handleImageUpload(file);
});

// live update for preview
descriptionInput.addEventListener("input", updatePreview);
deadlineInput.addEventListener("change", updatePreview);
deadlineInput.addEventListener("change", updatePreview);
