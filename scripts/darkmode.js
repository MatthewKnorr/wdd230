const darkModeButton = document.getElementById("darkModeButton");
    const body = document.body;

    // Check if dark mode is set in localStorage and apply it on page load
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        body.classList.add("dark-mode");
        darkModeButton.textContent = "🌙";
    }

    darkModeButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Toggle the emoji
        if (body.classList.contains("dark-mode")) {
            darkModeButton.textContent = "☀️";
            localStorage.setItem("darkMode", "false"); // Save light mode preference
        } else {
            darkModeButton.textContent = "🌙";
            localStorage.setItem("darkMode", "true"); // Save dark mode preference
        }
    });