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
import Profile from "./Pages/Profile";
import Dialog from "./Pages/Dialog";

const App = (props) => {

    /*let dialogsData = [
        {id: 1, userName: 'Tolya'},
        {id: 2, userName: 'Gosha'},
        {id: 3, userName: 'Kolya'},
        {id: 4, userName: 'Sasha'},
        {id: 5, userName: 'Pasha'}
    ]

    let massageData = [
        {id:1, userAva:'https://samogoncalc.ru/img/Ava.jpg', userName:'Admin Tolya', massage:'Ba-Ra-Ga-Be-De!'},
        {id:2, userAva:'https://samogoncalc.ru/img/Yura.jpg', userName:'Yura', massage:'Bambarbiya, Kergudu.'},
        {id:3, userAva:'https://samogoncalc.ru/img/Gosha.jpg', userName:'Gosha', massage:'Where is Grandma?'}
    ]

    let profileinfoData = [
        {id: 1, img: 'https://samogoncalc.ru/img/Ava.jpg', title: 'Админ Евгений', description: 'Я тут админ!'}
    ]

    let postsData = [
        {id: 1, userName: 'Админ Евгений', MyMassagePost: 'My first post My first post My first post My first post'},
        {id: 2, userName: 'Админ Евгений', MyMassagePost: 'My twwfwv mfav;mda;flvm adfm;advmdav  adflmvfavmkfvfv'},
        {id: 3, userName: 'Админ Евгений', MyMassagePost: 'My fadfvad fadvda afvadva'},
    ]*/

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
              <Route path="/profile" render={ () => <Profile profileinfoData={props.profileinfoData} postsData={props.postsData} /> }/>
              <Route path="/dialogs" render={ () => <Dialog dialogsData={props.dialogsData} massageData={props.massageData} /> }/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
