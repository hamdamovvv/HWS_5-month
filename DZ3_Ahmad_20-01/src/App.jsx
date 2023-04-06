import {useDispatch, useSelector} from "react-redux";
import "./index.css"

function App() {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const inc = () => {
        dispatch({type: "INCREMENT"})
    }
    const dec = () => {
        dispatch({type: "DECREMENT"})
    }
    return (
        <div className="App">
            <button onClick={inc}>Increase</button>
            <button onClick={dec}>Decrease</button>
            <h1>{counter}</h1>
        </div>
    )
}

export default App
