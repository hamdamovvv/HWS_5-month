import {types} from '/src/redux/types.jsx'

const initialState = {
    message: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_USERS:
            return {
              ...state,
                message: action.payload
            }
        case types.SUCCESS :
            return {
              ...state,
                message: "Success"
            }
        case types.CLEAR:
            return {
             ...state,
                message: ''
            }
        default:
            return state
    }
}