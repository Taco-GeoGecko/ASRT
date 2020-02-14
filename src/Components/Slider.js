import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import axios from 'axios';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: "300px",
  marginLeft: "10px",
  marginTop: "60px"
};

export default class CustomizedSlider extends React.Component {
  state = {
    value: []
    // range: { min: this.props.MinValue, max: this.props.MaxValue }
  };

// onSlide = (props)=>{{props.value} 
//  console.log(props.value)}
componentDidMount(){
  axios.get(`http://127.0.0.1:8000/sliders/`)
  .then(response=>{
    console.log(response)
    this.setState({
      value:response.data.slice(0,10)
    })
  })
}


  render() {
    const { value } = this.state;
    let { MinValue, MaxValue } = this.props;
    MinValue = MinValue ? MinValue : 1;
    MaxValue = MaxValue ? MaxValue : 100;
    const range = { min: MinValue, max: MaxValue };

    return (
      <div>
      <div style={styles}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          {this.props.IndicatorSlider}
        </div>
        
      </div>


      <Nouislider start={value} range={range} tooltips={true}/>

    </div>
  );
}
}

