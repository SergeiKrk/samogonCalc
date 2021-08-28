import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import DisqusBlock from "../Components/Header/DisqusBlock";
import React from "react";
import {Helmet} from "react-helmet";
import DrobnayaPeregonkaCalc from "../Components/Calcs/DrobnayaPeregonka/DrobnayaPeregonkaCalc";
import DrobnayaPeregonkaCalcContainer from "../Components/Calcs/DrobnayaPeregonka/DrobnayaPeregonkaCalcContainer";

const DrobnayaPeregonka = (props) => {
  return (
    <div>
      <Helmet>
        <title>Калькулятор дробной перегонки спирта-сырца</title>
      </Helmet>
        <HeaderBlock
        Href='kalkulyator-drobnoj-peregonki'
        Img='https://samogoncalc.ru/img/kalkulyator-drobnoj-peregonki.png'
        Title='Калькулятор дробной перегонки спирта-сырца'
        Description='Хотите начать дробную перегонку? Я помогу отобрать головы и хвосты!'
      />
        <DrobnayaPeregonkaCalcContainer store={props.store} />
        <DisqusBlock />
        <Footer />
    </div>
  );
}

export default DrobnayaPeregonka;