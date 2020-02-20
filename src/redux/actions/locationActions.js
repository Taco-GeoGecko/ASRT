import {loadLocationData} from './actionTypes/actionTypes';
import axios from "axios";
let LocationUrl =`http://127.0.0.1:8000/location/`;
export const getLocation=()=>{
        return {
        // axios.get(LocationUrl)  
        // .then(response=>{
            // dispatch({
            type: loadLocationData,
            payload: axios.get(LocationUrl)
            // })
        
        // })
    }
}
