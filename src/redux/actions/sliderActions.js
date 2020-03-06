import {sliderData} from './actionTypes/actionTypes';
import axios from "axios";
let sliderUrl =`http://127.0.0.1:8000/sliders/`;
export const getSliderData=()=>{
        return(dispatch)=>{
        axios.get(sliderUrl)  
        .then(response=>{
            // console.log(response.data.agridata[0])
            dispatch({
            type: sliderData,
            payload: response.data
            })
        
        })
    }
}
