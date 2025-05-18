function Weather() {
    const forecast = {
      city: "Auckland",
      condition: "Mostly sunny",
      temp: "  18°C"
    };
  
    return (
      <div className="weather">
        <p> {forecast.city},
        🌤️ {forecast.condition},   
          {forecast.temp}</p>
      </div>
    );
  }
  
  export default Weather;
  
