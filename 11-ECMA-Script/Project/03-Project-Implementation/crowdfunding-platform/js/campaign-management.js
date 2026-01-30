"use strict";

const token = localStorage.getItem("token");
const userRole = localStorage.getItem("userRole");

if (!token) window.location.replace("../index.html");
if (userRole === "user")
  window.location.replace("../pages/user-dashboard.html");

const campaignsContainer = document.querySelector("#campaigns-container");
const approveModal = document.getElementById("approve-modal");
const deleteModal = document.getElementById("delete-modal");
const closeApproveModal = document.getElementById("close-approve-modal");
const closeDeleteModal = document.getElementById("close-delete-modal");
const cancelApprove = document.getElementById("cancel-approve");
const confirmApprove = document.getElementById("confirm-approve");
const cancelDelete = document.getElementById("cancel-delete");
const confirmDelete = document.getElementById("confirm-delete");
const campaignCountDom = document.querySelector(".campaign-count");

let selectedCampaignId = null;

async function getAllCampaigns() {
  try {
    const res = await fetch("http://localhost:5000/campaigns");
    if (!res.ok) throw new Error("Failed to fetch campaigns");
    const campaigns = await res.json();

    // Filter out rejected campaigns (optional - uncomment if you want to hide them)
    // return campaigns.filter((c) => c.status !== "rejected");

    return campaigns;
  } catch (err) {
    alert(err.message);
    return [];
  }
}

async function updateCampaignStatus(campaignId, status) {
  try {
    const response = await fetch(
      `http://localhost:5000/campaigns/${campaignId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      },
    );

    if (!response.ok) throw new Error(`Failed to ${status} campaign`);

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    }

    return true;
  } catch (err) {
    throw err;
  }
}

async function deleteCampaign(campaignId) {
  try {
    const response = await fetch(
      `http://localhost:5000/campaigns/${campaignId}`,
      {
        method: "DELETE",
      },
    );

    if (!response.ok) throw new Error("Failed to delete campaign");

    return true;
  } catch (err) {
    throw err;
  }
}

async function drawUI() {
  const campaigns = await getAllCampaigns();

  if (!campaigns || campaigns.length === 0) {
    campaignCountDom.textContent = "0 Campaigns";
    campaignsContainer.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; padding: 2rem;">
          No campaigns found
        </td>
      </tr>
    `;
    return;
  }

  campaignCountDom.textContent = `${campaigns.length} Campaign${campaigns.length !== 1 ? "s" : ""}`;
  campaignsContainer.innerHTML = "";

  campaigns.forEach((c) => {
    const status = c.status || "pending";

    // Show approve/reject buttons only if the current status is pending
    const showApprove = status === "pending";

    campaignsContainer.insertAdjacentHTML(
      "beforeend",
      `
      <tr>
        <td>
          <input type="checkbox" class="checkbox campaign-checkbox" disabled data-campaign-id="${c.id}" />
        </td>
        <td>
          <div class="campaign-info">
            <img src="${c.image}" alt="Campaign image" class="campaign-image"/>
            <div class="campaign-details">
              <div class="campaign-title">${c.title}</div>
              <div class="campaign-creator">Creator ID: ${c.creatorId}</div>
              <div class="campaign-goal">Goal: $${c.goal}</div>
            </div>
          </div>
        </td>
        <td>
          <span class="status-badge status-${status}">
            <span class="status-dot dot-${status}"></span>
            ${status.toUpperCase()}
          </span>
        </td>
        <td>
          <div class="campaign-actions">
            ${showApprove ? `<button class="action-btn action-btn-approve" data-campaign-id="${c.id}">Approve</button>` : ""}
            ${showApprove ? `<button class="action-btn action-btn-reject" data-campaign-id="${c.id}">Reject</button>` : ""}
            <button class="action-btn action-btn-delete" data-campaign-id="${c.id}">Delete</button>
          </div>
        </td>
      </tr>
      `,
    );
  });

  attachActionListeners();
}

function attachActionListeners() {
  document.querySelectorAll(".action-btn-approve").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const campaignId = Number(btn.dataset.campaignId);

      if (confirm("Are you sure you want to approve this campaign?")) {
        try {
          await updateCampaignStatus(campaignId, "approved");
          await drawUI();
        } catch (err) {
          alert(`Failed to approve campaign: ${err.message}`);
        }
      }
    });
  });

  document.querySelectorAll(".action-btn-reject").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const campaignId = Number(btn.dataset.campaignId);

      if (confirm("Are you sure you want to reject this campaign?")) {
        try {
          await updateCampaignStatus(campaignId, "rejected");
          await drawUI();
        } catch (err) {
          alert(`Failed to reject campaign: ${err.message}`);
        }
      }
    });
  });

  document.querySelectorAll(".action-btn-delete").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedCampaignId = Number(btn.dataset.campaignId);
      deleteModal.style.display = "flex";
    });
  });
}

closeDeleteModal.addEventListener("click", () => {
  deleteModal.style.display = "none";
  selectedCampaignId = null;
});

cancelDelete.addEventListener("click", () => {
  deleteModal.style.display = "none";
  selectedCampaignId = null;
});

confirmDelete.addEventListener("click", async () => {
  if (!selectedCampaignId) return;

  try {
    await deleteCampaign(selectedCampaignId);
    deleteModal.style.display = "none";
    selectedCampaignId = null;
    await drawUI();
  } catch (err) {
    alert(`Failed to delete campaign: ${err.message}`);
  }
});

drawUI();
