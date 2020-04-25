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

  let mapData = _.cloneDeep(props.mapGrids);

  const [state, setState] = React.useState({ key: false, value: 0 });
  const handleChange = (event) => {
    props.sliderValues[checkboxKey] = checkboxValue;
    setState({
      ...state,
      key: event.target.checked,
      value: props.sliderValues,
    });
    for (let [landCoverKey, valu] of Object.entries(props.sliderValues)) {
      console.log(valu);

      mapData[0][0].features = mapData[0][0].features.filter((piece) => {
        for (let [key, property] of Object.entries(piece.properties)) {
          if (key === "land_cover" && indicators[landCoverKey] == props.label) {
            if (property < valu) {
              return false;
            } else {
              return true;
            }
          }
        }
      });
    }
    props.dispatch({ type: updateLandCoverGridData, payload: mapData });
  };
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.key}
              onChange={handleChange}
              value={props.sliderValues}
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
    sliderValues: state.map.sliderValues,
  };
};
export default connect(mapStateToProps)(Checkboxes);
