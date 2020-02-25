import locationReducer from './locationReducer';
import mapReducer from './locationReducer';
import { combineReducers } from 'redux'

  // creates a root reducer and combines different reducers
  const rootReducer = combineReducers({
    mapReducer
  })
  
  export default rootReducer;