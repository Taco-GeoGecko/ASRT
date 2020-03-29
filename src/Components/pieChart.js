import { Pie } from "react-chartjs-2";
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getSliderData } from '../redux/actions/sliderActions';

class PieChartComponent extends Component {

    constructor(props) {

        super(props.sliderValue.LocationValue)

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
        console.log(arr)
        return (
            <div className="mega">

                <div className="charts" >

                    <h5 className="chartHeading">Soil Nutrients</h5>
                    <hr className="HR" />
                    <Pie
                        data={{
                            labels: this.state.labels,
                            datasets: this.state.datasets
                        }}
                        height={100}
                        options=
                        {{
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}

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
export default connect(mapStateToProps, mapDispatchToProps)(PieChartComponent)
