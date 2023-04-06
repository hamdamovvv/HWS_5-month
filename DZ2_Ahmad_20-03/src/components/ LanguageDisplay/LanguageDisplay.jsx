import React, { useContext } from 'react';
import { LanguageContext } from "../LanguageProvider/LanguageProvider.jsx";

const LanguageDisplay = () => {
  const { language } = useContext(LanguageContext);

  return <div>The current language is: {language}</div>;
};

export default LanguageDisplay;
