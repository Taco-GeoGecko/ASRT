import {
  updateGridData,
  loadGridData,
  updateLandCoverGridData,
  updateGridDataSuccess,
  // updatePieChartData,
  updateIndicatorSize,
  updateIndicatorSizeSuccess,
} from "../actions/actionTypes/actionTypes";
import AppState from "../applicationState";

const mapReducer = (state = AppState.initialMapState, action) => {
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
    case updateIndicatorSize:
      return {
        ...state,
        updateIndicatorSize: action.payload,
        // updateInitialIndicatorSize: true,
      };
    case updateIndicatorSizeSuccess:
      return {
        ...state,
        updateIndicatorSize: action.payload,
        // updateInitialIndicatorSize:false
      };
    // case updateGridDataSuccess:
    //   return {
    //     ...state,
        // updateInitialIndicatorSize: action.payload,
        //     // mapGrids: action.payload,
        //     mapUpdated: action.payload,
      // };

    default:
      return state;
  }
};

export default mapReducer;
