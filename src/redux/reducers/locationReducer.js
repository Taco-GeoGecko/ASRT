import {loadLocationData} from '../actions/actionTypes/actionTypes';
import AppState from '../applicationState';
//  const locationState={
//   value:[] 
// }

const locationReducer= (state = AppState.initialLocationState, action) => {
    switch (action.type) {
      case loadLocationData:
        return{
          ...state,
          LocationValue: action.payload
        }
      
       default:
        return state
    }
  }
export default locationReducer;