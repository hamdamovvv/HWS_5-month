import './App.css'
import WithMouseTracker from "./hoc/WithMouseTracker.jsx"
import {FooterWithMouseTracker, HeaderWithMouseTracker, MainWithMouseTracker} from "./components/Header/Header";

function App() {
    console.log(WithMouseTracker)


    return (
        <div className="App">
            <HeaderWithMouseTracker/>
            <MainWithMouseTracker/>
            <FooterWithMouseTracker/>

        </div>
    )
}

export default App
