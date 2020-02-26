import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { connect } from 'react-redux';



const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: "300px",
  marginLeft: "10px",
  marginTop: "60px"
};

class CustomizedSlider extends React.Component {
  // state = {
  //   value: [1, 100],

    
  // };
 



render() {
  let arr = this.props.sliderValue;

  const onSlide = (render, handle, arr, un, percent) => {
    console.log(arr)
  };
// var max2=Math.max(...arr.agric_data)
// console.log(max2)
// var min2=Math.min(...arr.agric_data)
// console.log(min2)
// // let valu=[min2, max2]
// let {value}=this.state;
  let {MinValue, MaxValue} = this.props;
  MinValue = MinValue ? MinValue : 1
  MaxValue = MaxValue ? MaxValue : 100
  const range = { min: MinValue, max: MaxValue }
// var arr = this.props.mapValue;
// console.log(arr)
  return (
    <div style={styles}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        {this.props.IndicatorSlider}
       
        {/* console.log({this.props.value}) */}
      </div>
      {/* <Nouislider start={arr} range={range} tooltips={true} onUpdate={this.onSlide} /> */}

    </div>
  );
}
}
const mapStateToProps = (state) => {
  
  return {
    // mapValue: state.mapValue,
    locationValue:state.locationValue,
    sliderValue: state.sliderValue
      
  }
  
}
export default connect(mapStateToProps)(CustomizedSlider)
// export default CustomizedSlider



