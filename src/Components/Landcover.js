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
      <Checkboxes label="No data" value={1} />
      <Checkboxes label="Trees Cover Areas" value={2} />
      <Checkboxes label="Shrub Cover Areas" value={3} />
      <Checkboxes label="Grassland" value={4} />
      <Checkboxes label="Cropland" value={5} />
      <Checkboxes label="Vegetation aquatic or regularly flooded" value={6} />
      <Checkboxes label="Lichen Mosses / Sparse vegetation" value={7} />
      <Checkboxes label="Bare Areas" value={8} />
      <Checkboxes label="Built Up areas" value={9} />
      <Checkboxes label="snow and ice" value={10} />
      <Checkboxes label="open water" value={11} />


    </div>
  );
}
