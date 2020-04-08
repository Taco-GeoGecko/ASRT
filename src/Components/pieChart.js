import { Pie, Doughnut } from "react-chartjs-2";
import React, { Component } from "react";
import { connect } from "react-redux";

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
      // data: this.props.piechartData,
      datasets: [
        {
          data: this.props.piechartData,
          // data: [530, 600, 750],
          backgroundColor: this.colors1,
        },
      ],
    };
  }
  componentDidMount() {
    this.PieChart = this.chartReference.chartInstance;
    this.setState({
      ...this.state,
    });
    this.PieChart.update();

    // console.log(PieChart);
    // console.log(this.PieChart); // returns a Chart.js instance reference
  }

  render() {
    console.log(this.PieChart);
    return (
      <div className="mega">
        <div className="charts">
          <h5 className="chartHeading">Soil Nutrients</h5>
          <hr className="HR" />
          <Pie
            ref={(reference) => (this.chartReference = reference)}
            // ref={this.chartReference}
            data={{
              labels: this.state.labels,
              datasets: this.state.datasets,
            }}
            // data={this.updataChart}
            height={100}
            options={{
              legend: {
                display: true,
                position: "right",
              },
            }}
            redraw
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
  };
};
export default connect(mapStateToProps)(PieChartComponent);
