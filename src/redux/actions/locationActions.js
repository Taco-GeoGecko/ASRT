import {loadLocationData} from './actionTypes/actionTypes';
import axios from "axios";
let LocationUrl =`http://127.0.0.1:8000/location/`;
export const getLocation=()=>{
        return(dispatch)=> {
        axios.get(LocationUrl)  
        .then(async response=>{
            await dispatch({
            type: loadLocationData,
            payload: response.data.data
            })
        
        })
    }
}
