import React, { useContext } from 'react';
import {TemperatureContext} from "../TemperatureProvider/TemperatureProvider.jsx";

const TemperatureDisplay = () => {
  const { temperature } = useContext(TemperatureContext);

  return <div>The current temperature is: {temperature}°C</div>;
};

export default TemperatureDisplay;
