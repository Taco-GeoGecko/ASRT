import {
  updateGridData,
  loadGridData,
  updateGridDataSuccess
} from "../actions/actionTypes/actionTypes";
import AppState from "../applicationState";

const mapReducer = (state = AppState.initialMapState, action) => {
  // console.log(action)
  switch (action.type) {
    case loadGridData:
      return {
        ...state,
        mapGrids: action.payload,
        updatedMapGrids: action.payload
      };
    case updateGridData:
      return {
        ...state,
        updatedMapGrids: action.payload,
        mapUpdated: true
      };
    case updateGridDataSuccess:
      return {
        ...state,
        mapUpdated: action.payload
      };

    default:
      return state;
  }
};

export default mapReducer;
