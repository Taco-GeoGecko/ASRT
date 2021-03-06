import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import "../App.css";
import FormGroup from "@material-ui/core/FormGroup";
import { connect } from "react-redux";
import _ from "lodash";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { updateLandCoverGridData } from "../redux/actions/actionTypes/actionTypes";

function Checkboxes(props) {
  let { checkboxKey } = props;
  let checkboxValue = 0;
  let indicators = props.landCoverIndicators;
  let result = props.landCoverValue;
  result = result.map((sliderInfo) => sliderInfo);
  let newResult = result[checkboxKey];
  checkboxValue = newResult;
  // console.log(checkboxValue);
  // console.log(checkboxKey);

  let mapData = _.cloneDeep(props.mapGrids);
  let updatedMapData = _.cloneDeep(props.updatedMapGrids);
  // let selectedMapData = props.mapUpdated == true ? updatedMapData : mapData;
  let selectedMapData = mapData;
  // console.log(selectedMapData);

  const [state, setState] = React.useState({ key: false });
  const handleChange = () => {
    // event.preventDefault();
    setState({
      ...state,
      key: !state.key,
      // value: props.landCoverSliderValues,
    });
   
    props.landCoverSliderValues[checkboxKey] = checkboxValue;
    
    for (let [landCoverKey, value] of Object.entries(
      props.landCoverSliderValues
    )) {
      console.log(value, indicators[landCoverKey], props.label);

      selectedMapData[0][0].features = selectedMapData[0][0].features.filter(
        (piece) => {
          for (let [key, property] of Object.entries(piece.properties)) {
            if (
              key === "land_cover" &&
              indicators[landCoverKey] == props.label
            ) {
              if (property < value) {
                return false;
              } else {
                return true;
              }
            }
          }
        }
      );
    }
    console.log(selectedMapData);
    // console.log(state.value);

    props.dispatch({ type: updateLandCoverGridData, payload: selectedMapData });
  };
  // if (state.key == false) {
  //   props.dispatch({ type: updateLandCoverGridData, payload: mapData });
  // } else {
  //   props.dispatch({ type: updateLandCoverGridData, payload: selectedMapData });

  // }
  // console.log(props.updatedMapGrids);
  // console.log(mapData);
  // if (props.mapUpdated == true) {
  // console.log(selectedMapData);
  //   console.log(props.updatedMapGrids);
  // }

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.key}
              onChange={handleChange}
              // value={state.value}
              value={state.key === true ? props.landCoverSliderValues : 0}
              id={checkboxKey}
              inputProps={{ "aria-label": "checkbox with default color" }}
            />
          }
          label={props.label}
        />
      </FormGroup>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    landCoverValue: state.slider.landCoverResults,
    landCoverIndicators: state.slider.landCoverCheckBox,
    indicator: state.slider.land_cover,
    mapGrids: state.map.mapGrids,
    updatedMapGrids: state.map.updatedMapGrids,
    landCoverSliderValues: state.map.landCoverSliderValues,
    mapUpdated: state.map.mapUpdated,
  };
};
export default connect(mapStateToProps)(Checkboxes);
