import React from "react";
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
import PrimarySearchAppBar from "./navbar";
import "../App.css";
import UgMap from "./maps";
import PieChartComponent from "./pieChart";
import Rainfall from "./rainfallBarChart";
import Ndvilinegraph from "./ndvi-linegraph";
import Ndwilinegraph from "./ndwi-linegraph";
import Population from "./populationBarchart";
import Lst from "./lst-Linegraph";
import CustomizedSlider from "./Slider";

const drawerWidth = 650;
const useStyles = makeStyles((theme) => ({
  backgroundColor: "white",
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
function Analysis() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

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
            <PrimarySearchAppBar />
          </Toolbar>
        </AppBar>

        <div className={classes.whitediv}>
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
                    <h1 id="CHARTS">CHARTS</h1>
                  </small>
                </div>
                <div id="PIECHART">
                  <PieChartComponent />
                </div>
                <div className={classes.spacing} />
                <div id="RAINFALL">
                  <Rainfall />
                </div>
                <div className={classes.spacing} />
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
                </div>
                <div className={classes.spacing} />
                <div id="POPULATION">
                  <Population />
                </div>

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
                <small>
                  <h6>population</h6>
                  <CustomizedSlider IndicatorSlider="" sliderKey={0} />
                  <CustomizedSlider IndicatorSlider="Soil Copper" sliderKey={1} />

                </small>
                <div id="indicatorText">
                  <small>
                    <h1 id="CHARTS">CHARTS</h1>
                  </small>
                </div>

                {/* <ControlledExpansionPanels /> */}
                <div id="PIECHART">
                  <PieChartComponent />
                </div>
                <div className={classes.spacing} />
                <div id="RAINFALL">
                  <Rainfall />
                </div>
                <div className={classes.spacing} />
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
                </div>
                <div className={classes.spacing} />
                <div id="POPULATION">
                  <Population />
                </div>
                <div className={classes.spacing} />
                <Divider />
                <MatIcons />
              </Drawer>
            </Hidden>
          </nav>
        </div>
        <UgMap />
      </div>
    </StylesProvider>
  );
}
export default Analysis;
