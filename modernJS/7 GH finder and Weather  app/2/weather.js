class Weather {
    constructor(api_key, city) {
        this.api_key = api_key;
        this.city = city;
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.api_key}`)

        const data = await response.json();

        return data;
    }

    ls() {
        let city;
        if(localStorage.getItem('city') === null) {
            city = ''
        } else {
            city = JSON.parse(localStorage.getItem('city'));
        }
        
    }
}