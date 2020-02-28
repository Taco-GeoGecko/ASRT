import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Q1'],
  datasets: [
    {
      label: 'Population',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 6,
      data: [85]
    },
    {
      label: 'Population',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(255, 0, 0, 1)',
      borderWidth: 6,
      data: [89]
    }
  ]
}

export default class Population extends React.Component {
  render() {
    return (
     <div className= "mega">

<div className="charts">
      <h1 className="chartHeading">population</h1>
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

     </div>
    );
  }
}