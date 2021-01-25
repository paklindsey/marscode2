import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import curiosty from "../assets/curiostyrover.png";

const dummyData = [
  { sol: "SOL 30001", date: "JAN.14.21", high: "9F", low: "9F" },
  { sol: "SOL 30002", date: "JAN.15.21", high: "9F", low: "9F" },
  { sol: "SOL 30003", date: "JAN.16.21", high: "9F", low: "9F" },
  { sol: "SOL 30004", date: "JAN.17.21", high: "9F", low: "9F" },
  { sol: "SOL 30005", date: "JAN.18.21", high: "9F", low: "9F" },
  { sol: "SOL 30006", date: "JAN.19.21", high: "9F", low: "9F" },
  { sol: "SOL 30007", date: "JAN.20.21", high: "9F", low: "9F" },
];

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${curiosty})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-reapeat",
    height: "100vh",
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
  const theme = useTheme();

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
        style={{ marginTop: "20em", marginLeft: "5em" }}
      >
        <Typography style={{ color: "#fff" }}>
          A MARS SOL IS 24 HOURS, 39 MINUTES LONG
        </Typography>
        <Typography variant="h1" className={classes.headerText}>
          THE LATEST WEATHER AT GALE CENTER
        </Typography>
      </Grid>
      <Grid
        container
        style={{ width: "60em", height: "28em", marginTop: "18em" }}
      >
        {dummyData.map((day) => (
          <Grid
            key="day.id"
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.infoBox}
          >
            <Typography
              variant="body1"
              style={{
                color: "#fff",
                alignText: "center",
                marginBottom: ".3em",
              }}
            >
              {day.sol}
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", marginBottom: ".5em" }}
            >
              {day.date}
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", marginBottom: ".3em" }}
            >
              High : {day.high}
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", marginBottom: ".3em" }}
            >
              Low : {day.low}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default MarsInfo3;
