const campaignHeader = document.querySelector(".campaign-header");
const pledgesContainer = document.querySelector(".pledges-container");
const campaignIdFromUrl = new URLSearchParams(window.location.search).get("id");

campaignHeader.addEventListener("click", function (e) {
  // to solve the problem of not created yet button
  if (e.target.closest("#back-to-campaign")) {
    e.preventDefault();
    if (!campaignIdFromUrl) {
      alert("Campaign ID not found");
      return;
    }
    window.location.href = `./campaign-details-page.html?id=${campaignIdFromUrl}`;
  }
});

async function getCampaign() {
  try {
    const res = await fetch(
      `http://localhost:5000/campaigns/${campaignIdFromUrl}`,
    );
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

async function getCampaignCreatorName() {
  const users = await getAllUsers();
  const campaign = await getCampaign();
  const user = users.find((user) => user.id == campaign.creatorId);
  return user.name;
}

async function getPledges() {
  try {
    const res = await fetch("http://localhost:5000/pledges");
    if (!res.ok) throw new Error("Failed to fetch pledges");
    const pledges = await res.json();

    if (campaignIdFromUrl) {
      //   console.log(pledges);
      return pledges.filter(
        (p) => p.campaignId === parseInt(campaignIdFromUrl),
      );
    }
  } catch (err) {
    alert(err.message);
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

async function drawHeader() {
  const campaign = await getCampaign();
  const creatorName = await getCampaignCreatorName();
  const pledges = await getPledges();
  const numberOfPledges = pledges.length;

  const progress = calculateProgress(campaign.currentAmount, campaign.goal);

  const endDateString = campaign.endDate || campaign.deadline;
  const dateStr = endDateString.split("T")[0];
  const endDate = new Date(dateStr + "T00:00:00");

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  endDate.setHours(0, 0, 0, 0);

  const daysRemaining = calculateDaysRemaining(endDate);
  const parts = daysRemaining.split(" ");
  const daysNumber = parseInt(parts[0]);

  campaignHeader.innerHTML = `
  <div class="campaign-info">
          <div class="campaign-title-section">
            <a href="#" id="back-to-campaign" class="back-link">
              <span class="material-symbols-outlined">arrow_back</span>
              Back to Campaign
            </a>
            <h1>${campaign.title}</h1>
            <p class="campaign-creator">
              Created by <span class="creator-name">${creatorName}</span>
            </p>
          </div>

          <div class="campaign-stats">
            <div class="stat-item">
              <span class="stat-label">Total Raised</span>
              <span class="stat-value">$${campaign.currentAmount}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Goal</span>
              <span class="stat-value">$${campaign.goal}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Total Pledges</span>
              <span class="stat-value">${numberOfPledges}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Days remaining</span>
              <span class="stat-value">${daysNumber}</span>
            </div>
          </div>
        </div>

        <div class="campaign-progress-section">
          <div class="progress-info">
            <span class="progress-percent">${progress}% funded</span>
            <span class="progress-amount">$${campaign.goal} to go</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress}%"></div>
          </div>
        </div>
  `;
}

async function getPledgeCreatorName(pledge) {
  const users = await getAllUsers();
  const user = users.find((user) => user.id == pledge.userId);
  return user.name;
}

async function drawCards() {
  const pledges = await getPledges();
  const users = await getAllUsers();
  pledgesContainer.innerHTML = "";

  for (const pledge of pledges) {
    const user = users.find((u) => u.id == pledge.userId);
    const pledgeCreator = user ? user.name : "Unknown User";

    pledgesContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="pledge-card">
        <div class="pledger-info">
            <div class="pledger-avatar">
            <span class="material-symbols-outlined">person</span>
            </div>
            <div class="pledger-details">
            <h3 class="pledger-name" style="margin-top: 10px">${pledgeCreator}</h3>
            </div>
        </div>

        <div class="pledge-amount">
            <span class="amount-label">Pledged Amount</span>
            <span class="amount-value">$${pledge.amount}</span>
        </div>
        </div>
      `,
    );
  }
}

drawHeader();
drawCards();
