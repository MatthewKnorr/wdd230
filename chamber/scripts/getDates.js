// Function to get the current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// Function to format the last modified date
function formatLastModified() {
    return document.lastModified;
}

// Function to update the footer with dynamic dates
function updateFooterDates() {
    // Get the elements for the copyright year and last modified date
    var footerParagraphs = document.querySelectorAll('footer p');
    
    // Get the current year
    var currentYear = getCurrentYear();
    
    // Update the content of the elements with dynamic dates
    footerParagraphs[0].textContent = 'Matthew Knorr - ' + currentYear + ' © - Last Modified: ' + formatLastModified();
}

// Call the function to update footer dates when the page loads
window.onload = function() {
    updateFooterDates();
};