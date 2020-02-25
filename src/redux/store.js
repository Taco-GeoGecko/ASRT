import {createStore} from 'redux';
// import rootReducer from '../redux/reducers/reducersIndex'
import mapReducer from '../redux/reducers/mapreducer';
import locationReducer from '../redux/reducers/locationReducer';
const store = createStore(locationReducer);
export default store;