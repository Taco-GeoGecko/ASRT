import { Pie } from "react-chartjs-2";
import React, {Component} from 'react'
import { connect }  from 'react-redux';
import {getSliderData} from '../redux/actions/sliderActions';

// import { sliderData } from '../redux/actions/actionTypes';

class PieChartComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            labels: ['Iron', 'Copper', 'Boron', 'Phosphorous'],
            datasets: [{
                data: [100, 400, 600, 1000],
                backgroundColor: ['red', 'blue', 'green', 'yellow']

            }]
        }
    }

    render() {
    
        let arr = this.props.sliderValue;

//   const onSlide = (render, handle, arr, un, percent) => {
    console.log(arr)
//   };

        console.log(arr)



        return (
            <div className = "mega">
                
            <div className= "charts" >
                <h1 className="chartHeading">soil nutrients</h1>
                <hr className="HR"/>
                <Pie 
                data={{
                    labels: this.state.labels,
                    datasets: this.state.datasets
                }}
                height='110%'
                options=
                {{legend:{
                    display:true,
                    position:'bottom'}}}
                 />
                 <br />
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  
    return {
      sliderValue: state.slider.sliderValue
        
    }
    
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      sliders: dispatch(getSliderData()),
      
  
    }
    
  }

export default connect (mapStateToProps, mapDispatchToProps)(PieChartComponent)