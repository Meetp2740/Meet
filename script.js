document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const content = document.querySelector(".content");

  // Preloader animation on page load
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");
      content.classList.add("visible");
    }, 500); // 4 seconds delay to simulate loading
  });

  // Select the links and the line element
const links = document.querySelectorAll('.navigation .links a');
const line = document.querySelector('.navigation .glow-line');
const nav = document.querySelector('.navigation');

// Function to move the line under the hovered link
function moveLine(link) {
    const rect = link.getBoundingClientRect(); // Get the position and size of the link
    const navRect = link.closest('.navigation').getBoundingClientRect(); // Get the position of the navigation container

    // Set the width and left position of the line based on the hovered link
    line.style.width = `${rect.width}px`;
    line.style.left = `${rect.left - navRect.left}px`;
}

// Set up event listeners for hover
links.forEach(link => {
    link.addEventListener('mouseenter', () => moveLine(link));
});

// Move back to the first link when hovering out of the navigation
nav.addEventListener('mouseleave', () => moveLine(links[0]));


// Optional: Set the initial position of the line to the first link (HOME)
document.addEventListener('DOMContentLoaded', () => {
    moveLine(links[0]); // Initially position the line under the "HOME" link
});
});
