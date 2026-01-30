"use strict";

const token = localStorage.getItem("token");
const userId = localStorage.getItem("userId");
const userRole = localStorage.getItem("userRole");

const logoutBtn = document.getElementById("logout-btn");
const createCampaignBtn = document.getElementById("create-campaign");
const pledgesLink = document.getElementById("my-pledges-link");

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector("aside");
const sidebarOverlay = document.getElementById("sidebarOverlay");

if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    if (sidebarOverlay) {
      sidebarOverlay.classList.toggle("active");
    }
  });

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", function () {
      sidebar.classList.remove("active");
      this.classList.remove("active");
    });
  }

  // if the user clicked over any link remove the sidebar
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth < 768) {
        sidebar.classList.remove("active");
        if (sidebarOverlay) {
          sidebarOverlay.classList.remove("active");
        }
      }
    });
  });
}

if (!token) {
  // prevents a user from going back to a page
  window.location.replace("../index.html");
}

if (userRole === "admin") {
  window.location.replace("../pages/admin-dashboard.html");
}

const createCampaign = function () {
  window.location.href = "./create-campaign.html";
};

if (createCampaignBtn) {
  createCampaignBtn.addEventListener("click", createCampaign);
}

const logoutUser = function () {
  localStorage.clear();
  window.location.href = "../index.html";
};

if (token && logoutBtn) {
  logoutBtn.addEventListener("click", logoutUser);
}

pledgesLink.addEventListener("click", function (e) {
  e.preventDefault(); // stop normal href behavior

  const userId = localStorage.getItem("userId");

  if (!userId) {
    console.error("User ID not found");
    return;
  }

  window.location.href = `./pledge-history.html?id=${userId}`;
});

let getUserData = async function (userId) {
  try {
    const url = `http://localhost:5000/users/${userId}`;
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    const userData = await response.json();
    displayUserInfo(userData);
    // return userData;
  } catch (e) {
    alert(e);
  }
};

const displayUserInfo = function (user) {
  const welcomeMessage = document.getElementById("welcome-msg");
  welcomeMessage.textContent = `Welcome back, ${user.name}`;

  const userName = document.getElementById("user-name");
  userName.textContent = `${user.name}`;

  const userRoleEl = document.getElementById("user-role");
  userRoleEl.textContent = `${user.role}`;
};

const loadUserCampaigns = async function (userId) {
  try {
    const url = ``;
    const response = await fetch(url);
    const campaigns = await response.json();
  } catch (e) {
    alert(e);
  }
};

const dashboardInitialization = async function () {
  await getUserData(userId);
  // await loadUserCampaigns(userId);
};
dashboardInitialization();
