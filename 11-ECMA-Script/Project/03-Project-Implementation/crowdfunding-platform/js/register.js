"use strict";

// Redirect logged-in users away from register page
if (localStorage.getItem("token")) {
  window.location.replace("../index.html");
}

const loginBtn = document.getElementById("login-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
}

//========= Get the html items ============//
const fullnameInput = document.querySelector("#full-name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const createAccountBtn = document.querySelector(".submit-btn");
const passwordToggles = document.querySelectorAll(".password-toggle");

passwordToggles.forEach((toggle) => {
  toggle.addEventListener("click", function () {
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
});

//========= Validate user input ============//
const validateUserInput = function (
  fullname,
  email,
  password,
  confirmPassword,
) {
  if (!fullname.trim()) {
    showBanner("Full name cannot be empty", "error");
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showBanner("Invalid email address", "error");
    return false;
  }
  if (password.length < 8) {
    showBanner("Password must be at least 8 chars long", "error");
    return false;
  }
  if (password != confirmPassword) {
    showBanner("Password and confirm password do not match", "error");
    return false;
  }
  return true;
};

//========= showing the banner ============//
const banner = document.getElementById("register-banner");

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

//========= create account btn click action ============//
createAccountBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const isValidUser = validateUserInput(
    fullnameInput.value,
    emailInput.value,
    passwordInput.value,
    confirmPasswordInput.value,
  );

  if (!isValidUser) return;

  const url = `http://localhost:5000/register`;
  const data = {
    name: fullnameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    role: "user",
    isActive: true,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // till the server that you will send json formatted data
      },
      body: JSON.stringify(data), // the data must be sent as a string
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData);
    }
    const newUser = await response.json();
    const role = newUser.user.role;
    const id = newUser.user.id;
    if (newUser.accessToken) {
      localStorage.setItem("token", newUser.accessToken);
      localStorage.setItem("userId", id);
      localStorage.setItem("userRole", role);
    }
    window.location.href = "login.html";
  } catch (e) {
    showBanner(e || "Registration failed", "error");
  }
});
