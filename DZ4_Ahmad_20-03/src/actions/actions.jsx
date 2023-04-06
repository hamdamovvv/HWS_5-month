import { ADD_NUMBER, CLEAR_LIST } from './types';

export const addNumber = value => ({
  type: ADD_NUMBER,
  payload: { value },
});

export const clearList = () => ({ type: CLEAR_LIST });



//in subsequent times by clicking on add, the sum of the previous number and the new one that we entered appears in the list

export const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return [...state, action.payload.value];
    case CLEAR_LIST:
      return [];
    default:
      return state;
  }
};