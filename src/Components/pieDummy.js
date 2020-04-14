import React, { Component } from "react";
import Chart from "chart.js";
import { connect } from "react-redux";

class ChartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: null,
      labels: this.props.updatePieChartIndicators || [],
      data: this.props.piechartData || [],
    };
  }

  chart = React.createRef();

  componentDidMount() {
    // pass chartData to Chart below as this.props.chartData
    let ctx = document.getElementById("myChart");
    let theChart = new Chart(ctx, {
      type: "pie",
      data: {
        // labels: ["red", "blue", "green", "yellow", "black", "white", "gray"],
        labels: this.state.labels,
        datasets: [
          {
            label: "# of Votes",
            // data: [12, 19, 3, 5, 2, 3, 6],
            data: this.state.data,
            backgroundColor: [
              "red",
              "blue",
              "green",
              "yellow",
              "black",
              "white",
              "gray",
            ],
          },
        ],
      },
      height: 100,
      options: {
        legend: {
          display: true,
          position: "right",
        },
      },
    });
    // set chart to state
    this.setState({ chart: theChart });
    // console.log(this.state.chart);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    // update chart according to prop change
    // console.log(nextProps.piechartData);
    // console.log(this.state.chart);

    // this.state.chart.data.datasets.forEach((dataset) => {
    //   dataset.data.push(nextProps.piechartData);
    // });
    this.setState({ ...this.state });

    console.log(this.state);
    this.state.chart.update();
  }

  render() {
    return <canvas id="myChart" ref={this.chart} />;
  }
}

const mapStateToProps = (state) => {
  return {
    piechartData: state.map.pieChartData,
    updatePieChartIndicators: state.map.piechartIndicators,
  };
};
export default connect(mapStateToProps)(ChartComponent);
