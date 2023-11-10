const baseURL = "https://matthewknorr.github.io/wdd230/";
const linksURL = "https://matthewknorr.github.io/wdd230/data/links.json";
const phrasesURL = "https://matthewknorr.github.io/wdd230/data/phrases.json";

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
    return data;
  } catch (error) {
    console.error('Error fetching phrases data:', error);
  }
}

function getRandomPhrase(phrases) {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}

async function updateListWithRandomPhrase() {
  const phrasesData = await getPhrases();
  const listElement = document.querySelector(".card-one ol");

  const listItem = document.createElement("li");
  const unorderedList = document.createElement("ul");
  const phraseItem = document.createElement("li");

  const phrase = getRandomPhrase(phrasesData.phrases);
  phraseItem.textContent = phrase;

  unorderedList.appendChild(phraseItem);
  listItem.appendChild(unorderedList);
  listElement.appendChild(listItem);
}

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

  updateListWithRandomPhrase();
}

getLinks();