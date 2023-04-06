import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route index element={<MainPage/>}/>
      <Route path='/about/:id' element={<AboutPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
