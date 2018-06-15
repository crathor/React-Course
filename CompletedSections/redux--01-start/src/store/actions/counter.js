import * as actionTypes from './actionTypes';

export const increment = () => {
 return {
   type: actionTypes.INCREMENT
 }
};
export const decrement = () => {
 return {
   type: actionTypes.DECREMENT
 }
};
export const addCounter = ( value ) => {
 return {
   type: actionTypes.ADD_COUNTER,
   value
 }
};
export const subtractCounter = ( value ) => {
 return {
   type: actionTypes.SUBTRACT_COUNTER,
   value
 }
};
