import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { connect } from 'react-redux';
import { getSliderData } from '../redux/actions/sliderActions';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: "300px",
  marginLeft: "10px",
  marginTop: "60px"
};
class CustomizedSlider extends React.Component {
  // componentDidUpdate(){
    // let arr = this.props.sliderValue;
    // let valu = arr;  
    //  // for(var arrValue=0; arrValue<5; arrValue++){
    // var rang = { min: 1, max: 100 };
    // if (valu) {
    //   rang = { min: valu[0], max: valu[1] }
    // }  
    // console.log(rang)
    //   }
   onSlide = (render, handle, value, un, percent) => {
      console.log(value)
  }
    
  render() {
    
    // let arr = this.props.sliderValue;
    // let arr2 = arr
    // console.log(arr2)
    
    let {sliderKey} = this.props; 
    // console.log(sliderKey);
    // let result = [1, 100];
    // for(var arrValue=0; arrValue<5; arrValue++){
      // let jk = sliderKey.map(x => x[n]);
      // var valu=arr[arrValue]
      // console.log("va")
  // }
    // let result = arrayColumn(twoDimensionalArray, sliderKey);
    // console.log(result)
    let value = [1,100];  
    // if (result && typeof result !== undefined) {
    //   value = result;
    // }
    // let { MinValue, MaxValue } = this.props;
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
      {/* {console.log(this.props.sliderValue)} */}
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
    sliders: dispatch(getSliderData()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomizedSlider)



