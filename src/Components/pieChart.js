import { Pie, Doughnut } from "react-chartjs-2";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getSliderData } from "../redux/actions/sliderActions";

class PieChartComponent extends Component {
  indicators = this.props.indicators;
  // console.log(this.indicators)
  labels1 = Object.values(this.props.indicators)
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
    "pink",
    "orange",
    "purple",
    "cyan",
    "indigo",
    "violet"
  ];
  constructor(props) {
    super(props);
    let data1 = [2, 4, 5, 6];
    // data1.push({0:1,1:34,2:5});
    // let labels1 = ["pp", "iron", "rf", "coper"];
    // let soilNutrientsData = this.props.sliderValues;
    // console.log(soilNutrientsData);

    // let data1=soilNutrientsData;
    // data1.push(soilNutrientsData)
    // let data2 = this.soilNutrientsData;
    let indicators = this.props.indicators;
    console.log(indicators[1]);

    let labels1 = Object.values(indicators);

    // for (let [key, value] of Object.entries(soilNutrientsData)) {

    // if(key===labels1[sliderKey]){
    // console.log(key);
    // }
    // }

    this.state = {
      // labels: this.labels1,
      labels: labels1,
      datasets: [
        {
          //   data: this.data1,
          data: data1,
          backgroundColor: this.colors1
        }
      ]
    };
  }

  componentWillMount() {
    var soilNutrientsData = this.props.sliderValues;
    let indicators = this.props.indicators;
    let allData = [];
    let labels2 = [];
    let data2 = [];
    allData.push(soilNutrientsData);
    for (let a = 0; a < allData.length; a++) {
      labels2.push(indicators[a])
      data2.push(allData[a])
    }

    console.log(labels2);
    console.log(data2)

  }


  render() {
    // let soilNutrientsData = this.props.sliderValues;
    // console.log(soilNutrientsData);
    // let labels1 = [];
    // let data1 = [];
    // let data1=[19, 201, 34, 20];
    // let labes1=["pp", "iron", "rf", "coper"]
    // data1.push(arr);
    // console.log(data1);
    // let indicators = this.props.indicators;
    // labels1.push(indicators);
    // console.log(Object.values(indicators));
    return (
      <div className="mega">
        <div className="charts">
          <h5 className="chartHeading">Soil Nutrients</h5>
          <hr className="HR" />
          {/* <Doughnut data={this.state.data} /> */}
          <Pie
            data={{
              labels: this.state.labels,
              datasets: this.state.datasets
            }}
            height={100}
            options={{
              legend: {
                display: true,
                position: "right"
              }
            }}
            onChange={this.handleChange}
          />
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sliderValue: state.slider.sliderValue,
    sliderValues: state.map.sliderValues,
    indicators: state.slider.indicators
  };
};
export default connect(mapStateToProps)(PieChartComponent);
