import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import spinner from "../assets/spinner.gif";

const useStyles = makeStyles((theme) => ({
  container: {
    //     backgroundImage: `url(${lines})`,
    //     backgroundPosition: "bottom",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-reapeat",
    height: "100vh",
    marginTop: "-2em",
    //     marginTop: ".5em",
  },
  textField: {
    height: "4em",
    borderWidth: 6,
    textAlign: "center",
    fontFamily: "Montserrat",
    letterSpacing: 2,
  },
  cameraText: {
    width: "50%",
  },
}));

const sols = () => {
  let utcLanding = 1344230220000;
  let oneSol = 88775.244;
  let currentSols = (Date.now() - utcLanding) / 1000 / oneSol;
  return Math.floor(currentSols);
};

const solsToEarthDate = (sols) => {
  let utcLanding = 1344230220000;
  let oneSol = 88775244;
  let earthDate = utcLanding + sols * oneSol;

  return new Date(earthDate).toUTCString().slice(5, 16);
};

const Images = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [image, setImage] = useState("");
  const [date, setDate] = useState(sols() - 2);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const request = async () => {
      let res = await axios(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${date}&api_key=vDaQJdr6dgXmGczRScqjafQlSg81cOYbvmqv8839`
      );
      if (res.data.photos.length > 0) {
        if (count > res.data.photos.length - 1) {
          setCount(0);
        } else {
          setImage(res.data.photos[count]);
        }
        console.log(res.data.photos[count]);
      } else setImage(null);
      setLoading(true);

      // console.log(res.data.photos[0].img_src);
    };
    request();
  }, [date, count]);

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.container}
      >
        <Grid
          item
          container
          direction="column"
          justifyItems="center"
          alignItems="center"
        >
          <Typography
            variant="body1"
            style={{
              marginBottom: "1em",
              textAlign: "center",
            }}
          >
            THE SOLS OF MARS
            <br></br>
          </Typography>
          <Typography variant="body2" style={{ marginBottom: "1em" }}>
            SOL 0 : {solsToEarthDate(0)}
          </Typography>
          <Typography variant="body2" style={{ marginBottom: "1em" }}>
            SOL {sols()} : Today
          </Typography>
          <form style={{ marginTop: "1em", marginBottom: ".5em" }}>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="SEARCH"
              className={classes.textField}
            />
          </form>
          <Typography
            variant="body2"
            style={{ marginBottom: "2em", marginTop: "1em", fontSize: ".8em" }}
          >
            {image && image.camera.full_name} | Earth Date:
            {solsToEarthDate(date)}
          </Typography>
        </Grid>
        {image ? (
          <img
            onClick={() => setCount(count + 1)}
            src={image.img_src}
            alt="rover from mars"
            style={{ height: "60vh" }}
          />
        ) : (
          "No Photos Are Available for that Martian Sol"
        )}
        {loading ? <img src={spinner} alt="loading" /> : <div></div>}
      </Grid>
    </React.Fragment>
  );
};

export default Images;
