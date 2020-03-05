import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { connect } from 'react-redux';
import {getSliderData} from '../redux/actions/sliderActions';
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: "300px",
  marginLeft: "10px",
  marginTop: "60px"
};
class CustomizedSlider extends React.Component {
  onSlide = (render, handle, value, un, percent) => {
    console.log(value)
  };
  render() {
    let arr = this.props.sliderValue;
    let arr2 = arr.agridata;
    function arrayColumn(arr, n) {
      if (arr && typeof arr !== undefined) {
        let y = arr.map(x => x[n]);
        let max = Math.max(...y);
        let min = Math.min(...y);
        return ([min, max]);
      }
    }
    let twoDimensionalArray = arr2;
    console.log(twoDimensionalArray)
    let { sliderKey } = this.props;
    console.log(this.props);
    let result = [1, 100];
    result = arrayColumn(twoDimensionalArray, sliderKey);
    console.log(result)
    let value = [1, 100];
    if (result && typeof result !== undefined) {
      value = result;
    }
    let { MinValue, MaxValue } = this.props;
    let range = { min: 1, max: 100 };
    if (value) {
      range = { min: value[0], max: value[1] }
    }
    return (
      <div style={styles}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          {this.props.IndicatorSlider}
        </div>
        <Nouislider start={value} key={sliderKey} range={range} tooltips={true} onChange={this.onSlide} />

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sliderValue: state.sliderReducer.sliderValue
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sliders: dispatch(getSliderData())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomizedSlider)



