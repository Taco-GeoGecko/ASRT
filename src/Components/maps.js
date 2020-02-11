import React, {Component} from "react";
import L from "leaflet";
import {Map,TileLayer, Marker, Popup, GeoJSON} from "react-leaflet";
import Control from "react-leaflet-control"
//import  Kiboga from "../Components/Kiboga";
import CustomizedSlider from "../Components/Slider";
import UgandaGrid from "./uganda_grid_5by5km_noWater";


class UgMap extends Component{


    state = {
        lat: 0.32958802605356885,
        lng: 32.34375,
        zoom: 7,
        district: 'Hover over district',
        
      }

  //     constructor(props){
  //       super(props);
  //     }
  //     handleEvent(on("slide", function(e) {
  //       console.log("e", e);
  //       surfSpotsGeoJSON.eachLayer(function(layer) {
  //         console.log("layer", layer);
  //         if (
  //           parseFloat(layer.feature.properties.distance) >=
  //             parseFloat(e[0]) &&
  //           parseFloat(layer.feature.properties.distance) <=
  //             parseFloat(e[1])
  //         ) {
  //           layer.addTo(map);
  //         } else {
  //           map.removeLayer(layer);
  //         }
  //       });
  //     });
  // })){
        
  //   .catch(err => console.log(err.message));
  // }

  //     }


  //     noUiSlider
  //     .create(slider, {
  //       start: [min + 1, max - 1],
  //       tooltips: true,
  //       connect: true,
  //       range: {
  //         min: min,
  //         max: max
  //       }
  //     })
      
      

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
          district: feature.properties,
          
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
        console.log(UgandaGrid.features[2].properties);
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

            {console.log(UgandaGrid.features[2])}


            {<GeoJSON data={UgandaGrid}
         
          
          onEachFeature={this.onEachFeature} />}
          
          
        <Control
          className='info'
          position='topright'>
          {/* <div>{status}</div> */}
          
        </Control>


        

            {/* <Marker position={position}>
              <Popup>
        <div>Hello! <br /> I am a Popup!{this.state.Map}</div>
              </Popup>
            </Marker> */}
          </Map>
        )
      }
    }
    

    export default UgMap
  