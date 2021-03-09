import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarMenu from './Components/Header/NavbarMenu'
import Home from './Pages/Home'
import AbsolyutnijSpirt from './Pages/AbsolyutnijSpirt'
import DrobnayaPeregonka from './Pages/DrobnayaPeregonka';
import RazbavleniyaSamogona from './Pages/RazbavleniyaSamogona';
import OtborGolov from './Pages/OtborGolov';
import PoslePervoj from './Pages/PoslePervoj';
import PosleVtoroj from './Pages/PosleVtoroj';
import SmeshSpirt from './Pages/SmeshSpirt';
import SebestoimSamogona from './Pages/SebestoimSamogona';
import SaharBragi from './Pages/SaharBragi';
import Vodka from './Pages/Vodka';
import SpirtaTemper from './Pages/SpirtaTemper';
import ZamenyGlyukozoj from './Pages/ZamenyGlyukozoj';
import About from './Pages/About';
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavbarMenu/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/kalkulyator-razbavleniya-samogona-vodoj" component={RazbavleniyaSamogona}/>
              <Route path="/kalkulyator-otbor-golov" component={OtborGolov}/>
              <Route path="/kalkulyator-drobnoj-peregonki" component={DrobnayaPeregonka}/>
              <Route path="/razbavlenie-samogona-vodoj-posle-pervoj-peregonki" component={PoslePervoj}/>
              <Route path="/razbavlenie-samogona-vodoj-posle-vtorogo-peregona" component={PosleVtoroj}/>
              <Route path="/kalkulyator-absolyutnogo-spirta" component={AbsolyutnijSpirt}/>
              <Route path="/kalkulyator-smeshivaniya-spirtov" component={SmeshSpirt}/>
              <Route path="/kalkulyator-sebestoimosti-samogona" component={SebestoimSamogona}/>
              <Route path="/kalkulyator-saharnoj-bragi" component={SaharBragi}/>
              <Route path="/kalkulyator-vodki-iz-spirta" component={Vodka}/>
              <Route path="/kalkulyator-spirta-ot-temperatury" component={SpirtaTemper}/>
              <Route path="/kalkulyator-zameny-sahara-glyukozoj" component={ZamenyGlyukozoj}/>
              <Route path="/about" component={About}/>
              <Route path="/profile" component={Profile}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
