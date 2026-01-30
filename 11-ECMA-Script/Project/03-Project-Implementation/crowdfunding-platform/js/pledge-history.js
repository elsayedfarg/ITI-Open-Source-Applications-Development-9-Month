"use strict";

const pledgeCount = document.querySelector(".pledge-count");
const pledgeCards = document.querySelector(".pledge-cards");
const userRole = localStorage.getItem("userRole");
const headerActions = document.querySelector(".header-actions");

const userIdFromUrl = new URLSearchParams(window.location.search).get("id");

headerActions.addEventListener("click", function (e) {
  // to solve the problem of not created yet button
  if (e.target.closest("#back-to-dashboard")) {
    e.preventDefault();
    if (userRole == "admin") {
      window.location.href = `admin-dashboard.html`;
    } else {
      window.location.href = `user-dashboard.html`;
    }
  }
});

async function getAllCampaigns() {
  try {
    const res = await fetch("http://localhost:5000/campaigns");
    if (!res.ok) throw new Error("Failed to fetch campaigns");
    const campaigns = await res.json();
    return campaigns;
  } catch (err) {
    alert(err.message);
  }
}

async function getAllPledges() {
  try {
    const res = await fetch("http://localhost:5000/pledges");
    if (!res.ok) throw new Error("Failed to fetch pledges");
    const pledges = await res.json();

    // return all the pledges if admin
    if (userRole === "admin" || !userIdFromUrl) {
      return pledges;
    }

    // filter the pledges if the user is not admin
    if (userIdFromUrl) {
      return pledges.filter((p) => p.userId === parseInt(userIdFromUrl));
    }

    return pledges;
  } catch (err) {
    alert(err.message);
  }
}

async function totalPledgeAmount() {
  const pledges = await getAllPledges();
  const totalAmount = pledges.reduce((sum, p) => sum + p.amount, 0);
  return totalAmount;
}

async function drawHeader() {
  const totalAmount = await totalPledgeAmount();
  pledgeCount.textContent = `Total pledged: $${totalAmount}`;
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

async function drawCards() {
  const campaigns = await getAllCampaigns();
  const pledges = await getAllPledges();

  pledgeCards.innerHTML = "";

  pledges.forEach((pledge) => {
    const campaign = campaigns.find((c) => c.id === pledge.campaignId);

    if (!campaign) return;

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

    pledgeCards.insertAdjacentHTML(
      "beforeend",
      `<div class="pledge-card">
        <div class="pledge-header">
          <div>
            <h2 class="pledge-title">${campaign.title}</h2>
          </div>
        </div>

        <div class="pledge-details">
          <div class="detail-group">
            <span class="detail-label">Amount Pledged</span>
            <span class="detail-value amount">$${pledge.amount}</span>
          </div>
        </div>

        <div class="pledge-progress">
          <div class="progress-info">
            <span class="progress-percent">${progress}% funded</span>
            <span class="progress-days">${daysRemaining}</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress}%"></div>
          </div>
        </div>

        <div class="pledge-actions">
          <button class="btn btn-view" onclick="goToCampaignDetailsPage(${campaign.id})">View Campaign</button>
        </div>
      </div>`,
    );
  });
}

function goToCampaignDetailsPage(id) {
  window.location.href = `campaign-details-page.html?id=${id}`;
}

drawHeader();
drawCards();
