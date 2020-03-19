import { loadLocationData } from "../actions/actionTypes/actionTypes";
import AppState from "../applicationState";

const locationReducer = (state = AppState.initialLocationState, action) => {
  switch (action.type) {
    case loadLocationData:
      return {
        ...state,
        locationValue: action.payload
      };

    default:
      return state;
  }
};
export default locationReducer;
