document.addEventListener("DOMContentLoaded", function () {
    // 1️⃣ Initialize display element variable
    const visitsDisplay = document.getElementById("visits-count");

    // 2️⃣ Get the stored value for the "numVisits-ls" key in localStorage if it exists.
    // If the "numVisits-ls" key is missing, then assign 0 to the "numVisits" variable.
    let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

    // 3️⃣ Determine if this is the first visit or display the number of visits.
    if (numVisits !== 0) {
        visitsDisplay.textContent = numVisits;
    } else {
        visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
    }

    // 4️⃣ Increment the number of visits by one.
    numVisits++;

    // 5️⃣ Store the new visit total into localStorage, key="numVisits-ls"
    localStorage.setItem("numVisits-ls", numVisits);
});