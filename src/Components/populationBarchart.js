import React from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
// // this.data = this.props.populationchartData;
// // const state = {
// // labels: ["Q1"],
// // datasets: [
// //   {
// //     label: " National Population",
// //     backgroundColor: "#929292",
// //     borderColor: "#929292",
// //     borderWidth: 6,
// //     data: [89],
// //   },
// //   {
// //     label: " District Population",
// //     backgroundColor: "rgba(75,192,192,1)",
// //     borderColor: "rgba(75,192,192,1)",
// //     borderWidth: 6,
// //     data: [65],
// //   },
// // ],
// // };

// class Population extends React.Component {
//   render() {
//     const arbitraryStackKey = "stack1";

//     return (
//       <div className="mega">
//         <div className="charts">
//           <h5 className="chartHeading">Population</h5>

//           <hr className="HR" />
//           <Bar
//             key={this.props.populationchartData}

//             data={{
//               labels: ["a"],
//               datasets: [
//                 {
//                   label: "data1",
//                   data: [2599],
//                   backgroundColor: "#929292",
//                 },
//                 {
//                   label: "data2",
//                   data: [2500],
//                   backgroundColor: "rgba(75,192,192,1)",
//                 },
//               ],
//             }}
//             options={{
//               title: {
//                 display: true,
//                 fontSize: 40,
//               },
//               legend: {
//                 display: true,
//                 position: "bottom",
//               },
//               scales: {
//                 yAxes: [
//                   {
//                     gridLines: {
//                       color: "rgba(75,192,192,1)",
//                     },
//                   },
//                 ],
//                 xAxes: [
//                   {
//                     gridLines: {
//                       color: "#929292",
//                     },
//                   },
//                 ],
//               },
//             }}
//             height={100}
//           />
//         </div>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     populationchartData: state.chart.populationChartData,
//     pieChartDataUpdated: state.chart.pieChartDataUpdated,
//   };
// };
// export default connect(mapStateToProps)(Population);
import { HorizontalBar } from "react-chartjs-2";

class Population extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["population"],
      datasets: [
        {
          label: "National Population",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 2,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [2990],
        },
        {
          label: " District Population",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(75,192,192,1)",
          hoverBackgroundColor: "rgba(75,192,192,2)",
          hoverBorderColor: "rgba(75,192,192,1)",
          borderWidth: 2,
          data: this.props.populationchartData,
        },
      ],
    };
  }
  render() {
    return (
      <div className="mega">
        <div className="charts">
          <h5 className="chartHeading">Population</h5>
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
    populationchartData: state.chart.populationChartData,
    pieChartDataUpdated: state.chart.pieChartDataUpdated,
  };
};
export default connect(mapStateToProps)(Population);
