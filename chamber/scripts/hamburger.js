const hamburgerButton = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("mobile-menu");
const joinSection = document.querySelector(".join");

hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("show-menu");
    joinSection.classList.toggle("push-down");
});