// import { combineReducers } from 'redux'
let initialState={
    lat: 0.32958802605356885,
    lng: 32.34375,
    zoom: 7,
    district: 'Hover over district'
} 


const mapReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state
    }
  }
  
  // creates a root reducer and combines different reducers
//   const rootReducer = combineReducers({
//     mapReducer
//   })
  
  export default mapReducer