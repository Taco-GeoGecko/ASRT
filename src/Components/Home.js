import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import geoLogo from '../Components/geoLogo.png';
import OutlinedButtons from './Button'
import ControlledExpansionPanels from './SideBar'
import '../App.css';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,

  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  navigation: {
    height:  30,
    width:80,
    },
    title: {
        flexGrow: 1,
        paddingLeft: 450
      },
    spacing:{
      margin:10,
    }
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
  <StylesProvider injectFirst>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
    
        <Toolbar>
          <img src={geoLogo} alt="geo gecko logo" className={classes.navigation}/>
          <Typography variant="h6" className={classes.title}>
            ASRT
          </Typography>
          
          <OutlinedButtons caption="Home" />
          <div className={classes.spacing} />
          <OutlinedButtons caption= "Orientation" />
        
  
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <ControlledExpansionPanels />
        <Divider />
       
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
         
        </Typography>
        
      </main>
    </div>
    </StylesProvider>
  );
}