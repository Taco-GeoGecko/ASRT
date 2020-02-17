import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import Control from "react-leaflet-control"

import CustomizedSlider from "../Components/Slider";
import districts from "../Components/uganda_grid_5by5km_noWater_withDistrict";
//import Nouislider from "nouislider-react";
//import "nouislider/distribute/nouislider.css";



class UgMap extends Component {

  state = {
    lat: 0.32958802605356885,
    lng: 32.34375,
    zoom: 7,
    district: 'Hover over district',
    

  }



  onEachFeature = (feature, layer) => {
    
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

    })
    console.log(feature)

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

    })

    console.log(feature)

  }
  onSlide = (render, handle, value, un, percent) => {
    console.log(value)
  };

  render() {
    const position = [this.state.lat, this.state.lng]
    console.log(districts.features.properties);
    let status = this.state.district;

    
      
    return (
      <Map className="map" center={position} zoom={this.state.zoom} style={{ height: "800px" }}>


        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url='https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'

        />




        {console.log(districts.features[2])}


        {<GeoJSON data={districts}


          onEachFeature={this.onEachFeature} />}


        <Control
          className='info'
          position='topright'>

        </Control>

      </Map>

    )
  }
}



export default UgMap;
