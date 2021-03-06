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
  marginBottom: "40px",
};
class CustomizedSlider extends React.Component {
  UpdatedIndicators = this.props.updatePieChartIndicators;
  // mapData = _.cloneDeep(this.props.mapGrids);
  // updatedmapData = _.cloneDeep(this.props.updatedMapGrids);
  // selectedmapData = this.props.landCovermapUpdated == true ?_.cloneDeep(this.props.updatedMapGrids): _.cloneDeep(this.props.mapGrids);

  onSlide = (render, handle, value, un, percent) => {
    this.indicators = this.props.indicators;
    this.props.sliderValues[this.props.sliderKey] = value;

    this.indicator = this.indicators[this.props.sliderKey];

    if (this.UpdatedIndicators.includes(this.indicator) === false) {
      if (this.props.sliderKey <= 7 && this.props.sliderKey >= 1) {
        this.UpdatedIndicators.push(this.indicator);
      }
    }

    for (let [sliderKey, values] of Object.entries(this.props.sliderValues)) {
      this.props.currentsliderValues.push(values);

      this.selectedmapData[0][0].features = this.selectedmapData[0][0].features.filter(
        (piece) => {
          for (let [key, property] of Object.entries(piece.properties)) {
            if (key === this.indicators[sliderKey]) {
              if (property < values[0] || property > values[1]) {
                return false;
              }
              return true;
            }
          }
        }
      );
    }
    // console.log(this.selectedmapData);

    this.props.dispatch({
      type: updateGridData,
      payload: this.selectedmapData,
    });
    this.props.dispatch({
      type: updatePieChartIndicators,
      payload: this.UpdatedIndicators,
    });
  };

  render() {
    this.selectedmapData =
      this.props.landCovermapUpdated == true
        ? _.cloneDeep(this.props.updatedMapGrids)
        : _.cloneDeep(this.props.mapGrids);

    let value = [1, 100];
    let result = this.props.sliderValue;
    var { sliderKey } = this.props;
    result = result.map((sliderInfo) => sliderInfo);
    let newResult = result[sliderKey];
    if (Array.isArray(newResult) && newResult.length) {
      value = newResult;
    }
    if (this.props.chartView == true && this.props.mapUpdated == true) {
      result = this.props.sliderValues;
      for (let [Key, values] of Object.entries(this.props.sliderValues)) {
        if (Key == sliderKey) {
          value = values;
        } else {
          value = value;
        }
      }
    }

    let range = { min: 1, max: 100 };
    if (newResult) {
      range = { min: newResult[0], max: newResult[1] };
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
    landCovermapUpdated: state.map.landCovermapUpdated,
    sliderValues: state.map.sliderValues,
    currentsliderValues: state.map.currentsliderValues,
    piechartData: state.chart.pieChartData,
    updatePieChartIndicators: state.chart.piechartIndicators,
    pieChartDataUpdated: state.chart.pieChartDataUpdated,
    locationValue: state.location.locationValue,
    DistrictGridcells: state.map.DistrictGridcells,
    updatedMapGrids: state.map.updatedMapGrids,
    chartView: state.chart.chartView,
  };
};

export default connect(mapStateToProps)(CustomizedSlider);
