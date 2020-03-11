import React, { Component } from "react";
// import L from "leaflet";
import { Map, TileLayer, Marker, ZoomControl, GeoJSON } from "react-leaflet";
import Control from "react-leaflet-control";
// import grids from "./uganda_grid_5by5km_noWater_withDistrict.js";
import { connect } from "react-redux";
import { getMapGrids } from "../redux/actions/mapAction";
import { getLocation } from "../redux/actions/locationActions";
import { getSliderData } from '../redux/actions/sliderActions';
import { getSliderKey } from '../redux/actions/sliderKey';



class UgMap extends Component {
  // constructor(props) {
    // super(props);
    // this.state={feature:[this.props.lat, this.props.lng]}
  //   this.state = {
  //     currentPos: null,
  //     sliderData:this.props.sliderValue
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick(e) {
  //   this.setState({ currentPos: e.latlng });
  // }
  componentDidUpdate(){
   let sliderData=this.props.sliderValue;
  //  console.log(sliderData)
   let collection = this.props.mapGrids;
  //  let collection1=collection[0];
  //  console.log(collection)

  //  if(sliderData.agridata[0][15]==1){
    // let result= collection1.filter(agic=>{
    //   // collection[0][0].features[0].properties.gs_id

    // })

  //  }
     
      //  console.log(collection[0][0].features[0].properties.gs_id))
   } 
  

  onEachFeature = (feature, layer) => {
    // console.log("onEachFeature fired: ");
    layer.on({
      mouseover: e => this.MouseOverFeature(e, feature),
      click: e => this.handleClick(e, feature)
      // mouseout: (e) => this.MouseOutFeature(e, feature)
    });
  };

  MouseOverFeature(e, feature) {
    // feature=this.state.feature

    this.setState({
      lat: this.props.lat,
      lng: this.props.lng,
      zoom: this.props.zoom,
      district: this.props.locationValue.data
    });
  }
  MouseOutFeature(e, feature){
    this.setState({
      lat: this.props.lat,
      lng: this.props.lng,
      zoom: this.props.zoom,
      district: this.props.district
    });
    e.target.setStyle({
      // fillColor: '#ffffff',
      // fillOpacity: 1,
    });
    // status = 'hello'
    // console.log(feature);
    // feature.showPopup();
  }

  // handleMasaka = () => {
  //   return districts.features[0].properties.DName2016;

  // }

  handleClick = (e, feature) => {
    // console.log(e);
    this.setState({
      lat: this.props.lat,
      lng: this.props.lng,
      zoom: this.props.zoom,
      district: this.props.locationValue
    });
// console.log(this.props.locationValue)
    const { lat, lng } = e.latlng;
    // console.log(lat, lng);
  };

  render() {

    let collection = this.props.mapGrids;
    // console.log(collection)
    let collection1=collection[0];
   
    if (collection[0]) {
                return (
          
          
            <Map className="map" center={[this.props.lat, this.props.lng]} zoom={this.props.zoom} style={{height:"800px"}} onClick={this.handleClick}>
              {/* <ZoomControl position="topleft" /> */}
              <TileLayer
              
              //  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> contributors &copy; <a href="https://carto.com/attributions"></a>'
              //  url= 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                url='https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
                maxzoom="10"
              />
       <GeoJSON data={collection[0][0]} onEachFeature={this.onEachFeature} />
     
          {/* {console.log(this.props.locationValue.data)}  */}
          {/* {console.log(this.props.district)} */}
          <Control className="info" position="topright">
            {/* <div>{this.props.locationValue}</div> */}
            <div></div>
          </Control>
        </Map>
      );
    } else return "hello";
  }
} 
const mapStateToProps = state => {
  return {
    lat: state.mapReducer.lat,
    lng: state.mapReducer.lng,
    zoom: state.mapReducer.zoom,
    district: state.locationReducer.district,
    mapGrids: state.mapReducer.mapGrids,
    locationValue: state.locationReducer.locationValue,
    slider: state.sliderReducer.sliderKey,
    sliderValue: state.sliderReducer.sliderValue
  };
};
const mapDispatchToProps = dispatch => {
  return {
    grids: dispatch(getMapGrids()),
    location: dispatch(getLocation()),
    sliders: dispatch(getSliderData()),
    sliderKeys: dispatch(getSliderKey())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UgMap);
