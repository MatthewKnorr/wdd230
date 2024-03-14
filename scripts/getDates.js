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
    var footerParagraph = document.getElementById('copyright');
    
    // Get the current year
    var currentYear = getCurrentYear();
    
    // Update the content of the element with dynamic dates
    footerParagraph.textContent = 'Matthew Knorr - ' + currentYear + ' © - Last Modified: ' + formatLastModified();
}

// Call the function to update footer dates when the page loads
window.onload = function() {
    updateFooterDates();
};
