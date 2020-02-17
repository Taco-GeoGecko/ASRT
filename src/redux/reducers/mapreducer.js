// import { combineReducers } from 'redux'
import {loadLocationData} from '../actions/actionTypes/actionTypes';
// import axios from "axios";

// let locationData=[];
let gridData=[];
// axios.get(`http://127.0.0.1:8000/location/`)
//                .then(response=>{
//                 console.log(response)
//                 locationData.push(response.data)
//               })

// axios.get(`http://127.0.0.1:8000/mapGrids/`)
//                .then(response=>{
//                 console.log(response)
//                 gridData.push(response.data)
//               })

let initialState={
    lat: 0.32958802605356885,
    lng: 32.34375,
    zoom: 7,
    district: 'Hover over district',
    value:[],
    grid: gridData
} 

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
      case loadLocationData:
        return{
          ...state,
          value:action.payload
        }
      default:
        return state
    }
  }
  
  // creates a root reducer and combines different reducers
//   const rootReducer = combineReducers({
//     mapReducer
//   })
  
  export default mapReducer