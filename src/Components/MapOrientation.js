import React from 'react';
import UgMap from './maps';
import Callouts from "./Callout";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '0%',
  //lor: theme.palette.text.secondary,
  },
  spacing:{
    margin:0,
  },
  calloutstyles:{
   
    width: 200,
  marginLeft:-350,
    
  }
}));

export default function ExpansionMaps() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Callouts
        myComponent={<UgMap/>}
        side="left"
        arrowsize={20}
        styles={classes.calloutstyles}
        message="hovering on the map will help you get a district you need in the box at the top right corner on the page."
      />
    </div>
  );
}


