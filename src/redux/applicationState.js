import pieChart from "../Components/PpieChart";

const AppState = {
  initialMapState: {
    lat: 0.32958802605356885,
    lng: 32.34375,
    zoom: 7,
    district: "Hover over district",
    mapGrids: [],
    updatedMapGrids: [],
    mapUpdated: false,
    sliderValues: {},
  },
  initialChartState: {
    pieChartData: [],
    piechartIndicators: [],
    updatedPieChart: [],
    pieChartDataUpdated: false,
    populationChartData: [],
    rainfallChartData: [],
  },
  initialLocationState: {
    locationValue: [],
  },
  initialSliderState: {
    sliderValue: [],
    landCoverResults: [],
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
      11: "land_cover",
      12: "slope",
      13: "elevation",
      14: "lst_jfm",
    },
    land_cover: {
      1: "land_cover",
    },
    landCoverCheckBox: {
      0: "No data",
      1: "Trees Cover Areas",
      2: "Shrub Cover Areas",
      3: "Grassland",
      4: "Cropland",
      5: "Vegetation aquatic or regularly flooded",
      6: "Lichen Mosses / Sparse vegetation",
      7: "Bare Areas",
      8: "Built Up areas",
      9: "snow and ice",
      10: "open water",
    },
  },
};
export default AppState;
