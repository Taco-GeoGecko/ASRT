import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "leaflet/dist/leaflet.css";
import ResponsiveDrawer from "./Components/Analysis"
import PieChartComponent from "./Components/pieChart"
import Rainfall from "./Components/rainfallBarChart"
import Ndvilinegraph from "./Components/ndvi-linegraph"
import Ndwilinegraph from "./Components/ndwi-linegraph"
import Population from "./Components/populationBarchart"
import Lst from "./Components/lst-Linegraph"

//import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ResponsiveDrawer />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
