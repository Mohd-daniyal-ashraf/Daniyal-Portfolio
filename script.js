// -------------------------------------------------------------------------------------
// menu for mobile
const menu = document.querySelector("#menu");
const right = document.querySelector("#newlist");

menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  right.classList.toggle("open");
});
right.addEventListener("click", () => {
  right.classList.toggle("open");
  menu.classList.toggle("bx-x");
});

// -------------------------------------------------------------------------------------
// Nght Mode

let sun = document.querySelector("#night-mode");
let white_content = document.querySelectorAll(".white-color");
let edu_info_container = document.querySelectorAll(".edu-info-container");
let icon_container = document.querySelectorAll(".icon-container");
let moblieMenu = document.querySelector(".newright");
let brand = document.querySelectorAll(".brand");
let project = document.querySelectorAll(".project");
let li = document.querySelectorAll(".li");
// Function to toggle night mode
function toggleNightMode() {
  document.body.classList.toggle("bgblack");
  moblieMenu.classList.toggle("bgblack");
  sun.classList.toggle("bxs-sun");
  sun.classList.toggle("bxs-moon");
  white_content.forEach(function (element) {
    element.classList.toggle("white-c");
  });
  icon_container.forEach(function (element) {
    element.classList.toggle("new-icon-container");
    element.classList.toggle("icon-container");
  });
  edu_info_container.forEach(function (element) {
    element.classList.toggle("edu-info-container");
    element.classList.toggle("new-edu-info-container");
  });
  brand.forEach(function (element) {
    element.classList.toggle("main-c");
    element.classList.toggle("new-brand-color");
  });

  project.forEach(function (element) {
    element.classList.toggle("project-box-shadow");
    element.classList.toggle("night-border");
  });

  li.forEach(function (element) {
    element.classList.toggle("li-color");
  });

  // Store night mode state in local storage
  const nightModeEnabled = document.body.classList.contains("bgblack");
  localStorage.setItem("nightModeEnabled", nightModeEnabled);
}

// Event listener for sun icon click
sun.addEventListener("click", toggleNightMode);

// Check if night mode is enabled in local storage on page load
window.addEventListener("load", () => {
  const nightModeEnabled = localStorage.getItem("nightModeEnabled") === "true";
  if (nightModeEnabled) {
    toggleNightMode(); // Apply night mode if it was enabled
  }
});

// -------------------------------------------------------------------------------------

let effeft = document.querySelector("#outer-effect");
document.addEventListener("mousemove", (e) => {
  effeft.style.cssText = "left:" + e.clientX + "px;top:" + e.clientY + "px";
});
document.addEventListener("click", (e) => {
  effeft.classList.add("cur");
  setTimeout(() => {
    effeft.classList.remove("cur");
  }, 400);
});

// -------------------------------------------------------------------------------------

// got to top
const button = document.querySelector(".upper");

window.addEventListener("scroll", function () {
  const scrollHeight = window.scrollY;
  if (scrollHeight > 400) {
    button.style.opacity = "1";
  } else {
    button.style.opacity = "0";
  }
});

button.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Check initial scroll position on page load
document.addEventListener("DOMContentLoaded", function () {
  const scrollHeight = window.scrollY;
  if (scrollHeight > 400) {
    button.style.opacity = "1";
  } else {
    button.style.opacity = "0";
  }
});

