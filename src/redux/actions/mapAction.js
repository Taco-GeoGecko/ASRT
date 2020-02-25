import {loadGridData} from './actionTypes/actionTypes';
import axios from "axios";
let mapUrl =`http://127.0.0.1:8000/mapGrids/`;

export const getData = (dispatch) => {
        return(dispatch)=>{
            axios.get(mapUrl)  
            .then(response=>{
            dispatch({
            type: loadGridData,
            payload: response.data
            })
        
        })
    }
}
