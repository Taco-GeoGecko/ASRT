import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import geoLogo from '../Components/geoLogo.png';
import '../App.css'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingLeft: 10
  },
  navigation: {
  height:  30,
  width:100,

  
  },
}));


export default function NavBar() {
  const classes = useStyles();

  return (
    <StylesProvider>
    <div className={classes.root}>
        
      <AppBar position="static">
        <Toolbar>
          <img src={geoLogo} alt="geo gecko logo" className={classes.navigation}/>
          <Typography variant="h6" className={classes.title}>
            ASRT
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Orientation</Button>
        </Toolbar>
      </AppBar>
      
    </div>
    </StylesProvider>
  );
}
