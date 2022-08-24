import action from "./action";

const initial_state = {
  favList: [],
};

const Reducer = (state = initial_state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favList: [...state.favList, action.payload],
      };

    case "REMOVE_FAVORITE":
      return {
        favList: [...state.favList.filter((i) => i !== action.payload)],
      };
    default:
      return state;
  }
};
export default Reducer;
