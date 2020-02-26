import {loadGridData} from '../actions/actionTypes/actionTypes';
import AppState from '../applicationState';

// let initialState={
//     lat: 0.32958802605356885,
//     lng: 32.34375,
//     zoom: 7,
//     district: 'Hover over district',
//     value:[],
// } 

// axios.get(`http://127.0.0.1:8000/mapGrids/`)
//                .then(response=>{
//                 console.log(response)
//                 gridData.push(response.data)
//               })








let initialState={
    lat: 0.32958802605356885,
    lng: 32.34375,
    zoom: 7,
    zoomcontrol: true,
    
    district: 'Hover over district',
    value:[],
    grid: gridData
} 

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
      case loadLocationData:
        return{
          ...state,
          mapGrids: action.payload
        }
      
      default: return state;
    }
  }

  
  export default mapReducer