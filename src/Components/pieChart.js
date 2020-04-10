import { Pie, Doughnut } from "react-chartjs-2";
import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePieChartDataSuccess } from "../redux/actions/actionTypes/actionTypes";

class PieChartComponent extends Component {
  colors1 = [
    "red",
    "blue",
    "green",
    "yellow",
    "black",
    "white",
    "gray",
    "maroon",
    "brown",
  ];

  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
    this.PieChart = this.chartReference.chartInstance;

    this.state = {
      labels: this.props.updatePieChartIndicators,
      // labels: ["population", "rainfall", "boron"],
      shouldRedraw: false,
      datasets: [
        {
          data: this.props.piechartData,
          // data: [530, 600, 750],
          backgroundColor: this.colors1,
        },
      ],
    };
  }
  // componentDidMount() {
  //   this.PieChart = this.chartReference.chartInstance;
  //   // this.setState({
  //   //   ...this.state,
  //   // });
  //   this.PieChart.update();
  // }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.pieChartDataUpdated);
    if (nextProps.pieChartDataUpdated === false) {
      this.PieChart = this.chartReference.chartInstance;
      this.setState({ shouldRedraw: true });
      this.PieChart.update();
      this.props.dispatch({ type: updatePieChartDataSuccess, payload: false });
    } else this.setState({ shouldRedraw: false });
  }
  render() {
    console.log(this.state.shouldRedraw);
    return (
      <div className="mega">
        <div className="charts">
          <h5 className="chartHeading">Soil Nutrients</h5>
          <hr className="HR" />
          <Pie
            ref={(reference) => (this.chartReference = reference)}
            data={{
              labels: this.state.labels,
              datasets: this.state.datasets,
            }}
            height={100}
            options={{
              legend: {
                display: true,
                position: "right",
              },
            }}
            redraw={this.state.shouldRedraw}
          />
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sliderValue: state.slider.sliderValue,
    sliderValues: state.map.sliderValues,
    indicators: state.slider.indicators,
    piechartData: state.map.pieChartData,
    updatePieChartIndicators: state.map.piechartIndicators,
    pieChartDataUpdated: state.map.pieChartDataUpdated,
  };
};
export default connect(mapStateToProps)(PieChartComponent);
