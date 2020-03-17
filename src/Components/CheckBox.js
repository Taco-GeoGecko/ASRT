import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import "../App.css";
import { connect } from "react-redux";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { updateGridData } from "../redux/actions/actionTypes/actionTypes";


function Checkboxes(props) {

  let { checkboxKey } = props;
  let indicators = props.landCoverIndicators;
  let defaultIndicator = props.indicator;
  let result = props.landCoverValue;
  let mapData = props.mapGrids;
   
  result = result.map(sliderInfo => sliderInfo);
  // console.log(props.value)
  let newResult = result[props.value];
  // console.log(newResult)
  if (newResult!==undefined){
    checkboxKey=newResult
  }

  const [state, setChecked] = React.useState({checked:false,data:mapData});

  const handleChange = event => {

    (() => {
      if(setChecked(event.target.checked)){

      // console.log(mapData);
    mapData[0][0].features = mapData[0][0].features.filter(piece => {
    // console.log(piece.properties.land_cover)
    // if (key===piece.properties.land_cover){
    // console.log("here i am")
    for (let [key, property] of Object.entries(piece.properties)) {
    // console.log(key)
    if (key == "land_cover") {
    // console.log(property)
    // console.log(checkboxKey)
      if (property >16 || property < 0) {
          return false;
      console.log("warning")
    }else{
      return true;
    }
      }
    }
    })
      }
      console.log(mapData);
      props.dispatch({ type: updateGridData, payload: mapData });
    })();
  // }
  
  };
  return (
    <div>
      <FormGroup>
      <FormControlLabel
              control={
      <Checkbox
        // checked={checked}
        onChange={handleChange}
        value={checkboxKey}
        inputProps={{ "aria-label": "checkbox with default color" }}
      />
    }
      label={props.label}
      />
      </FormGroup>
      
    </div>
  );
}
const mapStateToProps = state => {
  return {
    landCoverValue: state.slider.landCoverResults,
    landCoverIndicators: state.slider.landCoverCheckBox,
    indicator: state.slider.land_cover,
    mapGrids: state.map.mapGrids
  };
};
export default connect(mapStateToProps)(Checkboxes);
