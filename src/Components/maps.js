import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import Control from "react-leaflet-control"
// import  grids from "./uganda_grid_5by5km_noWater_withDistrict.js";
import { connect } from 'react-redux';
import { getData } from '../redux/actions/mapAction';
import { getLocation } from '../redux/actions/locationActions'

class UgMap extends Component {
  constructor(props) {
    super(props);
    // this.state={feature:this.props.featureState}
  }

  // state = {
  //     lat: 0.32958802605356885,
  //     lng: 32.34375,
  //     zoom: 7,
  //     district: 'Hover over district',

  //   }



  MouseOverFeature(e, feature) {
    // {this.state.feature}

    e.target.setStyle({
      // fillColor: '#000000',
      // fillOpacity: 0.8,
    })
    // status = 'hello'
    // console.log(feature)


    // feature.showPopup();
  }


  MouseOutFeature(e, feature) {
    //   this.setState({
    //     lat: 0.32958802605356885,
    //     lng: 32.34375,
    //     zoom: 7,
    //     district: 'Hover over district',

    //   }

    // )
    e.target.setStyle({
      // fillColor: '#ffffff',
      // fillOpacity: 1, 
    })
    // status = 'hello'
    // console.log(feature)
    // feature.showPopup();
  }


  // handleMasaka = () => {
  //   return districts.features[0].properties.DName2016;

  // }


  render() {
    // const position = [{this.props.featureState.lat}, {this.props.featureState.lng}]
    // console.log(grids.features[2].properties.DName2019);

    // let status = this.state.feature.district;
    return (

      <Map className="map" center={[this.props.lat, this.props.lng]} zoom={this.props.zoom} style={{ height: "800px" }}>
        <TileLayer

          //  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          //  url= 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          url='https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
        // minimmum zoom="3"
        />

        {console.log(this.props.locationData)}
        {console.log(this.props.grids())}
        {/* console.log(this.props.locationData[2]); */}


        {/* {console.log(grids.features[2])} */}


        <GeoJSON data={this.props.grids()}



          onEachFeature={this.onEachFeature} />

        {console.log(this.props.grids)}
        {console.log(this.props.location)}
        {/* 
        <Control
          className='info'
          position='topright'>
          <div>{grids.features.District}</div>
        </Control> */}
      </Map>
    );
  }
}
const mapStateToProps = (state) => {

  return {
    lat: state.lat,
    lng: state.lng,
    zoom: state.zoom,
    district: state.district,
    locationData: state.value,
    // grids:state.grid

  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    grids: () => {
      dispatch(getData())
    },
    location: () => {
      dispatch(getLocation())
    }

  }

}
export default connect(mapStateToProps, mapDispatchToProps)(UgMap);
