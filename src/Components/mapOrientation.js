// import Callouts from "./Callout";
// import React, { Component } from "react";
// import { Map, TileLayer, GeoJSON } from "react-leaflet";
// import Control from "react-leaflet-control";
// import districts from "./uganda_districts_2019.js";

// export default class MapGuide extends Component {
//   state = {
//     lat: 0.32958802605356885,
//     lng: 32.34375,
//     zoom: 7,
//     district: "Hover over district"
//   };
//   onEachFeature = (feature, layer) => {
//     layer.on({
//       mouseover: e => this.MouseOverFeature(e, feature),
//       mouseout: e => this.MouseOutFeature(e, feature)
//     });
//   };

//   MouseOverFeature(e, feature) {
//     this.setState({
//       lat: 0.32958802605356885,
//       lng: 32.34375,
//       zoom: 7,
//       district: feature.properties.DName2019
//     });

//     e.target.setStyle({});
//   }

//   MouseOutFeature(e, feature) {
//     this.setState({
//       lat: 0.32958802605356885,
//       lng: 32.34375,
//       zoom: 7,
//       district: "Hover over district"
//     });
//     e.target.setStyle({});
//   }
//   render() {
//     const position = [this.state.lat, this.state.lng];
//     // console.log(districts.features[2].properties.DName2019);
//     let status = this.state.district;
//     return (
        
//       <Map
//         className="map"
//         center={position}
//         zoom={this.state.zoom}
//         style={{ height: "800px" }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
//           url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
//         />
//         <Callouts myComponent={<GeoJSON data={districts} onEachFeature={this.onEachFeature} />} side="right"/>
//         <Control className="info" position="topright">
//           <div>{status}</div>
//         </Control>
//       </Map>
//     );
//   }
// }
