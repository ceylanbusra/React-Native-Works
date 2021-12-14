export const ADD_TO_NAME = 'ADD_TO_NAME';
export const REMOVE_TO_NAME = 'REMOVE_TO_NAME';
export const addToName = item => ({
  type: ADD_TO_NAME,
  payload: item,
});
export const removeToName = id => ({
  type: REMOVE_TO_NAME,
  payload: id,
});
