import React, { createContext, useState } from 'react';

export const TemperatureContext = createContext();

export const TemperatureProvider = ({ children }) => {
  const [temperature, setTemperature] = useState(20);

  const updateTemperature = () => {
    setTemperature(Math.floor(Math.random() * 20) + 10);
  };

  return (
    <TemperatureContext.Provider value={{ temperature, updateTemperature }}>
      {children}
    </TemperatureContext.Provider>
  );
};
