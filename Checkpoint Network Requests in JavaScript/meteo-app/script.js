const apiKey = '';
const cityInput = document.getElementById('city-input');
const getWeatherBtn = document.getElementById('get-weather-btn');
const cityNameElement = document.getElementById('city-name');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeatherData(city);
    }
});

async function getWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === '404') {
            alert('Ville non trouvée');
            return;
        }

        updateWeatherInfo(data);
    } catch (error) {
        alert('Erreur lors de la récupération des données météo');
    }
}

function updateWeatherInfo(data) {
    const { name, weather, main } = data;
    const description = weather[0].description;
    const temperature = main.temp;

    cityNameElement.textContent = `Météo à ${name}`;
    temperatureElement.textContent = `Température: ${temperature}°C`;
    descriptionElement.textContent = `Description: ${description}`;
}
