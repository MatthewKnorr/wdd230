// Define baseURL
const baseURL = "https://matthewknorr.github.io/wdd230/";

// Define linksURL
const linksURL = "https://matthewknorr.github.io/wdd230/data/links.json";

// Asynchronous function to get the links data
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);  // Debugging log
    displayLinks(data.weeks);
  } catch (error) {
    console.error("Error fetching the links:", error);
  }
}

// Function to display the activity links
function displayLinks(weeks) {
  const learningActivity = document.getElementById("learningActivity");
  
  // Clear the existing content
  learningActivity.innerHTML = "";
  
  // Loop through each week
  weeks.forEach(week => {
    const weekItem = document.createElement("li");
    const weekText = document.createElement("p");
    
    weekText.textContent = `${week.week}: `;
    
    // Loop through each link in the week
    week.links.forEach((link, index) => {
      const linkElement = document.createElement("a");
      
      linkElement.href = `${baseURL}${link.url}`;
      linkElement.textContent = `${link.title}`;
      
      weekText.appendChild(linkElement);
      
      // Add separator if it's not the last link
      if (index < week.links.length - 1) {
        const separator = document.createTextNode(" | ");
        weekText.appendChild(separator);
      }
    });
    
    weekItem.appendChild(weekText);
    learningActivity.appendChild(weekItem);
  });
}

// Call the getLinks function to fetch and display the links
getLinks();
