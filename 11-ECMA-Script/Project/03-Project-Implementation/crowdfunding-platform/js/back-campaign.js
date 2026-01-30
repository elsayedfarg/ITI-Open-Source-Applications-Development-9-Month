"use strict";

const amountBtns = document.querySelectorAll(".amount-button");
const pledgeAmount = document.querySelector("#pledge-amount");
const campaignName = document.querySelector(".campaign-name");
const campaignImage = document.querySelector(".campaign-image");
const pledgeBtn = document.querySelector("#confirm-button");
const totalAmount = document.querySelector("#total-summary");
const cancelBtn = document.querySelector("#cancel-button");
const closeBtn = document.querySelector("#close-button");

const campaignId = new URLSearchParams(window.location.search).get("id");
const userId = localStorage.getItem("userId");

async function fetchCampaignData(id) {
  try {
    const url = `http://localhost:5000/campaigns/${id}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch campaign");
    }

    const campaign = await response.json();

    campaignName.textContent = campaign.title;
    campaignImage.src = campaign.image;

    return campaign;
  } catch (error) {
    alert(error.message);
  }
}

function validateAmount(amount) {
  const numAmount = parseFloat(amount);

  if (isNaN(numAmount)) {
    alert("Please enter a valid amount");
    return false;
  }

  if (numAmount <= 0) {
    alert("Amount must be greater than 0");
    return false;
  }

  if (numAmount < 1) {
    alert("Minimum pledge amount is $1");
    return false;
  }

  return true;
}

async function submitPledge() {
  const amount = pledgeAmount.value.trim();

  if (!validateAmount(amount)) {
    pledgeAmount.focus();
    return;
  }

  if (!userId) {
    alert("Please login to make a pledge");
    window.location.href = "./login.html";
    return;
  }

  if (!campaignId) {
    alert("Invalid campaign");
    return;
  }

  try {
    const pledgeData = {
      amount: parseFloat(amount),
      campaignId: parseInt(campaignId),
      userId: parseInt(userId),
    };

    const pledgeResponse = await fetch("http://localhost:5000/pledges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pledgeData),
    });

    if (!pledgeResponse.ok) {
      const errorData = await pledgeResponse.json();
      throw new Error(errorData.message || "Failed to submit pledge");
    }

    const campaign = await fetchCampaignData(campaignId);
    const newAmount = campaign.currentAmount + parseFloat(amount);

    const updateResponse = await fetch(
      `http://localhost:5000/campaigns/${campaignId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currentAmount: newAmount }),
      },
    );

    if (!updateResponse.ok) {
      alert("Pledge done but adding amount to campaign failed");
      return;
    }

    window.location.href = `campaign-details-page.html?id=${campaignId}`;
  } catch (error) {
    alert(error.message);
  }
}

if (campaignId) {
  fetchCampaignData(campaignId);
} else {
  alert("No campaign ID found");
  window.location.href = "../index.html";
}

amountBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    amountBtns.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    pledgeAmount.value = e.target.dataset.amount;
    totalAmount.textContent = `$${e.target.dataset.amount}`;
  });
});

if (pledgeBtn) {
  pledgeBtn.addEventListener("click", submitPledge);
}

function redirectToCampaign() {
  window.location.href = `campaign-details-page.html?id=${campaignId}`;
}

cancelBtn.addEventListener("click", redirectToCampaign);
closeBtn.addEventListener("click", redirectToCampaign);
