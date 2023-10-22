const darkModeButton = document.getElementById("darkModeButton");
    const body = document.body;

    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        body.classList.add("dark-mode");
        darkModeButton.textContent = "🌑";
    }

    darkModeButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Toggle  emoji
        if (body.classList.contains("dark-mode")) {
            darkModeButton.textContent = "☀️";
            localStorage.setItem("darkMode", "false"); // Save light mode 
        } else {
            darkModeButton.textContent = "🌑";
            localStorage.setItem("darkMode", "true"); // Save dark mode 
        }
    });