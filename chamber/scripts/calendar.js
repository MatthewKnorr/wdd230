document.addEventListener("DOMContentLoaded", function() {
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const monthNames = [
        "January", "February", "March", "April", 
        "May", "June", "July", "August", 
        "September", "October", "November", "December"
    ];

    const calendar = document.querySelector(".calendar");
    const currentMonthYear = document.getElementById("currentMonthYear");
    const dates = document.getElementById("dates");

    function generateCalendar() {
        dates.innerHTML = "";
        currentMonthYear.innerHTML = `${monthNames[currentMonth]} ${currentYear}`;

        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

        for(let i = 0; i < firstDay; i++) {
            const dateItem = document.createElement("div");
            dateItem.classList.add("date-item", "empty");
            dates.appendChild(dateItem);
        }

        for(let i = 1; i <= lastDay; i++) {
            const dateItem = document.createElement("div");
            dateItem.classList.add("date-item");
            dateItem.innerHTML = i;
            if (i === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
                dateItem.classList.add("today");
            }
            dates.appendChild(dateItem);
        }
    }

    generateCalendar();

    document.getElementById("prevMonth").addEventListener("click", () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar();
    });

    document.getElementById("nextMonth").addEventListener("click", () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar();
    });
});
