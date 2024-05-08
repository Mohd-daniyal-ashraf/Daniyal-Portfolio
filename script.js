// typing effect\
const text = "full Stack Developer.";
let index = 0;
let isTyping = true;
const speed = 50;

function typeWriter() {
  const length = text.length;

  if (isTyping) {
    document.getElementById("typingEffect").textContent += text.charAt(index);
    if (index === length) {
      isTyping = false;
      setTimeout(typeWriter, 1000); // Delay before backspacing
    } else {
      setTimeout(typeWriter, speed);
    }
    index++;
  } else {
    document.getElementById("typingEffect").textContent = text.substring(
      0,
      index
    );
    if (index === 0) {
      isTyping = true;
      setTimeout(typeWriter, 1000); // Delay before typing again
    } else {
      setTimeout(typeWriter, speed);
    }
    index--;
  }
}

typeWriter();

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

// Nght Mode

let sun = document.querySelector("#night-mode");
let a = document.querySelector(".outer");
let white_content = document.querySelectorAll(".white-color");
let edu_info_container = document.querySelectorAll(".edu-info-container");
let icon_container = document.querySelectorAll(".icon-container");
let moblieMenu = document.querySelector(".newright");
// Function to toggle night mode
function toggleNightMode() {
  a.classList.toggle("bg-black");
  moblieMenu.classList.toggle("bg-black");
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

  // Store night mode state in local storage
  const nightModeEnabled = a.classList.contains("bg-black");
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
