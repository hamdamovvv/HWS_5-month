import React, { useContext } from 'react';
import {TemperatureContext} from "../TemperatureProvider/TemperatureProvider.jsx";

const TemperatureUpdate = () => {
  const { updateTemperature } = useContext(TemperatureContext);

  return (
    <div>
      <button onClick={updateTemperature}>Update temperature</button>
    </div>
  );
};

export default TemperatureUpdate;
