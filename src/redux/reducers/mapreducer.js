import {
  updateGridData,
  loadGridData,
  updateLandCoverGridData,
  updateGridDataSuccess,
  updatePieChartData,
  districtGridcellsData,
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
        mapUpdated: true,
      };
    case districtGridcellsData:
      return {
        ...state,
        DistrictGridcells: action.payload,
      };

    // case updateGridDataSuccess:
    //   return {
    //     ...state,
    //     // mapGrids: action.payload,
    //     mapUpdated: action.payload,
    //   };

    default:
      return state;
  }
};

export default mapReducer;
