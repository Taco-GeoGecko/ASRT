import React from 'react';
import {Line} from 'react-chartjs-2';

const state = {
  labels: ['Q1', 'Q2', 'Q3',
           'Q4'],
  datasets: [
    {
      label: 'vegetation health',
      fill: false,

      // lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: '#77BB85',

      borderWidth: 6,
      data: [65, 59, 80, 81]
    },
    {
      label: 'National Vegetation Health',
      fill: false,

      // lineTension: 0.5,

      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: '#616161',
      borderWidth: 6,
      data: [68, 68, 90, 76]
    }
  ]
}

export default class Ndvilinegraph extends React.Component {
  render() {
    return (
      <div className="mega">

<div className="charts">

        <h5 className="chartHeading">Vegetation Health</h5>

        <hr className="HR"/>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              
              fontSize:40
            },
            legend:{
              display:true,
              position:'bottom'
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