import {loadLocationData} from '../actions/actionTypes/actionTypes';

let initialState={
    value:[1, 100],
} 

const mapReducer = (state = initialState, action) => {
    // const { value } = this.state;
    // let {MinValue, MaxValue} = this.props;
    MinValue = MinValue ? MinValue : 1
    MaxValue = MaxValue ? MaxValue : 100
    const range = { min: MinValue, max: MaxValue }
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