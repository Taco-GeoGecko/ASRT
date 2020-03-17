import { loadGridData, updateGridData } from "./actionTypes/actionTypes";
import axios from "axios";
let mapUrl = `http://127.0.0.1:8000/mapGrids/`;

export const getMapGrids = () => {
  return dispatch => {
    axios.get(mapUrl).then(async response => {
      await dispatch({
        type: loadGridData,
        payload: response.data.data
      });
    });
  };
};
