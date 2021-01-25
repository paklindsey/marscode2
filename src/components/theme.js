import { createMuiTheme } from "@material-ui/core/styles";

// const colorOne = "#C3A789";
// const colorTwo = "#D8DDE7";
// const colorThree = "#EFE9E4";
// const colorFour = "#D1C9B3";
// const colorWhite = "#fff";

export default createMuiTheme({
  //   palette: {
  //     common: {
  //       colorOne: colorOne,
  //       colorTwo: colorTwo,
  //       colorThree: colorThree,
  //       colorFour: colorFour,
  //       colorWhite: colorWhite,
  //     },
  //     primary: {
  //       main: colorOne,
  //     },
  //     secondary: {
  //       main: colorTwo,
  //     },
  //   },
  typography: {
    h1: {
      fontFamily: "Montserrat",
      fontWeight: 800,
      letterSpacing: 20,
      fontSize: "5em",
    },
    body1: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      letterSpacing: 5,
      fontSize: "1em",
    },
    body2: {
      fontSize: ".8em",
      fontWeight: 400,
      fontFamily: "Lato",
      letterSpacing: 3,
    },
  },
  breakpoints: {
    values: {
      ml: 1720,
    },
  },
});
