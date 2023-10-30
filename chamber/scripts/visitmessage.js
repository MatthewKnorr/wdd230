// Check if the user has visited before
if (localStorage.getItem("lastVisitDate")) {
    // Retrieve the stored visit date
    const storedVisitDate = new Date(localStorage.getItem("lastVisitDate"));
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - storedVisitDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Display appropriate message based on the time difference
    const messageElement = document.getElementById("welcome-message");
    const timeElement = document.getElementById("last-visited-time");
    if (daysDifference === 0) {
        messageElement.textContent = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        messageElement.textContent = "You last visited 1 day ago.";
    } else {
        messageElement.textContent = `You last visited ${daysDifference} days ago.`;
    }

    // Display the date and time of the last visit
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    timeElement.textContent = `Last visited on ${storedVisitDate.toLocaleDateString('en-US', options)}`;
} else {
    // First visit, display welcome message
    document.getElementById("welcome-message").textContent = "Welcome! Let us know if you have any questions.";
}

// Store the current visit date in localStorage
localStorage.setItem("lastVisitDate", new Date().toString());