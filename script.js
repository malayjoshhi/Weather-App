async function getWeather() {

    const location = document.getElementById('location-input').value;

    if (!location.trim()) {
        document.getElementById('error-message').textContent =
            'Please enter a location.';
        return;
    }

    const apiKey = 'ffd9a65e5872a07091d6bfe64e109a7d';
    
    const apiUrl =
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(
                'Weather data not found. Please check the city name.'
            );
        }

        const data = await response.json();

        document.getElementById('location').textContent =
            `${data.name}, ${data.sys.country}`;

        document.getElementById('temperature').textContent =
            `${Math.round(data.main.temp)}°C`;

        document.getElementById('weather').textContent =
            data.weather[0].description;

        document.getElementById('humidity').textContent =
            `${data.main.humidity}% Humidity`;

        document.getElementById('wind').textContent =
            `${data.wind.speed} m/s Wind`;

        document.getElementById('error-message').textContent = '';

    } catch (error) {

        document.getElementById('error-message').textContent =
            error.message;

        console.error(error);
    }
}