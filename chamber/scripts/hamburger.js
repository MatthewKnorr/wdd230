const hamburgerButton = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("mobile-menu");
const joinSection = document.querySelector(".join"); // Get the .join element

// Add a click event listener to the button
hamburgerButton.addEventListener("click", () => {
    // Toggle the visibility of the mobile menu by toggling the "show-menu" class
    mobileMenu.classList.toggle("show-menu");

    joinSection.classList.toggle("push-down");
});