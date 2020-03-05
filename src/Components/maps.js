import React, { Component } from "react";
// import L from "leaflet";
import { Map, TileLayer, Marker, ZoomControl, GeoJSON } from "react-leaflet";
import Control from "react-leaflet-control"
import  grids from "./uganda_grid_5by5km_noWater_withDistrict.js";
import { connect } from 'react-redux';
import {getMapGrids} from '../redux/actions/mapAction';
import {getLocation} from '../redux/actions/locationActions';
 
 

class UgMap extends Component{
constructor(props){
  super(props);
  // this.state={feature:[this.props.lat, this.props.lng]}
  this.state = {
    currentPos: null
  };
  this.handleClick = this.handleClick.bind(this);

}

handleClick(e){
  this.setState({ currentPos: e.latlng });
}


onEachFeature = (feature, layer) => {
  console.log('onEachFeature fired: ');
  layer.on({
    mouseover: (e) => this.MouseOverFeature(e, feature),
    // mouseout: (e) => this.MouseOutFeature(e, feature)


    

  });
};


      MouseOverFeature(e, feature) {
        // feature=this.state.feature
       
        this.setState({
          lat: this.props.lat,
          lng: this.props.lng,
          zoom: this.props.zoom,
          district: this.props.locationValue.data,
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
          lat: this.props.lat,
          lng: this.props.lng,
          zoom: this.props.zoom,
          district: this.props.district,
          
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

     
      handleClick = (e) => {
        const { lat, lng } = e.latlng;
        console.log(lat, lng);
      }

    render() {
        // const position = [{this.props.featureState.lat}, {this.props.featureState.lng}]
        // console.log(grids.features[2].properties.DName2019);
       
        // let status = this.state.feature.district;
        // var arr = this.props.mapValue;
        // var arr = this.props.mapGrids;
        // // console.log(arr);

        let collection =this.props.mapGrids;

         if(collection[0]) {

          // console.log(collection[0][0])
          // console.log(this.props.locationValue)
          //  console.log('here')
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
              <Control position="topleft" >
          <button 
            onClick={ () => this.setState({bounds: [51.3, 0.7]}) }
          >
            
          </button>
        </Control>
              
          {/* {console.log(this.props.locationData)}  */}
          {/* {console.log('in components',this.props.mapGrids)} */}
            {/* console.log(this.props.locationData[2]); */}
  
              {/* <GeoJSON data={this.props.MapValue} */}
              <GeoJSON data={collection[0][0]}
            onEachFeature={this.onEachFeature} />
        
      {/* {console.log(this.props.locationValue.data)}  */}
      {/* {console.log(this.props.district)} */}
          <Control
            className='info'
            position='topright'>
            {/* <div>{this.props.locationValue}</div> */}
            <div></div>
          </Control>
        </Map>
      );
         
       }else 

       return('hello')
      
       
  }
}
const mapStateToProps = (state) => {

  return {
    lat: state.mapReducer.lat, 
    lng: state.mapReducer.lng,
    zoom: state.mapReducer.zoom,
    district: state.mapReducer.district,
    mapGrids: state.mapReducer.mapGrids,
    locationValue: state.locationReducer.locationValue
    
  }

  

}
const mapDispatchToProps = (dispatch) => {
  return {
    grids: dispatch(getMapGrids()),
    location: dispatch(getLocation())

  }

}
export default connect(mapStateToProps, mapDispatchToProps)(UgMap);
