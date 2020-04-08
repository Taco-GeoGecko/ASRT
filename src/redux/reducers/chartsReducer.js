// import {sliderData} from '../actions/actionTypes/actionTypes';
import AppState from "../applicationState";
import { updatePieChartIndicators, updatePieChartData } from "../actions/actionTypes/actionTypes";
import pieChart from "../../Components/pieChart";

const chartReducer = (state = AppState.initialMapState, action) => {
  switch (action.type) {
    case updatePieChartIndicators:
      return {
        ...state,
        piechartIndicators:[action.payload]
      };
      case updatePieChartData:
        return {
          ...state,
          pieChartData:[action.payload]
          // updatedPieChart: action.payload,
          // mapUpdated: true
        };
    default:
      return state;
  }
};

export default chartReducer;
