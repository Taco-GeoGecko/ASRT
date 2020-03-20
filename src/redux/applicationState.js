const AppState = {
  initialMapState: {
    lat: 0.32958802605356885,
    lng: 32.34375,
    zoom: 7,
    district: "Hover over district",
    mapGrids: [],
    updatedMapGrids: [],
    mapUpdated: false
  },
  initialLocationState: {
    locationValue: []
  },
  initialSliderState: {
    sliderValue: [],
    landCoverResults:[],
    indicators: {
      0: "ppp_sum",
      1: "soil_copper",
      2: "soil_phos",
      3: "soil_potas",
      4: "soil_boron",
      5: "soil_alumi",
      6: "soil_iron",
      7: "soil_magne",
      8: "ndwi_jfm",
      9: "rainfall",
      10: "ndvi_jfm",
      11:"land_cover",
      12: "slope",
      13: "elevation",
      14: "lst_jfm",
    },
    land_cover:{
      1:"land_cover",
      2:"cover"},
    landCoverCheckBox:{
      0: "ppp_sum",
      1: "soil_copper",
      2: "soil_phos",
      3: "soil_potas",
      4: "soil_boron",
      5: "soil_alumi",
      6: "soil_iron",
      7: "soil_magne",
      8: "ndwi_jfm",
      9: "rainfall",
      10: "ndvi_jfm",
      11:"land_cover",
      12: "slope",
      13: "elevation",
      14: "lst_jfm"
    }
  }
};
export default AppState;
