import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['Q1'],
  datasets: [
    {

      label: ' National Population',
      backgroundColor: '#929292',
      borderColor: '#929292',
      borderWidth: 6,
      data: [89]
    },
    {
      label: ' District Population',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(75,192,192,1)',

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

      <h5 className="chartHeading">Population</h5>

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
          height='110%'
        />
      </div>

     </div>
    );
  }
}