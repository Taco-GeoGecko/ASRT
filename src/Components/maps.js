import React, { Component } from "react";
import L from "leaflet";
import {
  Map,
  TileLayer,
  Marker,
  ZoomControl,
  GeoJSON,
  Popup
} from "react-leaflet";
import Control from "react-leaflet-control";
import { connect } from "react-redux";
import { updateGridDataSuccess   } from "../redux/actions/actionTypes/actionTypes";
import { getMapGrids } from "../redux/actions/mapAction";
import { getLocation } from "../redux/actions/locationActions";
import { getSliderData } from "../redux/actions/sliderActions";
import districts from "../Components/uganda_districts_2019";

class UgMap extends Component {
  bounds = [
    [-1.487315, 29.56346], // Southwest coordinates
    [4.23314, 35.01031] // Northeast coordinates
  ];
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
      zoom: this.props.zoom,
      data: this.props.locationValue,
      district: "Hover over district",
      bounds: this.bounds,
      map: null
    };
    this.geoJsonLayer = React.createRef();
  }
  componentWillMount() {
    this.props.dispatch(getMapGrids());
    this.props.dispatch(getLocation());
    this.props.dispatch(getSliderData());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.mapUpdated === true) {
      // this.props.dispatch({ type: updateGridDataSuccess, payload: false });
    }
  }

  


  onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: e => this.MouseOverFeature(e, feature),
      //   mouseout: (e) => this.MouseOutFeature(e, feature),
      click: e => this.ZoomToFeature(e, feature),
      
      // mouseout: e => this.resetHighlight(e, feature),
      // preclick: e => this.Highlight(e, feature)

    }); 
  };
    



  highlightSelection(e, feature)
{
  var layer = e.target;
  layer.setStyle({
        weight: 2,
        opacity: 0.5,
        color: '#666',
        fillOpacity: 0.7
    });
}
     

ZoomToFeature(e, feature) {

  const map = this.refs.map.leafletElement;

  /*loop through all features, if not polygons and not basemap.
  this will also affect the gridcells so if you want to remove that behaviour you'll need to include a filter to not affect the gridcells on map*/

  Object.keys(map["_layers"]).forEach(element => {
    if (
      typeof map["_layers"][element]["feature"] !== "undefined" &&
      map["_layers"][element]["feature"]["geometry"]["type"] === "Polygon"
    ) {
      var l = map["_layers"][element];
      l.setStyle({
        weight: 2,
        color: '#3388ff',
        dashArray: '',
        fillOpacity: 0.2
      });
    }
  });

  const district = this.refs.geojson.leafletElement;
  if (this.refs.map && map && this.refs.geojson && district) {
    map.fitBounds(e.target.getBounds());
    // this.props.dispatch({ type: updateChartView, payload: true });
    // console.log("hellllllo" + this.props.chartView);
  } else {
    map.fitBounds(district.getBounds());
  }

  /*finally set the target feature colour there*/
  var layer = e.target;
  layer.setStyle({
    weight: 2,
    color: '#666',
    dashArray: '',
    fillOpacity: 0.5
  });

}


  

  MouseOverFeature(e, feature) {
    this.setState({
      district: feature.properties.DName2019
    });

    // e.target.bindPopup(this.state.district);

    // e.target.openPopup();
  }

  MouseOutFeature(e, feature) {
    e.target.closePopup();
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

  render() {
    let status = this.state.district;
    let collectionOfGridcells = this.props.mapGrids;
    let districtData = districts;
    let data = districtData;
    var statusArea = "";
    if (this.props.mapUpdated == false) {
      data = districtData;
      statusArea = "District: " + this.state.district;
    } else {
      data = collectionOfGridcells[0][0];
      if (this.props.mapGrids[0] != undefined) {
        var statusGrids =
          "Total grid cells: " +
          data.features.length +
          "<br /> " +
          " 5x5 square kilometers";
      }
    } 

    if (collectionOfGridcells[0]) {
      this.state.map = (
        <Map
          className="map"
          center={[this.props.lat, this.props.lng]}
          zoom={this.props.zoom}
          ref="map"
          style={{ height: "550px", color: "#e15c26" }}
          maxBounds={this.state.bounds}
          maxZoom={10}
          minZoom={this.props.zoom}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a> contributors &copy; <a href="https://carto.com/attributions"></a>'
            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
            maxzoom="9"
          />
          <GeoJSON
            key={this.props.mapGrids[0][0].features.length}
            data={data}
            ref="geojson"
            onEachFeature={this.onEachFeature}
          />
          <GeoJSON data={districtData} onEachFeature={this.onEachFeature} />
          
          <Control className="info" position="topright">
              
            <div>
              {
                (status =
                  this.props.mapUpdated === true ? statusGrids : statusArea)
              } 
            </div>
          </Control>
          }
        </Map>
      );
      return this.state.map;
    } else return "Failed to load the map";
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
    mapUpdated: state.map.mapUpdated,
   
  };
};

export default connect(mapStateToProps)(UgMap);
