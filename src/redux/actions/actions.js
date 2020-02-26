import {loadLocationData} from './actionTypes/actionTypes';
import axios from "axios";
let LocationUrl =axios.get(`http://127.0.0.1:8000/location/`);
export const getData=()=>{
        return axios.get(LocationUrl)  
        .then(response=>{
            dispatch({
            type: loadLocationData,
            payload: response.data
            })
        
        })
    }

