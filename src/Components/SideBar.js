import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CustomizedSlider from "./Slider";
import Checkboxes from "./CheckBox";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "80%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  spacing: {
    margin: 10
  }
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Population</Typography>
          <Typography className={classes.secondaryHeading}></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.spacing}>
            <CustomizedSlider IndicatorSlider="" />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Soil Nutrients</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.spacing}>
            <CustomizedSlider IndicatorSlider="Soil Copper" />
            <CustomizedSlider IndicatorSlider="Soil Phospherous" />
            <CustomizedSlider IndicatorSlider="Soil Pottasium" />
            <CustomizedSlider IndicatorSlider="Soil Boron" />
            <CustomizedSlider IndicatorSlider="Soil Aluminium" />
            <CustomizedSlider IndicatorSlider="Soil Iron" />
            <CustomizedSlider IndicatorSlider="Soil Magnesium" />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
            Soil Moisture and Rainfall{" "}
          </Typography>
          <Typography className={classes.secondaryHeading}></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.spacing}>
            <CustomizedSlider IndicatorSlider="Soil Moisture" />
            <CustomizedSlider IndicatorSlider="Rainfall" />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Vegetation Health</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.spacing}>
            <CustomizedSlider IndicatorSlider="Vegetation health" />
            <Checkboxes IndicatorSlider="Land cover" />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>Terrain</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.spacing}>
            <CustomizedSlider
              IndicatorSlider="Slope"
              MinValue={0}
              MaxValue={20}
            />
            <CustomizedSlider
              IndicatorSlider="Elevation"
              MinValue={100}
              MaxValue={5000}
            />
            />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>
            Land Surface Temperature
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.spacing}>
            <CustomizedSlider IndicatorSlider="" MinValue={10} MaxValue={30} />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
