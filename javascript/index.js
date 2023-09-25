// Get references to the hamburger and close icons
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

// Get reference to the menu element
const menu = document.getElementById("menu");

// Function to open the menu
function openMenu() {
  // Show the close icon and hide the hamburger icon
  hamburgerIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");

  // Show the menu
  menu.classList.add("menu-open");
}

// Function to close the menu
function closeMenu() {
  // Hide the close icon and show the hamburger icon
  hamburgerIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");

  // Hide the menu
  menu.classList.remove("menu-open");
}

// Add click event listeners to the hamburger and close icons
hamburgerIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);
