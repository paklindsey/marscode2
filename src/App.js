import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";
import MarsInfo from "./components/MarsInfo";
import MarsInfoEmbed from "./components/MarsInfoEmbed";
import MarsInfo3 from "./components/MarsInfo3";
import NavBar from "./components/NavBar";
import Images from "./components/Images";
import ThreedMars from "./components/ThreedMars";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <div>
            <NavBar />
            <Route exact path="/marsinfo" component={MarsInfo} />
            <Route exact path="/marsinfoembed" component={MarsInfoEmbed} />
            <Route exact path="/marsinfo3" component={MarsInfo3} />
            <Route exact path="/marsphotos" component={Images} />
            <Route exact path="/3dmars" component={ThreedMars} />
          </div>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
