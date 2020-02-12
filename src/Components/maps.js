import React, {Component} from "react";
import L from "leaflet";
import {Map,TileLayer, Marker, Popup, GeoJSON} from "react-leaflet";
import Control from "react-leaflet-control"
import  grids from "./uganda_grid_5by5km_noWater_withDistrict.js";




class UgMap extends Component{


    state = {
        lat: 0.32958802605356885,
        lng: 32.34375,
        zoom: 7,
        district: 'Hover over district',
        
      }
      

      onEachFeature = (feature, layer) => {
        // var popup = feature.properties.DName2019
        // feature.bindPopup(popup)
        console.log('onEachFeature fired: ');
        layer.on({
          mouseover: (e) => this.MouseOverFeature(e, feature),
          mouseout: (e) => this.MouseOutFeature(e, feature),
          

        });
      };
    
      MouseOverFeature(e, feature) {
        this.setState({
          lat: 0.32958802605356885,
          lng: 32.34375,
          zoom: 7,
          district: feature.properties.DName2019,
          
        }

        )

        e.target.setStyle({
          // fillColor: '#000000',
          // fillOpacity: 0.8,
        })
        // status = 'hello'
        console.log(feature)
        // feature.showPopup();
      }
      
      MouseOutFeature(e, feature) {
        this.setState({
          lat: 0.32958802605356885,
          lng: 32.34375,
          zoom: 7,
          district: 'Hover over district',
          
        }

        )
        e.target.setStyle({
          // fillColor: '#ffffff',
          // fillOpacity: 1, 
        })       
        // status = 'hello'
        console.log(feature)
        // feature.showPopup();
      }


      // handleMasaka = () => {
      //   return districts.features[0].properties.DName2016;

      // }


    render() {
        const position = [this.state.lat, this.state.lng]
        console.log(grids.features[2].properties.DName2019);
        let status = this.state.district;
        return (
          
          <Map className="map" center={position} zoom={this.state.zoom} style={{height:"800px"}}>
            <TileLayer
            
            //  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            //  url= 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              url='https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
              // minimmum zoom="3"
            />
            
            
          {/* {this.handleMasaka()} */}

            {console.log(grids.features[2])}


            {<GeoJSON data={grids}
         
          
          onEachFeature={this.onEachFeature} />}
          
          
        <Control
          className='info'
          position='topright'>
          <div>{status}</div>
          
        </Control>


        

            <Marker position={position}>
              <Popup>
        <div>Hello! <br /> I am a Popup!{this.state.Map}</div>
              </Popup>
            </Marker>
          </Map>
        )
      }
    }
    

    export default UgMap
    



