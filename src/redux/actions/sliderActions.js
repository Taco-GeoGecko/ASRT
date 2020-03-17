import { sliderData } from "./actionTypes/actionTypes";
import axios from "axios";
let sliderUrl = `http://127.0.0.1:8000/sliders/`;
export const getSliderData = () => {
  function arrayColumn(arraySet, counter) {
    if (arraySet && typeof arraySet !== undefined) {
      let y = arraySet.map(x => x[counter]);
      let max = Math.max(...y);
      let min = Math.min(...y);
      return [min, max];
    }
  }
  let sliderKey = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return dispatch => {
    axios.get(sliderUrl).then(response => {
      var sliderResults = [];
      let landCoverResults=[]
       
      let slidersample = response.data.agridata;
      // console.log(slidersample)
      // let landCoverResults=slidersample.filter(pice=> {
        // console.log(pice[11])
      // })

     

      for (
        let sliderCounter = 0;
        sliderCounter < sliderKey.length;
        sliderCounter++
      ) {
        if (sliderCounter < sliderKey.length){
          if (sliderCounter !==11) {
          let result = arrayColumn(slidersample, sliderCounter);
          sliderResults.push(result);
        }else{
slidersample.filter(pice=>{
  landCoverResults.push(pice[11])
})

        }
        }
      }
      dispatch({
        type: sliderData,
        payload: sliderResults,
        landCoverResults: landCoverResults
      });
    });
  };
};
