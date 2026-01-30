"use strict";

const token = localStorage.getItem("token");
const userId = localStorage.getItem("userId");
const userRole = localStorage.getItem("userRole");

const pledgesLink = document.getElementById("my-pledges-link");

if (!token) {
  // prevents a user from going back to a page
  window.location.replace("../index.html");
}

if (userRole === "user") {
  window.location.replace("../pages/user-dashboard.html");
}

const logoutBtn = document.getElementById("logout-btn");

const logoutUser = function () {
  localStorage.clear();
  window.location.href = "../index.html";
};

if (token && logoutBtn) {
  logoutBtn.addEventListener("click", logoutUser);
}
