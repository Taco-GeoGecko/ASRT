// import {sliderData} from '../actions/actionTypes/actionTypes';
import AppState from '../applicationState';

const chartReducer = (state = AppState.initialSliderState, action) => {
        switch (action.type) {
      case sliderData:
        return{
          ...state,
          sliderValue:[...state.sliderValue, action.payload]
          
        }
      default:
        return state
    }
  }
  
  export default sliderReducer