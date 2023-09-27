document.addEventListener('DOMContentLoaded', function () {
    // Get references to the hamburger button, mobile menu, and close button
    const hamburgerButton = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeButton = document.getElementById('close-button');
    const firstCard = document.querySelector('.card-one'); // Get the first card

    // Add a click event listener to the hamburger button
    hamburgerButton.addEventListener('click', function () {
        // Toggle the 'show-menu' class on the mobile menu
        mobileMenu.classList.toggle('show-menu');
        // Toggle the 'hidden-card' class on the first card
        // firstCard.classList.toggle('hidden-card');
        mobileMenu.classList.toggle('show-menu');
    });

    // Add a click event listener to the close button
    closeButton.addEventListener('click', function () {
        // Remove the 'show-menu' class to hide the mobile menu
        mobileMenu.classList.remove('show-menu');
        // Remove the 'hidden-card' class to show the first card
        firstCard.classList.remove('hidden-card');
    });
});