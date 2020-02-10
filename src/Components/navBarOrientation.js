import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ContainedButtons from "./Button";
import geoLogo from "./geoLogo.png";
import App from "./Callout";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  spacing: {
    margin: 10
  },
  navigation: {
    height: 50,
    width: 120
  },
  calloutstyles: {
    height: 100,
    width: 120
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <a href="https://www.geogecko.com/">
            <img
              src={geoLogo}
              alt="geo gecko logo"
              target="_blank"
              className={classes.navigation}
            />
          </a>
        </Typography>
        <App
          myComponent={<ContainedButtons caption="Home" />}
          side="bottom"
          styles={classes.calloutstyles}
          message="Click on this home button to return to the home page"
        />
        <div className={classes.spacing} />
        <ContainedButtons
          click={() => {
            alert("I am clicked");
          }}
          caption="Orientation"
        />
      </Toolbar>
    </div>
  );
}
