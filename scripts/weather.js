const apiKey = "2bf7f61f22e3a3bdf0c96cff27a40e7c";

async function fetchWeatherData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Rexburg,US&units=imperial&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;

        const weatherInfoElement = document.getElementById("weather-info");
        weatherInfoElement.innerHTML = `${temperature}°F - ${weatherDescription}`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

fetchWeatherData();