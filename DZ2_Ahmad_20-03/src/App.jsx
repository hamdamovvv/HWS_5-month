import {useState} from 'react'
import './App.css'
import LanguageDisplay from "./components/ LanguageDisplay/LanguageDisplay.jsx";
import {LanguageContext, LanguageProvider} from "./components/LanguageProvider/LanguageProvider";
import {TemperatureContext, TemperatureProvider} from "./components/TemperatureProvider/TemperatureProvider";
import TemperatureDisplay from "./components/TemperatureDisplay/TemperatureDisplay.jsx";
import TemperatureUpdate from "./components/TemperatureUpdate/TemperatureUpdate.jsx";
import LanguageToggle from "./components/LanguageToggle/LanguageToggle.jsx";

function App() {


    return (
        <LanguageProvider>
            <TemperatureProvider>
                <div>
                    <LanguageToggle/>
                    <LanguageDisplay/>
                    <TemperatureUpdate/>
                    <TemperatureDisplay/>
                </div>
            </TemperatureProvider>
        </LanguageProvider>
    )
}

export default App
