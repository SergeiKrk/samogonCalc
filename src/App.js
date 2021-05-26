import {
  BrowserRouter as Router,
  Switch,
  Route
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
import ProfilePage from "./Pages/ProfilePage";
import DialogPage from "./Pages/DialogPage";
import state, {addPost} from "./redux/state";

const App = (props) => {

  return (
    <div className="App">
      <Router>
        <NavbarMenu/>
          <Switch>
              <Route exact path="/" render={ () => <Home /> }/>
              <Route path="/kalkulyator-razbavleniya-samogona-vodoj" render={ () => <RazbavleniyaSamogona /> }/>
              <Route path="/kalkulyator-otbor-golov" render={ () => <OtborGolov /> }/>
              <Route path="/kalkulyator-drobnoj-peregonki" render={ () => <DrobnayaPeregonka /> }/>
              <Route path="/razbavlenie-samogona-vodoj-posle-pervoj-peregonki" render={ () => <PoslePervoj /> }/>
              <Route path="/razbavlenie-samogona-vodoj-posle-vtorogo-peregona" render={ () => <PosleVtoroj /> }/>
              <Route path="/kalkulyator-absolyutnogo-spirta" render={ () => <AbsolyutnijSpirt /> }/>
              <Route path="/kalkulyator-smeshivaniya-spirtov" render={ () => <SmeshSpirt /> }/>
              <Route path="/kalkulyator-sebestoimosti-samogona" render={ () => <SebestoimSamogona /> }/>
              <Route path="/kalkulyator-saharnoj-bragi" render={ () => <SaharBragi /> }/>
              <Route path="/kalkulyator-vodki-iz-spirta" render={ () => <Vodka /> }/>
              <Route path="/kalkulyator-spirta-ot-temperatury" render={ () => <SpirtaTemper /> }/>
              <Route path="/kalkulyator-zameny-sahara-glyukozoj" render={ () => <ZamenyGlyukozoj /> }/>
              <Route path="/about" render={ () => <About /> }/>
              <Route path="/profile" render={ () => <ProfilePage state={props.appState.profilePage} addPost={props.addPost} /> }/>
              <Route path="/dialogs" render={ () => <DialogPage state={props.appState.dialogPage} /> }/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
