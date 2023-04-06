import {types} from './types';
import axios from 'axios'


export const createSuccess  = (message) => ({
    type: types.CREATE_USERS,
    payload: message
})

export const success = (message) => ({
    type: types.SUCCESS
})

export const clear = (message) => ({
    type: types.CLEAR
})


export const createUser = (user) => async (dispatch) => {
    try {
        await axios.post(`https://jsonplaceholder.typicode.com/users`, user)
        dispatch(createSuccess("Success"))
        dispatch(success())
        setTimeout(() => {
            dispatch(clear())
        }, 5000)

    }
    catch (error) {
        console.log(error)
    }
}