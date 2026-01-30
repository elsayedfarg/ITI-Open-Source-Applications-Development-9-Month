"use strict";

const userRole = localStorage.getItem("userRole");
if (!localStorage.getItem("token")) {
  window.location.replace("./login.html");
}

if (userRole === "admin") {
  window.location.replace("../pages/admin-dashboard.html");
}

const campaignTitleInput = document.getElementById("campaignTitle");
const fundingGoalInput = document.getElementById("fundingGoal");
const endDateInput = document.getElementById("endDate");
const categoryInput = document.getElementById("category");
const descriptionInput = document.getElementById("description");
const uploadArea = document.querySelector(".upload-area");
const imageInput = document.getElementById("campaign-image");
const submitBtn = document.getElementById("submit-for-review-btn");

// Preview elements
const previewImage = document.querySelector(".preview-image img");
const previewTitle = document.querySelector(".preview-title");
const previewDescription = document.querySelector(".preview-description");
const previewCategory = document.querySelector(".category-badge");
const previewGoal = document.querySelector(".stat-value.small");

const authorAvatar = document.querySelector(".author-avatar");
const authorName = document.querySelector(".author-name");

const backToDashboardBtn = document.getElementById("back-to-dashboard");
backToDashboardBtn.addEventListener("click", () => {
  if (backToDashboardBtn) {
    window.location.href = "./user-dashboard.html";
  }
});

// ToDO complete it after fetching the user data
function updatePreviewAuthorAvatarAndName(name) {
  authorName.value = name;
  authorAvatar.value = name.substr(0, 1);
}

// a variable to store the image Base64 string
let imageBase64 = null;

// mark to inform the user when the image uploaded
let statusText = document.createElement("p");
statusText.style.marginTop = "10px";
statusText.style.color = "green";
uploadArea.appendChild(statusText);

const updatePreview = function () {
  const title = campaignTitleInput.value.trim();
  previewTitle.textContent = title || "Untitled Campaign";

  const description = descriptionInput.value.trim();
  previewDescription.textContent = description;

  const category = categoryInput.value;
  previewCategory.textContent = category || "Technology";

  const goal = parseFloat(fundingGoalInput.value);
  previewGoal.textContent = goal;

  // Update image if available
  if (imageBase64) {
    previewImage.src = imageBase64;
  }
};

const campaignInformation = function () {
  let title = campaignTitleInput.value.trim();
  let fundingGoal = parseFloat(fundingGoalInput.value);
  let endDate = new Date(endDateInput.value);
  let category = categoryInput.value;
  let description = descriptionInput.value.trim();
  let image = imageBase64;
  return { title, fundingGoal, endDate, category, description, image };
};

// validate image
const validateImageFile = function (file) {
  const validTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/webp",
  ];
  const maxSize = 5 * 1024 * 1024; // 5mb

  if (!validTypes.includes(file.type)) {
    alert("please upload a valid image file(jpeg,jpg,png,gif,webp");
    return false;
  }

  if (file.size > maxSize) {
    alert("Image size must be less than 5MB");
    return false;
  }
  return true;
};

let validateUserInput = function (input) {
  // title validation
  if (!input.title || input.title.length < 10) {
    alert("campaign title must be at least 10 characters");
    campaignTitleInput.focus();
    return false;
  }

  // funding goal validation
  if (isNaN(input.fundingGoal) || input.fundingGoal < 10) {
    alert("funding goal must be at least $10");
    fundingGoalInput.focus();
    return false;
  }

  // date validation
  if (isNaN(input.endDate.getTime())) {
    alert("please select an end date");
    endDateInput.focus();
    return false;
  }

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 2);

  if (input.endDate > maxDate) {
    alert("End date can not be more than 2 years from now");
    endDateInput.focus();
    return false;
  }

  // category validation
  if (!input.category || input.category === "") {
    alert("you must select a category");
    categoryInput.focus();
    return false;
  }

  // description validation
  if (!input.description || input.description.length < 10) {
    alert("description must be at least 10 characters");
    descriptionInput.focus();
    return false;
  }
  if (!input.image) {
    alert("please upload an image");
    return false;
  }
  return true;
};

const handleImageUpload = function (file) {
  if (!validateImageFile(file)) {
    imageInput.value = "";
    return;
  }
  const reader = new FileReader();
  // onload works after the readAsDataURL finishes because it is an async function
  reader.onload = function (e) {
    imageBase64 = e.target.result;
    // console.log(`image in base 64: ${imageBase64}`);

    statusText.textContent = `Image uploaded: ${file.name}`;
    updatePreview();
  };
  reader.readAsDataURL(file); // reads file and converts it to Base64 string
};

async function createCampaign() {
  const userId = localStorage.getItem("userId");
  const campaignData = campaignInformation();
  const requestBody = {
    title: campaignData.title,
    description: campaignData.description,
    goal: campaignData.fundingGoal,
    currentAmount: 0,
    endDate: campaignData.endDate.toISOString().split("T")[0],
    category: campaignData.category,
    image: campaignData.image,
    creatorId: parseInt(userId),
    status: "pending",
  };
  const url = `http://localhost:5000/campaigns`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to create campaign");
    }
    // alert("Campaign submitted for review!");
    // alert("Campaign submitted for review!");
    window.location.replace("./user-dashboard.html");
  } catch (error) {
    alert(error);
  }
}

const handleSubmit = async function () {
  const userInput = campaignInformation();

  if (validateUserInput(userInput)) {
    await createCampaign();
  }
};

// get the image
uploadArea.addEventListener("click", () => {
  imageInput.click();
});

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (file) {
    handleImageUpload(file);
  }
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  handleSubmit();
});

// live update for preview
campaignTitleInput.addEventListener("input", updatePreview);
descriptionInput.addEventListener("input", updatePreview);
categoryInput.addEventListener("change", updatePreview);
fundingGoalInput.addEventListener("input", updatePreview);
endDateInput.addEventListener("change", updatePreview);
