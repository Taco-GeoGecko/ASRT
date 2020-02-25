import {loadGridData} from '../actions/actionTypes/actionTypes';

let initialState={
    lat: 0.32958802605356885,
    lng: 32.34375,
    zoom: 7,
    district: 'Hover over district',
    value:[],
} 

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
      case loadGridData:
        return{
          ...state,
          value:[...state.value, action.payload]
        }
      default:
        return state
    }
  }
  
  export default mapReducer