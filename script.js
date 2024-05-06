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

let sun = document.querySelector(".bxs-sun");
let a = document.querySelector(".outer");

sun.addEventListener("click", () => {
  a.classList.toggle("bg-black");
});
