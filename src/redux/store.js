import {createStore} from 'redux';
import rootReducer from '../redux/reducers/reducersIndex'

const store = createStore(rootReducer);
export default store;