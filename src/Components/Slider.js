import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import axios from 'axios';



const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: "300px",
  marginLeft: "10px",
  marginTop: "60px"
};

export default class CustomizedSlider extends React.Component {
  state = {
    value: [1, 100],

    
  };

  onSlide = (render, handle, value, un, percent) => {
    // console.log(value)
  };



render() {
  const { value } = this.state;
  let {MinValue, MaxValue} = this.props;
  MinValue = MinValue ? MinValue : 1
  MaxValue = MaxValue ? MaxValue : 100
  const range = { min: MinValue, max: MaxValue }

  return (
    <div style={styles}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        {this.props.IndicatorSlider}

      </div>
      <Nouislider start={value} range={range} tooltips={true} onUpdate={this.onSlide} />

    </div>
  );
}
}




