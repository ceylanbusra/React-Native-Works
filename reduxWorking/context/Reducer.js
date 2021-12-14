import {ADD_TO_NAME} from './Actions';
import {REMOVE_TO_NAME} from './Actions';
const initialState = {
  nameList: [],
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_NAME:
      return {
        ...state,
        nameList: state.nameList.concat({
          id: Math.random() * 100,
          name: action.payload,
        }),
      };

    case REMOVE_TO_NAME:
      return {
        ...state,
        nameList: state.nameList.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};
export default Reducers;
