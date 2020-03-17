import React, { Component } from "react";
import { Map, TileLayer, Marker, ZoomControl, GeoJSON } from "react-leaflet";
import Control from "react-leaflet-control";
import { connect } from "react-redux";
import { updateGridDataSuccess } from "../redux/actions/actionTypes/actionTypes";
import { getMapGrids } from "../redux/actions/mapAction";
import { getLocation } from "../redux/actions/locationActions";
import { getSliderData } from "../redux/actions/sliderActions";

class UgMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // feature: [this.props.lat, this.props.lng],
      // district: this.props.locationValue,
      map: null
    };
    this.geoJsonLayer = React.createRef();
    //   this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(e) {
  //   this.setState({ currentPos: e.latlng });
  // }


  componentWillMount() {
    this.props.dispatch(getMapGrids());
    this.props.dispatch(getLocation());
    this.props.dispatch(getSliderData());
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
    if (nextProps.mapUpdated === true) {
      // console.log(this.props.mapGrids[0][0].features.length, this.state.map);
      // this.geoJsonLayer.current.leafletElement.clearLayers().addData(this.props.mapGrids)
      this.props.dispatch({ type: updateGridDataSuccess, payload: false });
    }
  }
  style(feature) {
    return {
        // color: color_outline,
        opacity: 1,
        fillColor: '#DDDDFF',
        fillOpacity: 0.9,
        // weight: 3,
        // radius: 6,
        clickable: true
    }
}
  onEachFeature = (feature, layer) => {
    // console.log("onEachFeature fired: ");
    layer.on({
      mouseover: e => this.MouseOverFeature(e, feature),

      // mouseout: (e) => this.MouseOutFeature(e, feature),

    });
    layer.setStyle(this.style(feature));
  //  let totalMarkers = layer.getLayers().length
  //   console.log(totalMarkers)
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
  MouseOutFeature(e, feature) {
    this.setState({
      lat: this.props.lat,
      lng: this.props.lng,
      zoom: this.props.zoom,
      district: this.props.district
    });
    e.target.setStyle({
      // fillColor: '#A52A2A',
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
  };

  render() {
    let collectionOfGridcells = this.props.mapGrids;
    if (collectionOfGridcells[0]) {
      this.state.map = (
        <Map
          className="map"
          center={[this.props.lat, this.props.lng]}
          zoom={this.props.zoom}
          style={{ height: "800px", color: '#e15c26' }}
          onClick={this.handleClick}
         >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> contributors &copy; <a href="https://carto.com/attributions"></a>'
            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
            maxzoom="10"
          />
          <GeoJSON
            key={this.props.mapGrids[0][0].features.length}
            data={collectionOfGridcells[0][0]}
            onEachFeature={this.onEachFeature}
            // style={this.style} 
          />
          {/* {console.log(this.props.mapGrids[0][0].features.length)}; */}

          <Control className="info" position="topright">
            <div>
            <strong> {this.props.mapGrids[0][0].features.length} Grid-cells</strong>
            </div>
          </Control>
        </Map>
      );
      return this.state.map;
    } else return "hello";
  }
}
const mapStateToProps = state => {
  return {
    lat: state.map.lat,
    lng: state.map.lng,
    zoom: state.map.zoom,
    district: state.map.district,
    mapGrids: state.map.updatedMapGrids,
    locationValue: state.location.locationValue,
    sliderValue: state.slider.sliderValue,
    mapUpdated: state.map.mapUpdated
  };
};

export default connect(mapStateToProps)(UgMap);
