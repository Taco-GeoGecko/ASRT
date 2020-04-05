import React from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from "react-redux";

const state = {
  labels: ['Q1'],
  datasets: [
    {

      label: ' National Average',
      backgroundColor: '#929292',
      borderColor: '#929292',
      borderWidth: 6,
      data: [89]
    },
    {
      label: ' District Grid Cell Average',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(75,192,192,1)',

      borderWidth: 6,
      data: [89]
    }
  ]
}



class Population extends React.Component {



  componentWillMount() {
    var populationData = this.props.sliderValues;
    let indicators = this.props.indicators;
    let allData = [];
    let labels2 = [];
    let data2 = [];
    allData.push(populationData);
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

          <h5 className="chartHeading">Population</h5>

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
                position: 'bottom'
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
export default connect(mapStateToProps)(Population);
