import AppState from "../applicationState";
import {
  updatePieChartIndicators,
  updatePieChartData,
  updatePieChartDataSuccess,
} from "../actions/actionTypes/actionTypes";

const chartReducer = (state = AppState.initialChartState, action) => {
  switch (action.type) {
    case updatePieChartIndicators:
      return {
        ...state,
        piechartIndicators: [action.payload],
      };
    case updatePieChartData:
      return {
        ...state,
        pieChartData: action.payload,
        pieChartDataUpdated: true,
      };
    case updatePieChartDataSuccess:
      return {
        ...state,
        pieChartDataUpdated: action.payload,
      };
    default:
      return state;
  }
};

export default chartReducer;
