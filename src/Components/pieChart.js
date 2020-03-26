import { Pie } from "react-chartjs-2";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getSliderData } from "../redux/actions/sliderActions";

class PieChartComponent extends Component {
  // indicators = this.props.indicators;
  // console.log(this.indicators)
  // labels1=Object.values(this.props.indicators)
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
    let data1=[];
    data1.push(
      [89, 98],
      [17, 52],
      [25, 29],
      [9, 36],
      [18, 34],
      [20, 62]
    );
    // let labels1 = ["pp", "iron", "rf", "coper"];
    // let soilNutrientsData = this.props.sliderValues;
    // console.log(soilNutrientsData);
    
    // let data1=soilNutrientsData;
    // data1.push(soilNutrientsData)
    let data2 = this.soilNutrientsData;
    let indicators = this.props.indicators;
    console.log(indicators);
    let labels1 = Object.values(indicators);

    // let labels1 = [
    //   "ppp_sum",
    //   "soil_copper",
    //   "soil_phos",
    //   "soil_potas",
    //   "soil_boron"
    // ];

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
  componentWillMount(){
    var soilNutrientsData = this.props.sliderValues;
    console.log(soilNutrientsData);
  }
  handleChange() {
    this.setState({
      labels: this.labels1,
      datasets: [
        {
          //   data: this.data1,
          data: this.data2,
          backgroundColor: this.colors1
        }
      ]
    });
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
