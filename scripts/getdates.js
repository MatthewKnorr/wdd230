const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
const currentYearElement = document.getElementById('currentYear');
const lastModifiedElement = document.getElementById('lastModified');

if (currentYearElement) {
    currentYearElement.textContent = currentYear;
}

if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${(lastModified.getMonth() + 1).toString().padStart(2, '0')}/${lastModified.getDate().toString().padStart(2, '0')}/${lastModified.getFullYear()} ${(lastModified.getHours().toString().padStart(2, '0'))}:${(lastModified.getMinutes().toString().padStart(2, '0'))}:${(lastModified.getSeconds().toString().padStart(2, '0'))}`;
}