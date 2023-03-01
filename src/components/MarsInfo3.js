import React, { useEffect, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import lanscape from "../assets/original.jpg";

import { gsap, TimelineLite, Power3 } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

// const dummyData = [
//   { sol: "SOL 3001", date: "JAN.14.21", high: "9F", low: "9F" },
//   { sol: "SOL 3002", date: "JAN.15.21", high: "9F", low: "9F" },
//   { sol: "SOL 3003", date: "JAN.16.21", high: "9F", low: "9F" },
//   { sol: "SOL 3004", date: "JAN.17.21", high: "9F", low: "9F" },
//   { sol: "SOL 3005", date: "JAN.18.21", high: "9F", low: "9F" },
//   { sol: "SOL 3006", date: "JAN.19.21", high: "9F", low: "9F" },
//   { sol: "SOL 3007", date: "JAN.20.21", high: "9F", low: "9F" },
// ];

const useStyles = makeStyles((theme) => ({
  container: {
    //     backgroundImage: `url(${curiosty})`,
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-reapeat",
    //     height: "100vh",
    position: "absolute",
    zIndex: "2",
  },
  headerText: {
    marginTop: ".5em",
    color: "#fff",
    fontSize: "2em",
    width: "29em",
  },
  infoBox: {
    width: "9em",
    height: "9.8em",
    backgroundColor: "#000",
    //     opacity: ".3",
    marginLeft: "5em",
    marginTop: "-13em",
  },
}));

const MarsInfo3 = () => {
  const classes = useStyles();
  let bgImg = useRef(null);
  let textP1 = useRef(null);
  let textP2 = useRef(null);
  let textP3 = useRef(null);
  let tl = new TimelineLite();

  useEffect(() => {
    gsap.to(bgImg, {
      duration: 7,
      scale: 1.5,
      ease: Power3.easeInOut,
      yoyo: true,
      repeat: -1,
    });
    tl.to(textP1, {
      delay: 1,
      duration: 4,
      text: "WHERE CURIOSITY LANDED ON AUGUST 6TH, 2012 AT 05:17 UTC",
      //  ease: Power3.easeInOut,
    });
    tl.to(textP2, {
      //  delay: 1,
      duration: 4,
      text: "NASA DESIGNED CURIOSITY FOR A TWO-YEAR MISSION",
      //  ease: Power3.easeInOut,
    });
    tl.to(textP3, {
      //  delay: 1,
      duration: 4,
      text: "SHE IS STILL IN OPERATION TO THIS DAY",
      //  ease: Power3.easeInOut,
    });
  });

  return (
    <Grid
      container
      style={{ marginTop: "-7.5em" }}
      className={classes.container}
    >
      <Grid
        item
        container
        direction="column"
        style={{ marginTop: "20em", marginLeft: "10em" }}
      >
        <Typography style={{ color: "#fff" }}>
          A MARS SOL IS 24 HOURS, 39 MINUTES LONG
        </Typography>
        <Typography variant="h1" className={classes.headerText}>
          YOU ARE ON THE GALE CRATER
        </Typography>
        <Typography
          ref={(el) => (textP1 = el)}
          variant="body1"
          className={classes.headerText}
          style={{ fontSize: ".8em", marginTop: "3em" }}
        ></Typography>
        <Typography
          ref={(el) => (textP2 = el)}
          variant="body1"
          className={classes.headerText}
          style={{ fontSize: ".8em", marginTop: "3em" }}
        ></Typography>
        <Typography
          ref={(el) => (textP3 = el)}
          variant="body1"
          className={classes.headerText}
          style={{ fontSize: ".8em", marginTop: "3em" }}
        ></Typography>
      </Grid>
      <Grid
        container
        style={{
          width: "100%",
          height: "auto",
          marginTop: "0em",
          position: "absolute",
          overflow: "hidden",
          zIndex: "-1",
        }}
      >
        <img
          ref={(el) => (bgImg = el)}
          src={lanscape}
          alt="mars dirt"
          style={{ width: "100%", height: "100vh" }}
        />
      </Grid>
    </Grid>
  );
};

export default MarsInfo3;
