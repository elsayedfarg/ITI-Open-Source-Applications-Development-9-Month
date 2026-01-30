"use strict";

// Redirect logged-in users away from register page
if (localStorage.getItem("token")) {
  window.location.replace("../index.html");
}

const registerBtn = document.getElementById("register-btn");
if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    window.location.href = "register.html";
  });
}

//========= Get the html items ============//
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector(".submit-btn");
const passwordToggle = document.querySelector(".password-toggle");

if (passwordToggle) {
  passwordToggle.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const passwordInput = document.getElementById(targetId);
    const icon = this.querySelector(".material-symbols-outlined");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.textContent = "visibility";
    } else {
      passwordInput.type = "password";
      icon.textContent = "visibility_off";
    }
  });
}

//========= showing the banner ============//
const banner = document.getElementById("login-banner");

let bannerTimeOut; // to reset it for every new error
function showBanner(message = "", type = "success", duration = 3000) {
  if (bannerTimeOut) clearTimeout(bannerTimeOut);
  banner.textContent = message;
  banner.classList.remove("hidden", "success", "error");
  banner.classList.add("show", type);

  bannerTimeOut = setTimeout(() => {
    banner.classList.remove("show", "success", "error");
    banner.classList.add("hidden");
  }, duration);
}

//========= user redirection============//
const redirectUserDependingOnTheRole = function (role) {
  //redirect to user or admin dashboard depending on the role
  window.location.href =
    role === "user" ? "user-dashboard.html" : "admin-dashboard.html";
};

loginBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const url = `http://localhost:5000/login`;
  const data = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData);
    }
    const loggedUser = await response.json();
    const role = loggedUser.user.role;
    const id = loggedUser.user.id;
    const isActive = loggedUser.user.isActive;
    if (!isActive) {
      showBanner(
        "Your account has been deactivated. Please contact support.",
        "error",
        5000,
      );
      return; // Stop further execution - don't log them in
    }
    if (loggedUser.accessToken) {
      localStorage.setItem("token", loggedUser.accessToken);
      localStorage.setItem("userId", id);
      localStorage.setItem("userRole", role);
    }

    redirectUserDependingOnTheRole(role);
  } catch (e) {
    showBanner(e || "Login failed", "error");
  }
});
