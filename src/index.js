document.addEventListener("DOMContentLoaded", () => {});

const form = document.querySelector("#create-task-form");
const input = document.querySelector("#new-task-description");
const taskBtn = document.querySelector(".taskBtn");

// Prevent form default
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Add new taks to list and clear the input field
taskBtn.addEventListener("click", () => {
  // Add new task to list
  const tasks = document.querySelector("#tasks");
  const h2 = document.createElement("h2");
  h2.innerHTML = input.value;
  tasks.appendChild(h2);

  // Clear input field
  input.value = "";
});
