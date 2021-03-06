import AppState from "../applicationState";
import {
  updatePieChartIndicators,
  updatePieChartData,
  updatePieChartDataSuccess,
  updatePopulationChartData,
  updateChartView,
  updateRainfallChartData,
  updateChartViewSuccess,
} from "../actions/actionTypes/actionTypes";

const chartReducer = (state = AppState.initialChartState, action) => {
  switch (action.type) {
    case updatePieChartIndicators:
      return {
        ...state,
        piechartIndicators: action.payload,
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
        populationAverageNationalGridcells:
          action.populationAverageNationalGridcells,
        // pieChartDataUpdated: true,
      };

    case updateRainfallChartData:
      return {
        ...state,
        rainfallChartData: action.payload,
        averagenationalGridcells: action.averagenationalGridcells,
      };

    case updatePieChartDataSuccess:
      return {
        ...state,
        pieChartDataUpdated: action.payload,
      };
    case updateChartViewSuccess:
      return {
        ...state,
        chartView: action.payload,
      };
    case updateChartView:
      return {
        ...state,
        chartView: action.payload,
      };
    default:
      return state;
  }
};

export default chartReducer;
