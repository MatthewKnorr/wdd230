const images = document.querySelectorAll(".image-gallery img[data-src]");

// Function to load images when they are in the viewport
function lazyLoad() {
    images.forEach((image) => {
        if (image.getBoundingClientRect().top < window.innerHeight && image.dataset.src) {
            image.src = image.dataset.src;
            image.removeAttribute("data-src");
            image.classList.add("in-viewport");
        }
    });
}

// Add a scroll event listener to trigger lazy loading
window.addEventListener("scroll", lazyLoad);
window.addEventListener("resize", lazyLoad);
window.addEventListener("load", lazyLoad);
lazyLoad(); // Load initial images in view