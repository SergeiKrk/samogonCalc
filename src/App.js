import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarMenu from "./Components/Header/NavbarMenu";
import Home from "./Pages/Home/Home";
import AbsolyutnijSpirt from "./Pages/AbsolyutnijSpirt";
import DrobnayaPeregonka from "./Pages/DrobnayaPeregonka";
import RazbavleniyaSamogona from "./Pages/RazbavleniyaSamogona";
import OtborGolov from "./Pages/OtborGolov";
import PoslePervoj from "./Pages/PoslePervoj";
import PosleVtoroj from "./Pages/PosleVtoroj";
import SmeshSpirt from "./Pages/SmeshSpirt";
import SebestoimSamogona from "./Pages/SebestoimSamogona";
import SebestoimApprox from "./Pages/SebestoimApprox";
import SaharBragi from "./Pages/SaharBragi";
import Vodka from "./Pages/Vodka";
import SpirtaTemper from "./Pages/SpirtaTemper";
import ZamenyGlyukozoj from "./Pages/ZamenyGlyukozoj";
import About from "./Pages/About";
import store from "./redux/redux-store";

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
            render={() => <RazbavleniyaSamogona store={store} />}
          />
          <Route
            path="/kalkulyator-otbor-golov"
            render={() => <OtborGolov store={store} />}
          />
          <Route
            path="/kalkulyator-drobnoj-peregonki"
            render={() => <DrobnayaPeregonka store={store} />}
          />
          <Route
            path="/razbavlenie-samogona-vodoj-posle-pervoj-peregonki"
            render={() => <PoslePervoj store={store} />}
          />
          <Route
            path="/razbavlenie-samogona-vodoj-posle-vtorogo-peregona"
            render={() => <PosleVtoroj store={store} />}
          />
          <Route
            path="/kalkulyator-absolyutnogo-spirta"
            render={() => <AbsolyutnijSpirt store={store} />}
          />
          <Route
            path="/kalkulyator-smeshivaniya-spirtov"
            render={() => <SmeshSpirt store={store} />}
          />
          <Route
            path="/kalkulyator-sebestoimosti-samogona"
            render={() => <SebestoimSamogona store={store} />}
          />
          <Route
            path="/primernaya-stoimost-samogona"
            render={() => <SebestoimApprox store={store} />}
          />
          <Route
            path="/kalkulyator-saharnoj-bragi"
            render={() => <SaharBragi store={store} />}
          />
          <Route
            path="/kalkulyator-vodki-iz-spirta"
            render={() => <Vodka store={store} />}
          />
          <Route
            path="/kalkulyator-spirta-ot-temperatury"
            render={() => <SpirtaTemper store={store} />}
          />
          <Route
            path="/kalkulyator-zameny-sahara-glyukozoj"
            render={() => <ZamenyGlyukozoj store={store} />}
          />
          <Route path="/about" render={() => <About />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
