import React from "react";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";

import logo from "../assets/logo.png";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "4em",
  },
  appbar: {
    backgroundColor: "transparent",
    height: "5em",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "none",
  },
  logo: {
    height: "3em",
  },
  tab: {
    marginLeft: "2em",
    marginRight: "2em",
    color: "#000000",
    fontFamily: "Montserrat",
    fontWeight: 700,
    letterSpacing: 2,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <AppBar className={classes.appbar}>
        <Grid alignItems="center" justify="center">
          <Toolbar>
            <Tabs>
              <Tab
                component={Link}
                to="/marsinfo"
                label="WEATHER"
                className={classes.tab}
              />
              <Button component={Link} to="/" disableRipple>
                <img src={logo} alt="mars text" className={classes.logo} />
              </Button>
              <Tab
                component={Link}
                to="/marsphotos"
                label="PHOTOS"
                className={classes.tab}
              />
            </Tabs>
          </Toolbar>
        </Grid>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default NavBar;
