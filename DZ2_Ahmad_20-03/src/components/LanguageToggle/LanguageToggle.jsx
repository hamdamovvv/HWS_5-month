import React, { useContext } from 'react';
import { LanguageContext } from "../LanguageProvider/LanguageProvider.jsx";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={toggleLanguage}>
        {language === 'english' ? 'Switch to French' : 'Switch to English'}
      </button>
    </div>
  );
};

export default LanguageToggle;
