import locationReducer from './locationReducer';
import mapReducer from './mapreducer';
import sliderReducer from './slidersReducer';
import { combineReducers } from 'redux'

  // creates a root reducer and combines different reducers
  const rootReducer = combineReducers({
    mapReducer,locationReducer,sliderReducer
  })
  
  export default rootReducer;