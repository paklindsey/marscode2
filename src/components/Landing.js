import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import marsGif from "../assets/marsgif.gif";

import { gsap, TimelineLite, Power3 } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${marsGif})`,
    backgroundSize: "cover",
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      overflow: "hidden",
    },
  },
  heroText: {
    color: "#fff",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5em",
    },
  },
  button: {
    fontFamily: "Montserrat",
    fontWeight: 600,
    backgroundColor: "#fff",

    borderRadius: 0,
    letterSpacing: 2,
    paddingLeft: "1em",
    paddingRight: "1em",
    marginTop: "5em",
    opacity: 0,
  },
}));

const Landing = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  let heroText = useRef(null);
  let enterButton = useRef(null);
  let tl = new TimelineLite();

  useEffect(() => {
    tl.to(heroText, {
      duration: 2,
      text: "WELCOME TO MARS",
      //  ease: Power3,
      //  yoyo: true,
      //  repeat: -1,
    });
    tl.to(enterButton, {
      opacity: 1,
      ease: Power3,
      delay: 0,
    });
  });

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Typography
        ref={(el) => (heroText = el)}
        variant="h1"
        className={classes.heroText}
      ></Typography>
      <Button
        ref={(el) => (enterButton = el)}
        component={Link}
        to="./marsinfo3"
        classes={{ root: classes.button }}
      >
        ENTER
      </Button>
    </Grid>
  );
};

export default Landing;
