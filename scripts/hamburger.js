document.addEventListener('DOMContentLoaded', function () {
    // Get references to the hamburger button, mobile menu, and close button
    const hamburgerButton = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeButton = document.getElementById('close-button');
  
    // Add a click event listener to the hamburger button
    hamburgerButton.addEventListener('click', function () {
      // Toggle the 'show-menu' class on the mobile menu
      mobileMenu.classList.toggle('show-menu');
    });
  
    // Add a click event listener to the close button
    closeButton.addEventListener('click', function () {
      // Remove the 'show-menu' class to hide the mobile menu
      mobileMenu.classList.remove('show-menu');
    });
  });