import { sliderData } from "./actionTypes/actionTypes";
import axios from "axios";
let sliderUrl = `http://127.0.0.1:8000/sliders/`;
export const getSliderData = () => {
  function arrayColumn(Array, n) {
    if (Array && typeof Array !== undefined) {
      let y = Array.map(x => x[n]);
      let max = Math.max(...y);
      let min = Math.min(...y);
      return ([min, max]);
      // console.log({sliderNumber:n, sliderData:[min ,max]});
    }
  }

  var sliderKey = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (dispatch) => {
    axios.get(sliderUrl)
    .then(response => {
      // console.log(response.data)
      var slidersample = response.data.agridata;
      for (var n = 0; n < sliderKey.length; n++) {
        if (n < sliderKey.length) {
          var result = arrayColumn(slidersample, n);
          dispatch({
            type: sliderData,
            payload: result
          })
          
        }
      }
      
      
    })
  }
}
