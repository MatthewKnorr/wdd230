// Declare a const variable named "url" that contains the URL string of the JSON resource provided.
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Declare a const variable named "cards" that selects the HTML div element from the document with an id value of "cards".
const cards = document.querySelector('#cards');

// Create an async defined function named "getProphetData" to fetch data from the JSON source url.
async function getProphetData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // Uncomment the following line to check the data in the console.
    // console.table(data.prophets);
    displayProphets(data.prophets); // Call the displayProphets function with the prophets data.
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the getProphetData function to start fetching and processing the data.
getProphetData();

// Define a function expression named "displayProphets" that processes and displays prophet information as cards.
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let portrait = document.createElement('img');

    // Build the h2 content to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Build the image portrait by setting attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section (card) with the created elements
    card.appendChild(fullName);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
}