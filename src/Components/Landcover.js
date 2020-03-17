import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import "../App.css";
import Checkboxes from "./CheckBox";

export default function LandCover(props) {
  // const [checked, setChecked] = React.useState(true);

  // const handleChange = event => {
  //   setChecked(event.target.checked);
  // };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        {props.IndicatorSlider}
      </div>
      <Checkboxes label="1" value={1} />
      <Checkboxes label="2" value={2} />
      <Checkboxes label="3" value={3} />
      <Checkboxes label="4" value={4} />
      <Checkboxes label="5" value={5} />
      <Checkboxes label="6" value={6} />
      <Checkboxes label="7" value={7} />
      {/* <Checkboxes label="8" value={8} />
      <Checkboxes label="9" value={9} />
      <Checkboxes label="10" value={10} /> */}
    </div>
  );
}
