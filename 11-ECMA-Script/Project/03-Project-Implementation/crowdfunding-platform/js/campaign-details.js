"use strict";

const creatorCard = document.querySelector(".creator-card");
if (!localStorage.getItem("token")) {
  creatorCard.style.display = "none";
} else {
  creatorCard.style.display = "flex";
}

const userId = localStorage.getItem("userId");
const heroSection = document.querySelector(".hero");
const heroTitle = document.querySelector(".hero-title");
const heroSubtitle = document.querySelector(".hero-subtitle");
const creatorName = document.querySelector(".creator-name");
const campaignTitle = document.querySelector("#campaign-title");
const campaignDescription = document.querySelector("#campaign-description");
const campaignImage = document.querySelector(".campaign-image");
const fundingRaised = document.querySelector(".funding-raised");
const backBtn = document.getElementById("back-btn");
const rightColumn = document.getElementById("right-column");
const pledgesBtn = document.getElementById("pledges-btn");

const campaignId = new URLSearchParams(window.location.search).get("id");

backBtn.addEventListener("click", () => {
  window.location.href = "./mycampaigns.html";
});

pledgesBtn.addEventListener("click", () => {
  window.location.href = `campaign-pledges.html?id=${campaignId}`;
});

// listen on the whole grid because the button not created yet
rightColumn.addEventListener("click", (e) => {
  // closest stop when the item found
  const backCampaignButton = e.target.closest(".back-button-primary");

  if (!backCampaignButton) return;

  window.location.href = `back-campaign.html?id=${campaignId}`;
});

function initializeHero(campaign) {
  heroSection.style.backgroundImage = `url(${campaign.image})`;
  heroTitle.textContent = campaign.title;
  // heroSubtitle.textContent = campaign.description;
}

async function getUserInfo(id) {
  const url = `http://localhost:5000/users/${id}`;
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  const user = await response.json();
  return user;
}

async function getCampaign() {
  try {
    const res = await fetch(`http://localhost:5000/campaigns/${campaignId}`);
    if (!res.ok) throw new Error("Failed to fetch campaign");
    const campaign = await res.json();
    return campaign;
  } catch (err) {
    alert(err.message);
  }
}

async function getAllUsers() {
  try {
    const url = "http://localhost:5000/users";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("can not fetch users");
    }
    const users = await response.json();
    // Filter out admins here
    return users.filter((user) => user.role !== "admin");
  } catch (e) {
    alert(e);
  }
}

async function getCreatorName() {
  const users = await getAllUsers();
  const campaign = await getCampaign();
  const user = users.find((user) => user.id == campaign.creatorId);
  return user.name;
}

async function initializeCampaignInfo(campaign) {
  creatorName.textContent = await getCreatorName();
  campaignTitle.textContent = campaign.title;
  campaignDescription.textContent = campaign.description;
  campaignImage.style.backgroundImage = `url(${campaign.image})`;
}

// TODO
function initializeCampaignCard(campaign) {
  //   previewTitle.textContent = campaign.title;
  //   previewDescription.textContent = campaign.description;
  //   previewCategory.textContent = campaign.category;
  //   previewImage.src = campaign.image;
  //   previewDate.textContent = campaign.deadline;
}

function calculateProgress(current, goal) {
  if (!goal) return 0;
  return Math.min(Math.round((current / goal) * 100), 100);
}

function calculateDaysRemaining(endDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const endDateOnly = new Date(endDate);
  endDateOnly.setHours(0, 0, 0, 0);

  const diff = Math.ceil((endDateOnly - today) / (1000 * 60 * 60 * 24));
  return diff > 0 ? `${diff} Day${diff === 1 ? "" : "s"} remaining` : "Ended";
}

function initializeCampaignCard(campaign) {
  const progress = calculateProgress(campaign.currentAmount, campaign.goal);

  const endDateString = campaign.endDate || campaign.deadline;
  const dateStr = endDateString.split("T")[0];
  const endDate = new Date(dateStr + "T00:00:00");

  const formattedEndDate = endDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  endDate.setHours(0, 0, 0, 0);

  const daysRemaining = calculateDaysRemaining(endDate);
  const isCampaignEnded = endDate < today;

  rightColumn.innerHTML = `
    <div class="funding-card">
      <div class="funding-header">
        <div class="funding-amount">
          <span class="funding-raised">$${campaign.currentAmount}</span>
          <span class="funding-goal">
            pledged of $${campaign.goal} goal
          </span>
        </div>
      </div>
  <div class="progress-labels">
              <span class="progress-funded">${progress}% Funded</span>
            </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${progress}%"></div>
      </div>

      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-value">
            <span class="material-icons">groups</span>
            <span>${campaign.backers || 0}</span>
          </div>
          <span class="stat-label">Backers</span>
        </div>

        <div class="stat-item">
          <div class="stat-value">
            <span class="material-icons">schedule</span>
            <span>${daysRemaining}</span>
          </div>
        </div>
      </div>

      <button class="back-button-primary" id="back-project-btn" ${isCampaignEnded ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ""}>
        ${isCampaignEnded ? "Campaign Ended" : "Back This Project"}
      </button>
    </div>
  `;
}

async function fetchCampaign(campaignId) {
  try {
    const url = `http://localhost:5000/campaigns/${campaignId}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch campaign");
    }

    const campaign = await response.json();
    // console.log(campaign);
    initializeHero(campaign);
    initializeCampaignInfo(campaign);
    initializeCampaignCard(campaign);
  } catch (error) {
    alert(error.message);
  }
}

fetchCampaign(campaignId);
