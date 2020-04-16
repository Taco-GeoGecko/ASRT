import React from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from "react-redux";
import { HorizontalBar } from "react-chartjs-2";

// const state = {
//   labels: ['Q1', 'Q2', 'Q3',
//     'Q4'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       backgroundColor: 'rgba(75,192,192,1)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderWidth: 6,
//       data: [65, 59, 80, 81],
//     }
//   ]
// }


// componentWillMount() {
//   var rainfallData = this.props.sliderValues;
//   let indicators = this.props.indicators;
//   let allData = [];
//   let labels2 = [];
//   let data2 = [];
//   allData.push(rainfallData);
//   for (let a = 0; a < allData.length; a++) {
//     labels2.push(indicators[a])
//     data2.push(allData[a])
//   }

//   console.log(labels2);
//   console.log(data2)

// }


class Rainfall extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      labels: ["rainfall"],
      datasets: [
        {
          label: "National Rainfall",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 2,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [2990],
        },
        {
          label: " District Rainfall",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(75,192,192,1)",
          hoverBackgroundColor: "rgba(75,192,192,2)",
          hoverBorderColor: "rgba(75,192,192,1)",
          borderWidth: 2,
          data: this.props.rainfallchartData,
        },
      ],
    };
  }


  //   render() {
  //     return (
  //       <div className="mega">
  //         <div className="charts">

  //           <h5 className="chartHeading">Rainfall</h5>

  //           <hr className="HR" />

  //           <HorizontalBar
  //             data={this.state}
  //             options={{
  //               title: {
  //                 display: true,
  //                 fontSize: 40,
  //               },
  //               legend: {
  //                 display: true,
  //                 position: 'bottom',

  //               },
  //             }}
  //             />
  //       </div>
  //     );
  //   }
  // }

  // const mapStateToProps = (state) => {
  //   return {
  //     rainfallchartData: state.chart.rainfallChartData,
  //     pieChartDataUpdated: state.chart.pieChartDataUpdated,
  //   };
  // };
  // export default connect(mapStateToProps)(Rainfall);

  render() {
    return (
      <div className="mega">
        <div className="charts">
          <h5 className="chartHeading">Rainfall</h5>
          <hr className="HR" />
        </div>
        <HorizontalBar
          data={this.state}
          options={{
            title: {
              display: true,
              fontSize: 40,
            },
            legend: {
              display: true,
              position: "bottom",
            },
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    rainfallchartData: state.chart.raifallChartData,
    pieChartDataUpdated: state.chart.pieChartDataUpdated,
  };
};
export default connect(mapStateToProps)(Rainfall);