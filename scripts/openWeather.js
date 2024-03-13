async function fetchWeatherData(town) {
    const apiKey = '2bf7f61f22e3a3bdf0c96cff27a40e7c'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeatherInfo(weatherData) {
    const weatherInfoDiv = document.getElementById('weather-info');
    weatherInfoDiv.innerHTML = `
        <h4>${weatherData.name}, ${weatherData.sys.country}</h4>
        <p>Temperature: ${weatherData.main.temp.toFixed(2)} °F</p>
        <p>Description: ${weatherData.weather[0].description} ${getWeatherEmoji(weatherData.weather[0].main)}</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <p>Wind Speed: ${weatherData.wind.speed.toFixed(2)} mph</p>
    `;
}

async function getWeather() {
    const weatherData = await fetchWeatherData('American Fork');
    if (weatherData) {
        displayWeatherInfo(weatherData);
    }
}

window.onload = getWeather;

function getWeatherEmoji(weatherMain) {
    const emojiMap = {
        'Clear': '☀️',
        'Clouds': '☁️',
        'Drizzle': '🌧️',
        'Rain': '🌧️',
        'Thunderstorm': '⛈️',
        'Snow': '❄️',
        'Mist': '🌫️',
        'Smoke': '🌫️',
        'Haze': '🌫️',
        'Dust': '🌫️',
        'Fog': '🌁',
        'Sand': '🌫️',
        'Ash': '🌫️',
        'Squall': '💨',
        'Tornado': '🌪️'
    };

    return emojiMap[weatherMain] || '';
}