import React, {Component} from "react";
import ControlledExpansionPanels from "./Components/SideBar";
import CustomizedSlider from './Components/Slider';
//import Home from "./Components/Home";
class App extends Component{
    render(){
        return(
            <div className="App">
                <ControlledExpansionPanels />
                <CustomizedSlider />
                 

            </div>
        )
    }
}

export default App;
