const apiKey = "2bf7f61f22e3a3bdf0c96cff27a40e7c";

// // // // // // //
//  Set Location  //
// // // // // // //
const defaultLocation = "Rexburg,US"; 

async function fetchWeatherData(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`);

        if (response.ok) {
            const data = await response.json();

            const cityName = data.name;
            const state = data.sys.country;
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;
            const emoji = getWeatherEmoji(weatherDescription);

            const weatherInfoElement = document.getElementById("weather-info");
            weatherInfoElement.innerHTML = `${cityName}, ${state}<br> ${emoji}${temperature}°F - ${weatherDescription}`;
        } else {
            console.error("Network response was not ok");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function getWeatherEmoji(weatherDescription) {
    const emojiMap = {
        'clear sky': '☀️',
        'few clouds': '🌤️',
        'scattered clouds': '⛅',
        'broken clouds': '☁️',
        'overcast clouds': '☁️',
        'shower rain': '🌧️',
        'rain': '🌧️',
        'light rain': '🌧️',
        'moderate rain': '🌧️',
        'heavy intensity rain': '🌧️',
        'snow': '❄️',
        'light snow': '❄️',
        'mist': '🌫️',
        'fog': '🌁'
    };

    const defaultEmoji = '❓';

    const emoji = emojiMap[weatherDescription.toLowerCase()];

    return emoji || defaultEmoji;
}
fetchWeatherData(defaultLocation);