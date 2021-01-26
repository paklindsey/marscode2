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

const MarsInfoEmbed = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ marginTop: "-7.5em" }}
    >
      <Typography style={{ marginTop: "10em" }}>
        HERE IS SOME WEATHER DATA UPDATED DAILY
      </Typography>
      <iframe
        src="https://mars.nasa.gov/layout/embed/image/mslweather/"
        title="curiosity"
        style={{ marginTop: "2em" }}
        width="80%"
        height="720"
        scrolling="no"
        frameborder="0"
      ></iframe>
      <iframe
        src="https://mars.nasa.gov/layout/embed/image/insightweather/"
        title="elysium"
        width="80%"
        height="720"
        scrolling="no"
        frameborder="0"
      ></iframe>
    </Grid>
  );
};

export default MarsInfoEmbed;
