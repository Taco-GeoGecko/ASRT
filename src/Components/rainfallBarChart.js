import React from 'react';
import {Bar} from 'react-chartjs-2';

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

export default class Rainfall extends React.Component {
  render() {
    return (
      <div className = "mega">
        <div className="charts">

        <h5 className="chartHeading">Rainfall</h5>

        <hr className="HR"/>
        
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              fontSize:40
            },
            legend:{
              display:true,
              position:'bottom',
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