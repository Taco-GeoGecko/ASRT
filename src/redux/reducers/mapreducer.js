import {loadLocationData} from '../actions/actionTypes/actionTypes';

let initialState={
    lat: 0.32958802605356885,
    lng: 32.34375,
    zoom: 7,
    district: 'Hover over district',
    value:[],
} 

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
      case loadLocationData:
        return{
          ...state,
          value:[...state, action.payload.response.data]
        }
      default:
        return state
    }
  }
  
  export default mapReducer