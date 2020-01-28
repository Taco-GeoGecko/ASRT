import React, {Component} from "react";
import ControlledExpansionPanels from "./Components/SideBar";
import CustomizedSlider from './Components/Slider';
//import Home from "./Components/Home";
import './App.css';
import UgMap from "./Components/maps"
// import districts from "./Components/uganda_districts_2019.geojson" 
// import HomePage from "./Components/newstaff"

class App extends Component{
    render(){
        return(
            <div className="App">
                <ControlledExpansionPanels />
                <CustomizedSlider />
                <UgMap/>
                {/* <HomePage/> */}
                <districts/>
            </div>
        )
    }
}

export default App;


