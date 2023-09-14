// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModified = new Date(document.lastModified);

// Get references to the elements in the footer
const currentYearElement = document.getElementById('currentYear');
const lastModifiedElement = document.getElementById('lastModified');

// Update the footer content
if (currentYearElement) {
    currentYearElement.textContent = currentYear;
}

if (lastModifiedElement) {
    lastModifiedElement.textContent = "Last modified: " + lastModified.toDateString();
}