function isMeetingDay() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 3; // Monday, Tuesday, or Wednesday
}

function displayBanner() {
    const popupSection = document.getElementById("popupSection");
    const popupBanner = document.getElementById("popupBanner");

    if (isMeetingDay()) {
        popupSection.style.display = "flex";  // Change to "flex" for proper alignment
    } else {
        popupSection.style.display = "none";
        return;
    }

    const popupText = document.getElementById("popupText");
    popupText.innerText = "Join us for the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.";

    const closeButton = document.getElementById("closeButton");
    closeButton.style.display = "block";
}

function closePopup() {
    const popupSection = document.getElementById("popupSection");
    popupSection.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    displayBanner();
});
