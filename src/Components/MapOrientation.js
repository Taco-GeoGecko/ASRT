import React from 'react';
import UgMap from './maps';
import App from './Callout';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  lor: theme.palette.text.secondary,
  },
  spacing:{
    margin:10,
  },
  calloutstyles:{
    // height:100
    width: 200,
  }
}));

export default function ExpansionMaps() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <App myComponent={<UgMap />} side="center" arrowsize={20} styles={classes.calloutstyles} 
      message="This map contains the grid cells in it which will help us identify agricultural indicators on the map."/>
      
    </div>
  );
}

