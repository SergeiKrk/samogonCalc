import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";
import NavbarMenu from "./Components/Header/NavbarMenu";
import Home from "./Pages/Home/Home";
import TagManager from "react-gtm-module";

const AbsolyutnijSpirt = React.lazy(() => import("./Pages/AbsolyutnijSpirt"));
const DrobnayaPeregonka = React.lazy(() => import("./Pages/DrobnayaPeregonka"));
const RazbavleniyaSamogona = React.lazy(() =>
  import("./Pages/RazbavleniyaSamogona")
);
const OtborGolov = React.lazy(() => import("./Pages/OtborGolov"));
const PoslePervoj = React.lazy(() => import("./Pages/PoslePervoj"));
const SmeshSpirt = React.lazy(() => import("./Pages/SmeshSpirt"));
const SebestoimSamogona = React.lazy(() => import("./Pages/SebestoimSamogona"));
const SebestoimApprox = React.lazy(() => import("./Pages/SebestoimApprox"));
const SaharBragi = React.lazy(() => import("./Pages/SaharBragi"));
const Vodka = React.lazy(() => import("./Pages/Vodka"));
const SpirtaTemper = React.lazy(() => import("./Pages/SpirtaTemper"));
const ZamenyGlyukozoj = React.lazy(() => import("./Pages/ZamenyGlyukozoj"));
const About = React.lazy(() => import("./Pages/About"));
const Blog = React.lazy(() => import("./Pages/Blog"));
const NotFound404 = React.lazy(() => import("./Pages/NotFound404"));

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
            path="/kalkulyator-razbavleniya-samogona-vodoj/"
            render={withSuspense(RazbavleniyaSamogona)}
          />
          <Route
            path="/kalkulyator-otbor-golov/"
            render={withSuspense(OtborGolov)}
          />
          <Route
            path="/kalkulyator-drobnoj-peregonki"
            render={withSuspense(DrobnayaPeregonka)}
          />
          <Route
            path="/razbavlenie-samogona-vodoj-posle-pervoj-peregonki/"
            render={withSuspense(PoslePervoj)}
          />
          <Route
            path="/kalkulyator-absolyutnogo-spirta/"
            render={withSuspense(AbsolyutnijSpirt)}
          />
          <Route
            path="/kalkulyator-smeshivaniya-spirtov/"
            render={withSuspense(SmeshSpirt)}
          />
          <Route
            path="/kalkulyator-sebestoimosti-samogona/"
            render={withSuspense(SebestoimSamogona)}
          />
          <Route
            path="/primernaya-stoimost-samogona/"
            render={withSuspense(SebestoimApprox)}
          />
          <Route
            path="/kalkulyator-saharnoj-bragi/"
            render={withSuspense(SaharBragi)}
          />
          <Route
            path="/kalkulyator-vodki-iz-spirta/"
            render={withSuspense(Vodka)}
          />
          <Route
            path="/kalkulyator-spirta-ot-temperatury/"
            render={withSuspense(SpirtaTemper)}
          />
          <Route
            path="/kalkulyator-zameny-sahara-glyukozoj/"
            render={withSuspense(ZamenyGlyukozoj)}
          />
          <Route path="/about/" render={withSuspense(About)} />
          <Route path="/blog/" render={withSuspense(Blog)} />
          <Route exact patch="/404/" render={withSuspense(NotFound404)} />
          <Route path="*" render={withSuspense(NotFound404)} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
