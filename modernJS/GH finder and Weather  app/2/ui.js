class UI {
    constructor() {
        this.location = document.getElementById('location');
        this.description = document.getElementById('description');
        this.temp = document.getElementById('temp');
        this.humidity = document.getElementById('humidity');
        this.wind = document.getElementById('wind');
        this.pressure = document.getElementById('pressure');
    }

    showInfo(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.description.textContent = weather.weather[0].description;
        this.temp.textContent = `${weather.main.temp} F`;
        this.humidity.textContent = `${weather.main.humidity} %`;
        this.wind.textContent = `${weather.wind.speed} m/s`;
        this.pressure.textContent = `${weather.main.pressure} hpa`;
    }
}