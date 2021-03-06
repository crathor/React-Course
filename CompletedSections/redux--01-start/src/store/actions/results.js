import * as actionTypes from './actionTypes';

export const storeResultAsync = ( result ) => {
  return dispatch => {
    setTimeout( () => {
      dispatch(storeResult(result));
    }, 2000);
  };
};
export const storeResult = ( result ) => {
  return {
    type: actionTypes.STORE_RESULT,
    result
  }
};
export const deleteResult = ( id ) => {
 return {
   type: actionTypes.DELETE_RESULT,
   id
 }
};
