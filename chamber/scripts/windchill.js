document.addEventListener("DOMContentLoaded", function () {
    const temperatureElement = document.getElementById("temperature");
    const windspeedElement = document.getElementById("windspeed");
    const humidityElement = document.getElementById("humidity");
    const windChillElement = document.getElementById("windChill"); 
    const weatherDescriptionElement = document.getElementById("weatherDescription"); 


    const apiKey = '2bf7f61f22e3a3bdf0c96cff27a40e7c';
    const city = 'American Fork , us';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Update temperature
            const temperature = data.main.temp;
            temperatureElement.textContent = temperature.toFixed(2) + " °F";

            // Update speed
            const windspeed = data.wind.speed;
            windspeedElement.textContent = windspeed.toFixed(2) + " mph";

            // Update humidity
            const humidity = data.main.humidity;
            humidityElement.textContent = humidity + "%";

            // Update weather 
            const weatherDescription = data.weather[0].description; 
            weatherDescriptionElement.textContent = weatherDescription;

            // Check conditions calculating wind chill
            if (temperature <= 50 && windspeed > 3.0) {
                const windChill = calculateWindChill(temperature, windspeed);
                windChillElement.textContent = windChill.toFixed(2) + " °F";
            } else {
                windChillElement.textContent = "N/A";
            }
        })
        .catch(error => {
            // Handle errors
            temperatureElement.textContent = "N/A";
            windspeedElement.textContent = "N/A";
            humidityElement.textContent = "N/A";
            windChillElement.textContent = "N/A";
        });
});

function calculateWindChill(temperature, windspeed) {
    return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
}
