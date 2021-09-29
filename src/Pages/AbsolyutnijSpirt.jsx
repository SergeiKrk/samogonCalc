import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import AbsolyutnijSpirtCalcContainer from "../Components/Calcs/AbsolyutnijSpirt/AbsolyutnijSpirtCalcContainer";

const AbsolyutnijSpirt = (props) => {
  return (
    <div>
      <HeaderBlock
        Href="kalkulyator-absolyutnogo-spirta"
        Img="https://samogoncalc.ru/img/kalkulyator-absolyutnogo-spirta.png"
        Title="Калькулятор абсолютного спирта"
        Description="Необходимо узнать, сколько абсолютного спирта в спирте сырце или в браге? Я помогу сделать расчет"
      />
      <AbsolyutnijSpirtCalcContainer store={props.store} />
      <Footer />
    </div>
  );
};

export default AbsolyutnijSpirt;
