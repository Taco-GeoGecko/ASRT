import {createStore} from 'redux';
import mapReducer from '../redux/reducers/mapreducer'
// import {grids} from '../Components/uganda_grid_5by5km_noWater_withDistrict';
let initialState={
        lat: 0.32958802605356885,
        lng: 32.34375,
        zoom: 7,
        district: 'Hover over district'
} 

const store = createStore(mapReducer);
export default store;