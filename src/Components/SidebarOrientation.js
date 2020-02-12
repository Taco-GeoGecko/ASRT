import React from 'react';
import ControlledExpansionPanels from './SideBar';
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

export default function ExpansionSideBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <App myComponent={<ControlledExpansionPanels />} side="right" arrowsize={20} styles={classes.calloutstyles} 
      message="Click on the drop downs besides the different Agricultural indicators to filter through data using the sliders provided"/>
      
    </div>
  );
}

