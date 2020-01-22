import React, { Component } from 'react';
import ButtonAppBar from './NavBar';
import ControlledExpansionPanels from './SideBar';
import IndicatorThumbComponent from './Slider';




class Home extends Component {
    state = {}
    render() {

        return (
            <div className="Container" style={{backgroundColor:"red"}}>
                <div className="row" style={{backgroundColor:"green"}}>
                    <div className="col-lg-12"></div>
                </div>
                <div className="row" style={{backgroundColor:"blue"}}>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-8"></div>
                </div>
            </div>
         );
    }
}

export default Home;