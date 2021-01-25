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
      <iframe
        src="https://mars.nasa.gov/layout/embed/image/mslweather/"
        title="curiosity"
        style={{}}
        width="100%"
        height="645"
        scrolling="no"
        frameborder="0"
      ></iframe>
      <iframe
        src="https://mars.nasa.gov/layout/embed/image/insightweather/"
        title="elysium"
        width="100%"
        height="720"
        scrolling="no"
        frameborder="0"
      ></iframe>
    </Grid>
  );
};

export default MarsInfoEmbed;
