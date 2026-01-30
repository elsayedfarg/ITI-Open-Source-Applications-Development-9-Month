"use strict";

const token = localStorage.getItem("token");
const userRole = localStorage.getItem("userRole");

if (!token) {
  window.location.replace("../index.html");
}

if (userRole === "user") {
  window.location.replace("../pages/user-dashboard.html");
}

const userCountDom = document.querySelector(".user-count");
const usersContainer = document.querySelector("#users-container");
const selectionBar = document.querySelector(".selection-bar");
const selectionBarCountBadge = document.querySelector(".count-badge");
const closeBar = document.querySelector("#close-bar");
const banBtn = document.querySelector("#ban-button");

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

async function DrawUI() {
  const users = await getAllUsers();
  userCountDom.textContent = `${users.length} Users`;
  usersContainer.innerHTML = "";

  users.forEach((user) => {
    const currentStatus = user.isActive ? "active" : "banned";
    const isBanned = !user.isActive;
    // console.log(user);
    usersContainer.insertAdjacentHTML(
      "beforeend",
      `
      <tr>
        <td>
          <input
            onchange="countCheckedUsers()"
            type="checkbox"
            class="checkbox user-checkbox"
            data-user="${user.name}"
            data-user-id="${user.id}"
            ${isBanned ? "disabled" : ""}
          />
        </td>
        <td>
          <div class="user-info">
            <img
              src="https://dummyimage.com/100x100/ffffff/ffffff.png&text="
              alt="User avatar"
              class="user-avatar"
            />
            <div>
              <div class="user-name">${user.name}</div>
              <div class="user-email">${user.email}</div>
            </div>
          </div>
        </td>
        <td>
          <span class="status-badge status-${currentStatus}">
            <span class="status-dot dot-${currentStatus}"></span>
            ${currentStatus.toUpperCase()}
          </span>
        </td>
      </tr>`,
    );
  });
  countCheckedUsers();
}

DrawUI();

//===========================================================//

closeBar.addEventListener("click", () => {
  selectionBar.style.bottom = "-80px";
});

function toggleSelectionBar(numberOfCheckedBoxes) {
  if (numberOfCheckedBoxes >= 1) selectionBar.style.bottom = 0;
  else selectionBar.style.bottom = "-80px";

  selectionBarCountBadge.textContent = numberOfCheckedBoxes;
}

function countCheckedUsers() {
  // take care of selecting disabled boxes
  const checkBoxes = document.querySelectorAll(".user-checkbox:not(:disabled)");
  const numberOfCheckedBoxes = [...checkBoxes].filter(
    (box) => box.checked,
  ).length;
  toggleSelectionBar(numberOfCheckedBoxes);
  return numberOfCheckedBoxes;
}

function isUserSelected(userId) {
  const checkbox = document.querySelector(
    `.user-checkbox[data-user-id="${userId}"]`,
  );
  return checkbox ? checkbox.checked : false; // validate that checkbox exist at first and not disabled
}

async function banUsers(users) {
  try {
    await Promise.all(
      users.map((user) =>
        fetch(`http://localhost:5000/users/${user.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ isActive: false }),
        }),
      ),
    );
    await DrawUI();
  } catch (err) {
    alert("Failed to ban users: " + err.message);
  }
}

banBtn.addEventListener("click", async () => {
  const selectedCheckboxes = document.querySelectorAll(
    ".user-checkbox:checked",
  );

  const usersToBan = [...selectedCheckboxes].map((box) => ({
    id: Number(box.dataset.userId),
  }));

  if (usersToBan.length === 0) return;

  await banUsers(usersToBan);
});
