import { sliderData } from "../actions/actionTypes/actionTypes";
import AppState from "../applicationState";

const sliderReducer = (state = AppState.initialSliderState, action) => {
  switch (action.type) {
    case sliderData:
      return {
        ...state,
        sliderValue: action.payload,
        landCoverResults: action.landCoverResults,
      };
    default:
      return state;
  }
};

export default sliderReducer;
