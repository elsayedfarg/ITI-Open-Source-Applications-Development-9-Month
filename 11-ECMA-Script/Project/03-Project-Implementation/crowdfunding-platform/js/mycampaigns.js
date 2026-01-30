"use strict";

const campaignsGrid = document.querySelector(".campaigns-grid");
const createCampaignBtn = document.querySelector("#create-campaign-btn");
const numberOfCampaigns = document.querySelector(".tab-badge");
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector("aside");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const deleteModal = document.getElementById("deleteModal");
const logoutBtn = document.getElementById("logout-btn");
const pledgesLink = document.getElementById("my-pledges-link");
const navLinks = document.querySelectorAll("aside nav a");

const token = localStorage.getItem("token");
const userRole = localStorage.getItem("userRole");
const creatorId = localStorage.getItem("userId");

let selectedCampaignId = null;

if (!token) {
  window.location.replace("./login.html");
}

if (userRole === "admin") {
  window.location.replace("admin-dashboard.html");
}

if (menuToggle && sidebar && sidebarOverlay) {
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    sidebarOverlay.classList.toggle("active");
  });

  sidebarOverlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
  });
}

// Close sidebar if any link clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      sidebar.classList.remove("active");
      sidebarOverlay.classList.remove("active");
    }
  });
});

function openDeleteModal(id) {
  selectedCampaignId = id;
  if (deleteModal) {
    deleteModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function hideModal(event) {
  if (deleteModal) {
    if (!event || event.target === event.currentTarget) {
      deleteModal.classList.remove("active");
      document.body.style.overflow = "";
      selectedCampaignId = null;
    }
  }
}

async function confirmDelete() {
  if (!selectedCampaignId) return;

  await deleteCampaign(selectedCampaignId);
  hideModal();
  DrawUI();
}

pledgesLink.addEventListener("click", function (e) {
  e.preventDefault();

  const userId = localStorage.getItem("userId");

  if (!userId) {
    console.error("User ID not found");
    return;
  }

  window.location.href = `./pledge-history.html?id=${userId}`;
});

const logoutUser = function () {
  localStorage.clear();
  window.location.href = "../index.html";
};

if (token && logoutBtn) {
  logoutBtn.addEventListener("click", logoutUser);
}

createCampaignBtn.addEventListener("click", () => {
  window.location.href = "./create-campaign.html";
});

// ============================================= UTILITY FUNCTIONS =============================================
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

function showCampaignDetailsPage(id) {
  window.location.href = `./campaign-details-page.html?id=${id}`;
}

function showEditCampaignPage(id) {
  window.location.href = `./edit-campaign.html?id=${id}`;
}

async function getCampaignsByCreatorId(id) {
  const url = `http://localhost:5000/campaigns?creatorId=${id}`;
  try {
    let response = await fetch(url);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData);
    }
    let campaigns = await response.json();
    return campaigns;
  } catch (e) {
    console.error("Error fetching campaigns:", e);
    alert("Failed to load campaigns. Please try again.");
    return [];
  }
}

async function deleteCampaign(id) {
  try {
    const url = `http://localhost:5000/campaigns/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete campaign");
    }
  } catch (e) {
    alert(e.message);
    throw e;
  }
}

async function DrawUI() {
  const campaigns = await getCampaignsByCreatorId(creatorId);
  numberOfCampaigns.textContent = campaigns.length;
  campaignsGrid.innerHTML = "";

  if (!campaigns.length) {
    campaignsGrid.innerHTML = `
      <p class="empty-state">You haven't created any campaigns yet.</p>
    `;
    return;
  }

  campaigns.forEach((campaign) => {
    let statusText = "Pending Approval";
    if (campaign.status == "approved") {
      statusText = "Approved";
    } else if (campaign.status == "rejected") {
      statusText = "Rejected";
    } else {
      statusText = "Pending Approval";
    }

    let statusClass = "pending";
    if (campaign.status == "approved") {
      statusClass = "approved";
    } else if (campaign.status == "rejected") {
      statusClass = "rejected";
    } else {
      statusClass = "pending";
    }

    const progress = calculateProgress(campaign.currentAmount, campaign.goal);

    const endDateString = campaign.endDate || campaign.deadline;

    const dateStr = endDateString.split("T")[0]; // Get just the date part
    const endDate = new Date(dateStr + "T00:00:00"); // Add time to avoid timezone issues

    const formattedEndDate = endDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const daysRemaining = calculateDaysRemaining(endDate);

    campaignsGrid.insertAdjacentHTML(
      "beforeend",
      `<div class="campaign-card">
            <div
              class="campaign-image"
              style="
                background-image: url(${campaign.image});
              "
            ></div>
            <div class="campaign-content">
              <div class="campaign-header">
                <div class="campaign-status-row">
                  <span class="status-badge ${statusClass}">${statusText}</span>
                  <span class="campaign-date">Deadline ${formattedEndDate}</span>
                </div>
                <h3 class="campaign-title">${campaign.title}</h3>
                <p class="campaign-category">${campaign.category}</p>
              </div>

              <div class="campaign-progress">
                <div class="progress-info">
                  <span class="progress-amount"
                    >$${campaign.currentAmount} <span class="progress-total">/ $${campaign.goal}</span></span
                  >
                  <span class="progress-percent">${progress}%</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
                <div class="campaign-time">
                  <span class="material-symbols-outlined">schedule</span>
                  ${daysRemaining} 
                </div>
              </div>

              <div class="campaign-actions">
                <div class="action-buttons">
                  <button onclick="showCampaignDetailsPage(${campaign.id})" class="action-btn" title="campaign details">
                    <span class="material-symbols-outlined">info</span>
                  </button>
                  <button onclick="showEditCampaignPage(${campaign.id})" class="action-btn" title="Edit Campaign">
                    <span class="material-symbols-outlined">edit</span>
                  </button>
                </div>
                <button
                  onclick="openDeleteModal(${campaign.id})"
                  class="action-btn delete"
                  title="Delete Campaign"
                >
                  <span class="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          </div>
        `,
    );
  });
}

// ============================================= INITIALIZATION =============================================
DrawUI();
