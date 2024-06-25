import React from "react";

function Weather({ weather }) {
  return (
    <div>
      <h1>{weather.name}</h1>
      <h1>{weather.main.temp}</h1>
      <h1>{weather.weather[0].main}</h1>
      <h1>{weather.name}</h1>
    </div>
  );
}

export default Weather;
