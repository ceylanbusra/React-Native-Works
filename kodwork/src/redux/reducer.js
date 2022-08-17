
import action from './action';

 const initial_state ={
  favList :[],
 }
     


const Reducer = (state = initial_state, action) => {
    switch (action.type) {
      case 'ADD_FAVORITE':
        return {
          ...state,favList: action.payload     
        }
      default:
        return state
    }
  }
  export default Reducer