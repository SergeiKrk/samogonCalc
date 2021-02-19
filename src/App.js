import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
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

const App = () => {
  return (
    <div className="App">
      <NavbarMenu/>
      <Router>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/kalkulyator-razbavleniya-samogona-vodoj" component={RazbavleniyaSamogona}/>
              <Route exact path="/kalkulyator-otbor-golov" component={OtborGolov}/>
              <Route exact path="/kalkulyator-drobnoj-peregonki" component={DrobnayaPeregonka}/>
              <Route exact path="/razbavlenie-samogona-vodoj-posle-pervoj-peregonki" component={PoslePervoj}/>
              <Route exact path="/razbavlenie-samogona-vodoj-posle-vtorogo-peregona" component={PosleVtoroj}/>
              <Route exact path="/kalkulyator-absolyutnogo-spirta" component={AbsolyutnijSpirt}/>
              <Route exact path="/kalkulyator-smeshivaniya-spirtov" component={SmeshSpirt}/>
              <Route exact path="/kalkulyator-sebestoimosti-samogona" component={SebestoimSamogona}/>
              <Route exact path="/kalkulyator-saharnoj-bragi" component={SaharBragi}/>
              <Route exact path="/kalkulyator-vodki-iz-spirta" component={Vodka}/>
              <Route exact path="/kalkulyator-spirta-ot-temperatury" component={SpirtaTemper}/>
              <Route exact path="/kalkulyator-zameny-sahara-glyukozoj" component={ZamenyGlyukozoj}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
