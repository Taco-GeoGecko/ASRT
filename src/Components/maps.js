import React, {Component} from "react";
import L from "leaflet";
import {Map,TileLayer, Marker, Popup, GeoJSON} from "react-leaflet";
import Control from "react-leaflet-control"
import districts from "./uganda_districts_2019.js";


class UgMap extends Component{


    state = {
        lat: 0.32958802605356885,
        lng: 32.34375,
        zoom: 7,
        // lat: 1.67,
        // lng: 32.48,
        // zoom: 7,
      }

      onEachFeature = (feature, layer) => {
        console.log('onEachFeature fired: ');
        layer.on({
          mouseover: (e) => this.MouseOverFeature(e, feature),
          // mouseout: (e) => this.MouseOutFeature(e, feature)
    
        });
      };
    
      // let status = 'Text';
    
      MouseOverFeature(e, feature) {
        // status = 'hello'
        console.log(feature)
      }

    render() {
        const position = [this.state.lat, this.state.lng]
        
        return (
          <Map className="map" center={position} zoom={this.state.zoom} style={{height:"800px"}}>
            <TileLayer
            //  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            //  url= 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              url='https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
            />
            maxZoom: 19

            {<GeoJSON
          data={districts}
          onEachFeature={this.onEachFeature} />}
        <Control
          className='info'
          position='topright'>
          <div>{}</div>
          
        </Control>

            <Marker position={position}>
              <Popup>
               <span> Hello! <br /> I am a Popup! </span> 
              </Popup>
            </Marker>
          </Map>
        )
      }
    }
    

    export default UgMap
    