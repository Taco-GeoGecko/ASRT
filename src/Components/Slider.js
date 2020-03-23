import React from "react";
import Nouislider from "nouislider-react";
import _ from "lodash";
import "nouislider/distribute/nouislider.css";
import { connect } from "react-redux";
import { updateGridData } from "../redux/actions/actionTypes/actionTypes";
import { getMapGrids } from "../redux/actions/mapAction";
import { getLocation } from "../redux/actions/locationActions";
import { getSliderData } from "../redux/actions/sliderActions";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: "300px",
  marginLeft: "10px",
  marginTop: "60px"
};
class CustomizedSlider extends React.Component {
  // componentDidMount() {
  //   this.props.dispatch(getMapGrids());
  // }
  // componentWillMount() {
  //   let y = this.props.mapGrids;
  //   // console.log(y);
  // }

  onSlide = (render, handle, value, un, percent) => {
    // (() => {
      // console.log(this.y);
      let indicators = this.props.indicators;
      let mapData = _.cloneDeep(this.props.mapGrids);
      mapData[0][0].features = mapData[0][0].features.filter(piece => {
        for (let [key, property] of Object.entries(piece.properties)) {
          if (key === indicators[this.props.sliderKey]) {
            if (property < value[0] || property > value[1]) {
              return false;
            }
            // console.log(property)
            return true;
          }
        }
      });
      // console.log( mapData[0][0].features);
      this.props.dispatch({ type: updateGridData, payload: mapData });

      // this.props.dispatch(getSliderData())
      // this.props.dispatch(getMapGrids())
      // this.props.dispatch(getLocation())
    // })();
  };

  render() {
    let value = [1, 100];
    let result = this.props.sliderValue;
    var { sliderKey } = this.props;
    result = result.map(sliderInfo => sliderInfo);
    let newResult = result[sliderKey];
    // console.log(newResult)
    if (Array.isArray(newResult) && newResult.length) {
      value = newResult;
    }
    let range = { min: 1, max: 100 };
    if (value) {
      range = { min: value[0], max: value[1] };
    }

    return (
      <div style={styles}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          {this.props.IndicatorSlider}
        </div>
        <Nouislider
          start={value}
          key={sliderKey}
          range={range}
          tooltips={true}
          onChange={this.onSlide}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    sliderValue: state.slider.sliderValue,
    indicators: state.slider.indicators,
    mapGrids: state.map.mapGrids
  };
};
//   const mapDispatchToProps=dispatch=>{
//     return{
//       grids: () => dispatch(getMapGrids()),
//       location: () => dispatch(getLocation()),
//       sliders: () => dispatch(getSliderData()),

//     }

// };
export default connect(mapStateToProps /*, mapDispatchToProps*/)(
  CustomizedSlider
);
