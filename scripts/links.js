const baseURL = "https://matthewknorr.github.io/wdd230/";
const linksURL = "https://matthewknorr.github.io/wdd230/data/links.json";
const phrasesURL = "https://matthewknorr.github.io/wdd230/data/phrases.json"; // Add the URL for phrases.json

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error('Error fetching links data:', error);
  }
}

async function getPhrases() {
  try {
    const response = await fetch(phrasesURL);
    const data = await response.json();
    updateListWithRandomPhrase(data);
  } catch (error) {
    console.error('Error fetching phrases data:', error);
  }
}

getLinks();
getPhrases(); // Call getPhrases to fetch and update phrases

function displayLinks(weeks) {
  const cardOne = document.querySelector('.card-one ol');

  weeks.lessons.forEach((week) => {
    week.links.forEach((link) => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);
      cardOne.appendChild(listItem);
    });
  });
}

function getRandomPhrase(phrases) {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}

function updateListWithRandomPhrase(phrasesData) {
  const listElement = document.querySelector(".card-one ol"); // Assuming you want to add the phrase to the same list
  const phrase = getRandomPhrase(phrasesData.phrases);

  const listItem = document.createElement("li");
  listItem.textContent = phrase;

  listElement.appendChild(listItem);
}