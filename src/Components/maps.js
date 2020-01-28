import React, {Component} from "react";
import L from "leaflet";
import {Map,TileLayer, Marker, Popup, GeoJSON} from "react-leaflet";
import Control from "react-leaflet-control"
import districts from ".\\uganda_districts_2019";


class UgMap extends Component{


    state = {
        lat: 0.32958802605356885,
        lng: 32.34375,
        zoom: 7.5,
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
          <Map className="map" center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url='https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
            />

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
                {/* A pretty CSS3 popup. <br /> Easily customizable. */}
              </Popup>
            </Marker>
          </Map>
        )
      }
    }
    

    export default UgMap
    