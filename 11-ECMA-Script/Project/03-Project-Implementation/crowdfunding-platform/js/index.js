"use strict";

const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const authGuest = document.querySelector(".auth-guest");
const authUser = document.querySelector(".auth-user");
const logoutBtn = document.querySelector("#logout-btn");
const startCampaignBtn = document.querySelector(".btn-hero");
const cardGrid = document.querySelector(".card-grid");
const dashboardBtn = document.querySelector("#dashboard-btn");
const searchInput = document.querySelector(".search-input");

const isLoggedIn = localStorage.getItem("token");
const userRole = localStorage.getItem("userRole");

if (loginBtn && registerBtn) {
  loginBtn.addEventListener("click", () => {
    window.location.href = "./pages/login.html";
  });

  registerBtn.addEventListener("click", () => {
    window.location.href = "./pages/register.html";
  });
}

if (isLoggedIn && authGuest && authUser) {
  authGuest.style.display = "none";
  authUser.style.display = "flex";
}

if (dashboardBtn) {
  dashboardBtn.addEventListener("click", () => {
    if (userRole === "admin") {
      window.location.href = "./pages/admin-dashboard.html";
    } else {
      window.location.href = "./pages/user-dashboard.html";
    }
  });
}

const logoutUser = function () {
  localStorage.clear();
  window.location.href = "./index.html";
};

if (logoutBtn) {
  logoutBtn.addEventListener("click", logoutUser);
}

startCampaignBtn.addEventListener("click", () => {
  if (!isLoggedIn) {
    window.location.href = "/pages/login.html";
  } else {
    if (userRole === "user")
      window.location.href = "/pages/create-campaign.html";
    else alert("admins can not create campaigns");
  }
});

cardGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".open-in-new-btn");
  if (!btn) return;

  const campaignId = btn.dataset.campaignId;

  if (!isLoggedIn) {
    window.location.href = "/pages/login.html";
  } else {
    if (userRole === "user") {
      window.location.href = `/pages/campaign-details-page.html?id=${campaignId}`;
    } else {
      alert("admins can not see this page");
    }
  }
});

async function getAllCampaigns() {
  try {
    const url = "http://localhost:5000/campaigns";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("can not fetch campaigns");
    }
    const campaigns = await response.json();
    return campaigns;
  } catch (e) {
    alert(e);
  }
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

function displayCampaigns(campaigns) {
  cardGrid.innerHTML = "";

  if (campaigns.length === 0) {
    cardGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #6b7280;">
        <p style="font-size: 18px;">No campaigns found</p>
      </div>
    `;
    return;
  }

  campaigns.forEach((campaign) => {
    const progress = calculateProgress(campaign.currentAmount, campaign.goal);
    const endDateString = campaign.endDate || campaign.deadline;
    const dateStr = endDateString.split("T")[0];
    const endDate = new Date(dateStr + "T00:00:00");
    const daysRemaining = calculateDaysRemaining(endDate);

    cardGrid.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <div class="card-image-wrapper">
          <img
            src="${campaign.image}"
            alt="${campaign.title}"
            class="card-image"
          />
          <span class="card-category">${campaign.category}</span>
        </div>
        <div class="card-content">
          <h4 class="card-title">${campaign.title}</h4>
          <p class="card-description">
            ${campaign.description}
          </p>
          <div class="card-progress">
            <div class="progress-labels">
              <span class="progress-funded">${progress}% Funded</span>
              <span class="progress-time">${daysRemaining}</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
          </div>
          <div class="card-footer">
            <div>
              <p class="card-amount">$${campaign.currentAmount}</p>
              <p class="card-goal">Raised of $${campaign.goal}</p>
            </div>
            <button class="open-in-new-btn" data-campaign-id="${campaign.id}">
              <span class="material-symbols-outlined">open_in_new</span>
            </button>
          </div>
        </div>
      </div>`,
    );
  });
}

async function handleSearch(searchTerm) {
  const campaigns = await getAllCampaigns();
  const term = searchTerm.toLowerCase().trim();

  let filtered = campaigns.filter((campaign) => {
    const matches = !term || campaign.category.toLowerCase().includes(term);

    if (!matches) return false;

    if (!userRole) {
      return campaign.status === "approved";
    }

    return true;
  });

  displayCampaigns(filtered);
}

searchInput.addEventListener("input", (e) => {
  handleSearch(e.target.value);
});

async function DrawUI() {
  const campaigns = await getAllCampaigns();

  let filtered = !userRole
    ? campaigns.filter((c) => c.status === "approved")
    : campaigns;

  displayCampaigns(filtered);
}

DrawUI();
