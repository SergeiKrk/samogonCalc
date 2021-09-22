import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import PosleVtorojCalcContainer from "../Components/Calcs/PosleVtorojCalc/PosleVtorojCalcContainer";
import React from "react";

const PosleVtoroj = (props) => {
  return (
    <div>
      <HeaderBlock
        Href="razbavlenie-samogona-vodoj-posle-vtorogo-peregona"
        Img="https://samogoncalc.ru/img/razbavlenie-samogona-vodoj-posle-vtorogo-peregona.png"
        Title="Калькулятор разбавления самогона водой (после второго перегона)"
        Description="Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях!"
      />
      <PosleVtorojCalcContainer store={props.store} />
      <Footer />
    </div>
  );
};

export default PosleVtoroj;
