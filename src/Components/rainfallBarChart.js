import React from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from "react-redux";

const state = {
  labels: ['Q1', 'Q2', 'Q3',
    'Q4'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 6,
      data: [65, 59, 80, 81],
    }
  ]
}

class Rainfall extends React.Component {

  componentWillMount() {
    var rainfallData = this.props.sliderValues;
    let indicators = this.props.indicators;
    let allData = [];
    let labels2 = [];
    let data2 = [];
    allData.push(rainfallData);
    for (let a = 0; a < allData.length; a++) {
      labels2.push(indicators[a])
      data2.push(allData[a])
    }

    console.log(labels2);
    console.log(data2)

  }


  render() {
    return (
      <div className="mega">
        <div className="charts">

          <h5 className="chartHeading">Rainfall</h5>

          <hr className="HR" />

          <Bar
            data={state}
            options={{
              title: {
                display: true,
                fontSize: 40
              },
              legend: {
                display: true,
                position: 'bottom',
                fontColor: 'white'
              },
              scales: {
                yAxes: [{
                  gridLines: {

                    color: '#929292'

                  }
                }],
                xAxes: [{
                  gridLines: {
                    color: 'white'
                  }
                }]
              }
            }}
            height={100}
          />
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
export default connect(mapStateToProps)(Rainfall);