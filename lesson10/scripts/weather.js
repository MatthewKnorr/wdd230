// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// replace [LATITUDE], [LONGITUDE], and [YOUR_API_KEY] with your values
const latitude = 49.75; // replace with your latitude
const longitude = 6.64; // replace with your longitude
const apiKey = '2bf7f61f22e3a3bdf0c96cff27a40e7c';

// declare const variable "url" and assign a valid URL string
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

// define an asynchronous function named "apiFetch()"
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

// function to display results
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  captionDesc.textContent = `${desc}`;
}