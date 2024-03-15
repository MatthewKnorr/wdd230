// Function to get the current date and time
function getCurrentDateTime() {
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return currentDate.toLocaleDateString(undefined, options);
}

// Function to format the last modified date
function formatLastModified() {
    return document.lastModified;
}

// Function to update the footer with dynamic dates
function updateFooterDates() {
    // Get the element for the footer
    var footerParagraph = document.getElementById('footer-info');
    
    // Get the current date and time
    var currentDateTime = getCurrentDateTime();
    
    // Get the last modified date
    var lastModifiedDate = formatLastModified();
    
    // Update the content of the element with dynamic dates
    footerParagraph.textContent = 'Last Modified: ' + lastModifiedDate + ' | Current Date and Time: ' + currentDateTime;
}

// Call the function to update footer dates when the page loads
window.onload = function() {
    updateFooterDates();
};