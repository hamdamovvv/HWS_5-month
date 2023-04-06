import {ADD_NUMBER, CLEAR_LIST} from '/src/actions/types.jsx';

const initialState = {
    numbers: [],
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUMBER:
            const {value} = action.payload;
            const numbers = [...state.numbers, value];
            return {...state, numbers};
        case CLEAR_LIST:
            return {...state, numbers: []};
        default:
            return state;
    }
};


export default reducer;



