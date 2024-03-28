// Define baseURL
const baseURL = "https://matthewknorr.github.io/wdd230/";

// Define linksURL
const linksURL = "https://matthewknorr.github.io/wdd230/data/links.json";

// Asynchronous function to get the links data
async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
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
    week.links.forEach(link => {
      const linkElement = document.createElement("a");
      
      linkElement.href = `${baseURL}${link.url}`;
      linkElement.textContent = `${link.title}`;
      
      weekText.appendChild(linkElement);
      
      // Add separator
      const separator = document.createTextNode(" | ");
      weekText.appendChild(separator);
    });
    
    weekItem.appendChild(weekText);
    learningActivity.appendChild(weekItem);
  });
}

// Call the getLinks function to fetch and display the links
getLinks();