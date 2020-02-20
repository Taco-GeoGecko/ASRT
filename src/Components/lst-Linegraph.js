import React from 'react';
import {Line} from 'react-chartjs-2';

const state = {
  labels: ['Q1', 'Q2', 'Q3',
           'Q4'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'white',
      borderWidth: 6,
      data: [65, 59, 80, 81]
    }
  ]
}

export default class Lst extends React.Component {
  render() {
    return (
      <div className="charts">
        <h1 className="chartHeading">land surface temperature</h1>
        <hr className="HR"  />
        <Line
          data={state}
          options={{
            title:{
              display:true,

              fontSize:20
            },
            legend:{
              display:true,
              position:'bottom'
            },
            scales: {
              yAxes: [{
                  gridLines: {
                      color: 'white'
                  }
              }],
              xAxes: [{
                  gridLines: {
                      color: 'white'
                  }  
              }]
          }
          }}
          height='110%'
        />
      </div>
    );
  }
}