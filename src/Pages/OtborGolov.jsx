import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import OtborGolovCalcContainer from "../Components/Calcs/OtborGolovCalc/OtborGolovCalcContainer";
import DisqusBlock from "../Components/Header/DisqusBlock";
import React from "react";

const OtborGolov = (props) => {
  return (
    <div>
      <HeaderBlock
        Href='kalkulyator-otbor-golov'
        Img='https://samogoncalc.ru/img/kalkulyator-otbor-golov.png'
        Title='Калькулятор отбор голов'
        Description='Рассчитает объем чистого спирта в полученном дистилляте и объем вредных «голов» в спирте первой перегонки.'
      />
        <OtborGolovCalcContainer store={props.store} />
        <DisqusBlock />
        <Footer />
    </div>
  );
}

export default OtborGolov;