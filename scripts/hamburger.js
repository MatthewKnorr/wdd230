document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeButton = document.getElementById('close-button');

    hamburgerButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('show-menu');
    });

    closeButton.addEventListener('click', function () {
        mobileMenu.classList.remove('show-menu');
    });
});
