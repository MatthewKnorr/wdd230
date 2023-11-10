const baseURL = "https://matthewknorr.github.io/wdd230/";

// Define the URL for the links.json data file
const linksURL = "https://matthewknorr.github.io/wdd230/data/links.json";

// Function to get links data
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data); // Call the displayLinks function with the links data
  } catch (error) {
    console.error('Error fetching links data:', error);
  }
}

// Call the getLinks function to start fetching and processing the data
getLinks();

// Function to display links
function displayLinks(weeks) {
  const cardContainer = document.querySelector('.card-container');
  const learningActivitiesList = document.querySelector('.card-one ol');

  // Iterate through each week in the data
  weeks.lessons.forEach((week) => {
    // Create a list item for each link in the week
    week.links.forEach((link) => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');

      // Set the href and text content of the anchor element
      anchor.href = link.url;
      anchor.textContent = link.title;

      // Append the anchor element to the list item
      listItem.appendChild(anchor);

      // Append the list item to the learning activities list
      learningActivitiesList.appendChild(listItem);
    });
  });

  // Append the updated learning activities list to the card container
  cardContainer.appendChild(learningActivitiesList);
}