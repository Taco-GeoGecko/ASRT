import {
  updateGridData,
  loadGridData,
  updateLandCoverGridData,
  updateGridDataSuccess,
  updatePieChartData,
  districtGridcellsData,
  updateExpansionBar,
  updateTitle,
} from "../actions/actionTypes/actionTypes";
import AppState from "../applicationState";

const mapReducer = (state = AppState.initialMapState, action) => {
  // console.log(action)
  switch (action.type) {
    case loadGridData:
      return {
        ...state,
        mapGrids: action.payload,
        updatedMapGrids: action.payload,
      };
    case updateGridData:
      return {
        ...state,
        updatedMapGrids: action.payload,
        mapUpdated: true,
      };
    case updateLandCoverGridData:
      return {
        ...state,
        updatedMapGrids: action.payload,
        landCovermapUpdated: true,
        mapUpdated: true,
      };
    case districtGridcellsData:
      return {
        ...state,
        DistrictGridcells: action.payload,
      };
    case updateTitle:
      return {
        ...state,
        indicatorTitle: action.payload,
      };

    // case updateGridDataSuccess:
    //   return {
    //     ...state,
    //     // mapGrids: action.payload,
    //     mapUpdated: action.payload,
    //   };
    case updateExpansionBar:
      return {
        ...state,
        expansionBar: action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
