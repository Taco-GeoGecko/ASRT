import {createStore} from 'redux';
import mapReducer from '../redux/reducers/mapreducer'
// import {grids} from '../Components/uganda_grid_5by5km_noWater_withDistrict';

const store = createStore(mapReducer);
export default store;