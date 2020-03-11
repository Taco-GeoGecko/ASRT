import {sliderKey} from './actionTypes/actionTypes';
// let sliderKeys=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// export const getSliderKey=()=>{
//         return(dispatch)=>{
//             dispatch({
//             type: sliderKey,
//             payload: sliderKeys
//             })
        
     
//     }
// }

let previousId = 0;

export function getSliderKey(item) {
  const id = previousId + 1;
  const action = { type: 'sliderKey', payload: { id, item } };
  previousId = id;
  return action;
}
