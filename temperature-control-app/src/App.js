import React, { useState } from "react";

function App() {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [tempColor, setTempColor] = useState("cold");

  const handleIncreaseTemperature = () => {
    if (temperatureValue === 30) return;

    const newTemperature = temperatureValue + 1;

    if (newTemperature >= 15) {
      setTempColor("hot");
    }

    setTemperatureValue(newTemperature);
  };
  const handleDecreaseTemperature = () => {
    if (temperatureValue === 0) return;
    const newTemperature = temperatureValue - 1;

    if (newTemperature < 15) {
      setTempColor("cold");
    }

    setTemperatureValue(newTemperature);
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => handleIncreaseTemperature()}>+</button>
        <button onClick={() => handleDecreaseTemperature()}>-</button>
      </div>
    </div>
  );
}

export default App;
