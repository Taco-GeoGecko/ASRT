import {loadGridData} from '../actions/actionTypes/actionTypes';
import AppState from '../applicationState';

const mapReducer = (state = AppState.initialMapState, action) => {
  switch (action.type) {
      case loadGridData:
        return{
          ...state,
          mapGrids: action.payload
        }
      
      default: return state;
    }
  }
  
  export default mapReducer