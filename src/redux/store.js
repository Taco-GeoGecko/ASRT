import {createStore, applyMiddleware} from 'redux';  
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers/reducersIndex';
// import locationReducer from './reducers/locationReducer';
import sliderReducer from './reducers/slidersReducer';
// import mapReducer from './reducers/mapreducer';


const store = createStore(rootReducer, applyMiddleware(thunk));
// const store = createStore(mapReducer);
export default store;
 