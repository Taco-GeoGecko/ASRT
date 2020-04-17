import locationReducer from "./locationReducer";
import mapReducer from "./mapreducer";
import sliderReducer from "./slidersReducer";
import chartReducer from "./chartsReducer";
import { combineReducers } from "redux";

// creates a root reducer and combines different reducers
const rootReducer = combineReducers({
  map: mapReducer,
  chart: chartReducer,
  location: locationReducer,
  slider: sliderReducer,
});

export default rootReducer;
