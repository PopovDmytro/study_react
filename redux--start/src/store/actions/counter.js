import {ADD, DECREMENT, INCREMENT, SUBTRACT} from "./actionsTypes";

export const increment = () => {

  return {
    type: INCREMENT
  }
};

export const decrement = () => {

  return {
    type: DECREMENT
  }
};

export const add = (val) => {

  return {
    type: ADD,
    val
  }
};

export const subtract = (val) => {

  return {
    type: SUBTRACT,
    val
  }
};