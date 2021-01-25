import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import weatherday from "../assets/weatherday.png";

const useStyles = makeStyles((theme) => ({
  bg: {
    //     height: "100vh",
    width: "100vw",
  },
}));

const MarsInfo = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid style={{ marginTop: "-20em" }}>
      <img className={classes.bg} src={weatherday} alt="mars weather info" />
    </Grid>
  );
};

export default MarsInfo;
