import {loadGridData} from './actionTypes/actionTypes';
import axios from "axios";
let mapUrl =`http://127.0.0.1:8000/mapGrids/`;
export const getData=(dispatch)=>{
        return {
        // axios.get(LocationUrl)  
        // .then(response=>{
            // dispatch({
            type: loadGridData,
            payload: axios.get(mapUrl)
            // })
        
        // })
    }
}