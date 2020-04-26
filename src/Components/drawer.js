import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme, StylesProvider } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import MatIcons from "./MatIcons";
import ControlledExpansionPanels from "./SideBar";
import MenuAppBar from "./navbar";
import "../App.css";
import UgMap from "./maps";
import PieChartComponent from "./pieChart";
import Rainfall from "./rainfallBarChart";
import Ndvilinegraph from "./ndvi-linegraph";
import Ndwilinegraph from "./ndwi-linegraph";
import Population from "./populationBarchart";
import Lst from "./lst-Linegraph";
import { connect } from "react-redux";
import {
  updateChartViewSuccess,
  updateExpansionBar,
} from "../redux/actions/actionTypes/actionTypes";
import CustomizedSlider from "./Slider";
import Switches from "./Togglebutton";

function ResponsiveDrawer(props) {
  // const [data, setData] = useState({data: ''});
  // //useEffect
  // useEffect(() => {
  //     if (props.chartView == true && props.mapUpdated == true) {

  //       // props.dispatch({ type: updateExpansionBar, payload: distinctlayout });
  //     }
  //     setData({data:props.expansionBar});
  // });
  let drawerWidth = 400;
  let distinctlayout = <ControlledExpansionPanels />;
  let data = <ControlledExpansionPanels />;

  let title = "AGRICULTURAL INDICATORS";
  let toggle = <Switches />;
  if (props.chartView == true && props.mapUpdated == true) {
    drawerWidth = 650;
    title = "CHARTS";
    // toggle = toggle;
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    grow: {
      flexGrow: 1,
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    closeMenuButton: {
      marginRight: "auto",
      marginLeft: 0,
    },
    spacing: {
      margin: 10,
    },
    navigation: {
      height: 50,
      width: 120,
    },
    whitediv: {
      backgroundColor: "white",
    },
  }));
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // props.dispatch({ type: updateExpansionBar, payload: distinctlayout });

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  if (props.chartView == true && props.mapUpdated == true) {
    // props.dispatch({ type: updateExpansionBar, payload: distinctlayout });
    let layout = (
      <div>
        <div>
          <PieChartComponent />
        </div>
        <div className={classes.spacing} />
        <div id="RAINFALL">
          <Rainfall />
        </div>
        {/* <div className={classes.spacing} />
        <div id="NDVI">
          <Ndvilinegraph />
        </div>
        <div className={classes.spacing} />
        <div id="NDWI">
          <Ndwilinegraph />
        </div>
        <div className={classes.spacing} />
        <div id="LST">
          <Lst />
        </div> */}
        <div className={classes.spacing} />
        <div id="POPULATION">
          <Population />
        </div>
        <div className={classes.spacing} />
      </div>
    );
    distinctlayout = <Switches componentData={layout} data={data} />;
  }
  // if (
  //   distinctlayout !== <ControlledExpansionPanels /> &&
  //   props.chartView == true
  // ) {
  // props.dispatch({ type: updateChartViewSuccess, payload: false });
  // layout=<ControlledExpansionPanels />
  // console.log("okkkkkkkay");
  // }
  // else {
  //   distinctlayout = <ControlledExpansionPanels />;
  //   // props.toglebtn=distict
  // }
  return (
    <StylesProvider injectFirst>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <MenuAppBar />
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <IconButton
                onClick={handleDrawerToggle}
                className={classes.closeMenuButton}
              >
                <CloseIcon />
              </IconButton>
              <div id="indicatorText">
                <small>
                  <h6>{title}</h6>
                  <h3>{toggle}</h3>
                </small>
              </div>

              {distinctlayout}
              <Divider />
              <MatIcons />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.toolbar} />
              <div id="indicatorText">
                <small>
                  <h6>{title}</h6>
                </small>
              </div>
              <div>{distinctlayout}</div>

              <Divider />
              <MatIcons />
            </Drawer>
          </Hidden>
        </nav>
        <UgMap />
      </div>
    </StylesProvider>
  );
}
ResponsiveDrawer.propTypes = {
  container: PropTypes.object,
};
const mapStateToProps = (state) => {
  return {
    mapUpdated: state.map.mapUpdated,
    chartView: state.chart.chartView,
    piechartData: state.chart.pieChartData,
    toglebtn: state.map.toglebtn,
    expansionBar: state.map.expansionBar,
  };
};

export default connect(mapStateToProps)(ResponsiveDrawer);
