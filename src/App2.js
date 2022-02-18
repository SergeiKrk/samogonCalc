import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";
import NavbarMenu from "./Components/Header/NavbarMenu";
import TagManager from "react-gtm-module";
import Home from "./Pages/Home/Home";
import AbsolyutnijSpirt from "./Pages/AbsolyutnijSpirt";
import DrobnayaPeregonka from "./Pages/DrobnayaPeregonka";
import RazbavleniyaSamogona from "./Pages/RazbavleniyaSamogona";
import OtborGolov from "./Pages/OtborGolov";
import PoslePervoj from "./Pages/PoslePervoj";
import SmeshSpirt from "./Pages/SmeshSpirt";
import SebestoimSamogona from "./Pages/SebestoimSamogona";
import SebestoimApprox from "./Pages/SebestoimApprox";
import SaharBragi from "./Pages/SaharBragi";
import Vodka from "./Pages/Vodka";
import SpirtaTemper from "./Pages/SpirtaTemper";
import ZamenyGlyukozoj from "./Pages/ZamenyGlyukozoj";
import About from "./Pages/About";
import NotFound404 from "./Pages/NotFound404";

const tagManagerArgs = {
  gtmId: "GTM-MDC575K",
};

TagManager.initialize(tagManagerArgs);

const App = (props) => {
  //
  return (
    <div className="App">
      <Router>
        <NavbarMenu />
        <Switch>
          <Route exact path="/" render={() => <Home store={store} />} />
          <Route
            path="/kalkulyator-razbavleniya-samogona-vodoj"
            render={withSuspense(RazbavleniyaSamogona)}
          />
          <Route
            path="/kalkulyator-otbor-golov"
            render={withSuspense(OtborGolov)}
          />
          <Route
            path="/kalkulyator-drobnoj-peregonki"
            render={withSuspense(DrobnayaPeregonka)}
          />
          <Route
            path="/razbavlenie-samogona-vodoj-posle-pervoj-peregonki"
            render={withSuspense(PoslePervoj)}
          />
          <Route
            path="/kalkulyator-absolyutnogo-spirta"
            render={withSuspense(AbsolyutnijSpirt)}
          />
          <Route
            path="/kalkulyator-smeshivaniya-spirtov"
            render={withSuspense(SmeshSpirt)}
          />
          <Route
            path="/kalkulyator-sebestoimosti-samogona"
            render={withSuspense(SebestoimSamogona)}
          />
          <Route
            path="/primernaya-stoimost-samogona"
            render={withSuspense(SebestoimApprox)}
          />
          <Route
            path="/kalkulyator-saharnoj-bragi"
            render={withSuspense(SaharBragi)}
          />
          <Route
            path="/kalkulyator-vodki-iz-spirta"
            render={withSuspense(Vodka)}
          />
          <Route
            path="/kalkulyator-spirta-ot-temperatury"
            render={withSuspense(SpirtaTemper)}
          />
          <Route
            path="/kalkulyator-zameny-sahara-glyukozoj"
            render={withSuspense(ZamenyGlyukozoj)}
          />
          <Route path="/about" render={withSuspense(About)} />
          <Route render={withSuspense(NotFound404)} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
