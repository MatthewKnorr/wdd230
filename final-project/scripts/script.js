async function searchCountry() {
    const countryInput = document.getElementById('countryInput').value;

    // Clear previous results
    document.getElementById('result').innerHTML = '';

    try {
        // Fetch data from REST Countries API
        const restCountriesResponse = await fetch(`https://restcountries.com/v3.1/name/${countryInput}`);
        const restCountriesData = await restCountriesResponse.json();

        // Fetch additional data from REST Countries API
        if (restCountriesData.length > 0) {
            const countryInfo = restCountriesData[0];

            // Fetch data by capital city
            const capitalResponse = await fetch(`https://restcountries.com/v3.1/capital/${countryInfo.capital}`);
            const capitalData = await capitalResponse.json();

            // Fetch currency data
            const currencyResponse = await fetch(`https://restcountries.com/v3.1/currency/${countryInfo.currencies[0]}`);
            const currencyData = await currencyResponse.json();

            // Fetch language data
            const languageResponse = await fetch(`https://restcountries.com/v3.1/lang/${countryInfo.languages[0]}`);
            const languageData = await languageResponse.json();

            // Display additional results
            displayAdditionalResults(capitalData, currencyData, languageData);
        }

        // Display results
        displayResults(restCountriesData);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('result').innerText = 'Error fetching data. Please try again.';
    }
}

function displayAdditionalResults(capitalData) {
    const resultDiv = document.getElementById('result');

    // Display information from Capital City API
    if (capitalData.length > 0) {
        const capitalHTML = `
            <h2>${capitalData[0].name.common}</h2>
            <p>Countries Population: ${capitalData[0].population}</p>
        `;
        resultDiv.innerHTML += capitalHTML;
    }


}

function displayResults(restCountriesData) {
    const resultDiv = document.getElementById('result');

    // Display information from REST Countries API
    if (restCountriesData.length > 0) {
        const countryInfo = restCountriesData[0];

        const countryHTML = `
            <p>Capital City: ${countryInfo.capital}</p>
            <p>Regional Area: ${countryInfo.region}</p>
        `;

        resultDiv.innerHTML += countryHTML;
    }
}