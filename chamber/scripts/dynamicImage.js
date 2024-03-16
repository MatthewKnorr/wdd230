document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.querySelector('.main-content');

    // Starting size for the images
    let imageSize = 450;

    // Repeat 6 times to create 6 images
    for (let i = 0; i < 6; i++) {
        // Create new container for the image
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container'); // Add a class to the container for styling
        
        // Create new image element
        const img = document.createElement('img');
        
        // Set attributes for the image
        img.src = `https://picsum.photos/${imageSize}`;
        img.alt = `Local Photo ${i + 1}`;
        img.loading = 'lazy';

        // Append the image to the container
        imageContainer.appendChild(img);

        // Append the image container to the main content
        mainContent.appendChild(imageContainer);
        
        // Increase the image size for the next iteration
        imageSize++;
    }
});
