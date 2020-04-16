import AppState from "../applicationState";
import {
  updatePieChartIndicators,
  updatePieChartData,
  updatePieChartDataSuccess,
  updatePopulationChartData,
  updateRainfallChartData
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
    case updatePopulationChartData:
      return {
        ...state,
        populationChartData: action.payload,
        // pieChartDataUpdated: true,
      };

    case updateRainfallChartData:
      return {
        ...state,
        rainfallChartData: action.payload,

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
