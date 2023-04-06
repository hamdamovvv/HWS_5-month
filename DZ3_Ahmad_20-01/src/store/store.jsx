const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case"INCREMENT" :
            return {
                ...state, counter: state.counter + 1
            }
        case"DECREMENT" :
            if (state.counter === 0) {
                return state;
            } else {
                return {...state, counter: state.counter - 1}
            }
        case "ADD_COUNTER" :
            return {
                ...state, counter: state.counter + action.value
            }
        case "SUBSTRACT" :
            return {
                ...state, counter: state.counter - action.value
            }
        default: return state
    }
}

export default reducer