document.addEventListener("DOMContentLoaded", function () {
    const visitCounter = document.getElementById("visitCounter");
    
    function addSuffix(num) {
        if (num === 11 || num === 12 || num === 13) {
            return `${num}th`;
        }

        const lastDigit = num % 10;
        switch (lastDigit) {
            case 1:
                return `${num}st`;
            case 2:
                return `${num}nd`;
            case 3:
                return `${num}rd`;
            default:
                return `${num}th`;
        }
    }

    let lastVisitDate = localStorage.getItem("lastVisitDate");
    let visitCount = parseInt(localStorage.getItem("visitCount")) || 0;

    visitCount++;

    const currentDate = new Date().toISOString().split('T')[0];

    if (lastVisitDate) {
        const daysSinceLastVisit = Math.floor((Date.parse(currentDate) - Date.parse(lastVisitDate)) / (24 * 60 * 60 * 1000));

        if (daysSinceLastVisit === 0) {
            visitCounter.innerText = `Welcome back! This is your ${addSuffix(visitCount)} visit today.`;
        } else if (daysSinceLastVisit === 1) {
            visitCounter.innerText = `Welcome back! It's been 1 day since your last visit. You have visited ${addSuffix(visitCount)} times.`;
        } else {
            visitCounter.innerText = `Welcome back! It's been ${daysSinceLastVisit} days since your last visit. You have visited ${addSuffix(visitCount)} times.`;
        }
    } else {
        visitCounter.innerText = `Welcome! This is your first visit. You have visited ${addSuffix(visitCount)} times.`;
    }

    localStorage.setItem("lastVisitDate", currentDate);
    localStorage.setItem("visitCount", visitCount.toString());
});