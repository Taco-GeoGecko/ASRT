import React from "react";
import Nouislider from "nouislider-react";
import _ from "lodash";
import "nouislider/distribute/nouislider.css";
import { connect } from "react-redux";
import {
  updateGridData,
  updatePieChartIndicators,
} from "../redux/actions/actionTypes/actionTypes";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: "300px",
  marginLeft: "10px",
  marginTop: "60px",
};
class CustomizedSlider extends React.Component {
  UpdatedIndicators = this.props.updatePieChartIndicators;
  Range = this.props.DistrictGridcells;
  onSlide = (render, handle, value, un, percent) => {
    this.indicators = this.props.indicators;
    this.props.sliderValues[this.props.sliderKey] = value;
    let mapData = _.cloneDeep(this.props.mapGrids);
    this.indicator = this.indicators[this.props.sliderKey];

    if (this.UpdatedIndicators.includes(this.indicator) === false) {
      if (this.props.sliderKey <= 7 && this.props.sliderKey >= 1) {
        this.UpdatedIndicators.push(this.indicator);
      }
    }

    for (let [sliderKey, values] of Object.entries(this.props.sliderValues)) {
      mapData[0][0].features = mapData[0][0].features.filter((piece) => {
        for (let [key, property] of Object.entries(piece.properties)) {
          if (key === this.indicators[sliderKey]) {
            if (property < values[0] || property > values[1]) {
              return false;
            }
            return true;
          }
        }
      });
    }
    this.props.dispatch({ type: updateGridData, payload: mapData });
    this.props.dispatch({
      type: updatePieChartIndicators,
      payload: this.UpdatedIndicators,
    });
  };

  render() {
    let value = [1, 100];
    let result = this.props.sliderValue;
    var { sliderKey } = this.props;
    result = result.map((sliderInfo) => sliderInfo);
    let newResult = result[sliderKey];
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
const mapStateToProps = (state) => {
  return {
    district: state.map.district,
    chartView: state.chart.chartView,
    sliderValue: state.slider.sliderValue,
    indicators: state.slider.indicators,
    mapGrids: state.map.mapGrids,
    mapUpdated: state.map.mapUpdated,
    sliderValues: state.map.sliderValues,
    piechartData: state.chart.pieChartData,
    updatePieChartIndicators: state.chart.piechartIndicators,
    pieChartDataUpdated: state.chart.pieChartDataUpdated,
    locationValue: state.location.locationValue,
    DistrictGridcells: state.map.DistrictGridcells,
  };
};

export default connect(mapStateToProps)(CustomizedSlider);
