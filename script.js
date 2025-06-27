// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const apiKey = '8451efaae9192a2224db40f5cd059b80';

const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weather = document.getElementById('weather');
const humidity = document.getElementById('humidity');
const timezone=document.getElementById("zone");
const speed=document.getElementById("speed");
const direction=document.getElementById("direction");
const pressure=document.getElementById("pressure");
const feel=document.getElementById("feel");
const index=document.getElementById("index");


searchButton.addEventListener('click', () => {
    const city = cityInput.value;

    // Fetch weather data from OpenWeatherMap API
    fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`)
        .then(response => response.json())
        .then(data => {
            cityName.textContent = data.request.query;
            temperature.textContent = data.current.temperature;
            humidity.textContent = data.current.humidity;
            timezone.textContent=data.location.timezone_id;
            speed.textContent=data.current.wind_speed;
            direction.textContent=data.current.wind_dir;
            pressure.textContent=data.current.pressure;
            feel.textContent=data.current.feelslike;
            index.textContent=data.current.uv_index;
            weatherInfo.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

function myFunction(x) {
    x.classList.toggle("change");
}