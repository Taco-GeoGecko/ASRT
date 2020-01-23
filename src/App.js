import React, {Component} from "react";
import ButtonAppBar from "./Components/NavBar";
import ControlledExpansionPanels from "./Components/SideBar";
import CustomizedSlider from './Components/Slider';
//import Home from "./Components/Home";
class App extends Component{
    render(){
        return(
            <div className="App">
                <ButtonAppBar />
                <ControlledExpansionPanels />
                <CustomizedSlider />
                
                 

            </div>
        )
    }
}

export default App;
