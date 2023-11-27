const apiKey = "2bf7f61f22e3a3bdf0c96cff27a40e7c";
const defaultLocation = "American Fork, US";

document.addEventListener("DOMContentLoaded", function () {
    const temperatureElement = document.getElementById("temperature");
    const windspeedElement = document.getElementById("windspeed");
    const humidityElement = document.getElementById("humidity");
    const windChillElement = document.getElementById("windChill");
    const weatherDescriptionElement = document.getElementById("weatherDescription");
    const weatherEmojiElement = document.getElementById("weatherEmoji");
    const timeElement = document.getElementById("time");

    async function fetchWeatherData(location) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`);

            if (response.ok) {
                const data = await response.json();

                // Update temperature
                const temperature = data.main.temp;
                temperatureElement.textContent = temperature.toFixed(2) + " °F";

                // Update speed
                const windspeed = data.wind.speed;
                windspeedElement.textContent = windspeed.toFixed(2) + " mph";

                // Update humidity
                const humidity = data.main.humidity;
                humidityElement.textContent = humidity + "%";

                // Update weather description
                const weatherDescription = data.weather[0].description;
                weatherDescriptionElement.textContent = weatherDescription;

                // Update weather emoji
                const emoji = getWeatherEmoji(weatherDescription);
                weatherEmojiElement.textContent = emoji;

                // Check conditions calculating wind chill
                if (temperature <= 50 && windspeed > 3.0) {
                    const windChill = calculateWindChill(temperature, windspeed);
                    windChillElement.textContent = windChill.toFixed(2) + " °F";
                } else {
                    windChillElement.textContent = "N/A";
                }

                // Update time
                const currentTime = new Date();
                const hours = (currentTime.getUTCHours() - 7 + 24) % 12 || 12; // Adjust for GMT-7 and convert to 12-hour format
                const minutes = currentTime.getUTCMinutes();
                const ampm = currentTime.getUTCHours() - 7 > 12 ? 'AM' : 'PM'; // Determine AM or PM
                timeElement.textContent = `${hours}:${minutes} ${ampm}`;

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
            'light snow': '🌨️',
            'mist': '🌫️',
            'fog': '🌁',
            'thunderstorm': '⛈️',
            'hail': '🌨️❄️'
            // Add more weather conditions and corresponding emojis as needed
        };

        const defaultEmoji = '❓';

        const emoji = emojiMap[weatherDescription.toLowerCase()];

        return emoji || defaultEmoji;
    }

    function calculateWindChill(temperature, windspeed) {
        return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
    }

    // Fetch weather data on page load
    fetchWeatherData(defaultLocation);
});