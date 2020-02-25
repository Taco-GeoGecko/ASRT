import {loadLocationData} from '../actions/actionTypes/actionTypes';
import axios from "axios";

  let gridState={
    grid: []
} 

const locationReducer= (state = gridState, action) => {
    switch (action.type) {
      case loadLocationData:
        return{
          ...state,
          value:[...state.grid, action.payload]
        }
       default:
        return state
    }
  }
export default locationReducer;