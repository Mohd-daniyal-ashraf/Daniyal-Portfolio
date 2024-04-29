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

const menu = document.querySelector("#menu");
const right = document.querySelector("#newlist");
let clicked = false;
menu.addEventListener("click", () => {
  if (clicked == false) {
    right.style.height = "100vh";
  } else {
    right.style.height = "0";
  }
  clicked = !clicked;
});

const item = document.querySelector("#hello");
right.addEventListener("click", () => {
  right.style.height = "0";
});
