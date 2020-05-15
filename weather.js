class Weather {
  constructor(city, state) {
    this.apiKey = "a90e42f0c8c1f92ac62cd97bd63f24a0";
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `api.openweathermap.org/data/2.5/weather?q={${this.city}},{${this.state}}&appid={${this.apiKey}}`
    );

    const reponseData = await response.json();

    return reponseData.weather; //.weather is just to test out
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
