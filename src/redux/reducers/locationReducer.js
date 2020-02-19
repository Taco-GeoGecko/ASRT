import {loadGridData} from '../actions/actionTypes/actionTypes';
import axios from "axios";
let location =  axios.get(`http://127.0.0.1:8000/sliders/`)
  // .then(response=>{
  //   console.log(response)
  //   return response.data
  // })
  let gridState={
    grid: location
} 

const locationReducer= (state = gridState, action) => {
    switch (action.type) {
      case loadGridData:
        
       default:
        return state
    }
  }
export default locationReducer;