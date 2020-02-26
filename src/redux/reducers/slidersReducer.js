import {sliderData} from '../actions/actionTypes/actionTypes';
import AppState from '../applicationState';

// let initialState={
//     value:[],
//     // onslide:[]
// } 
// let onSlide = (render, handle, value, un, percent) => {
//   console.log(value)
// }

const sliderReducer = (state = AppState.initialSliderState, action) => {
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