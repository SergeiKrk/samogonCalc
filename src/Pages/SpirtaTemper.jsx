import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import TemperatureCalcContainer from "../Components/Calcs/Temperature/TemperatureCalcContainer";

const SpirtaTemper = (props) => {
  return (
    <div>
      <HeaderBlock
        Href="kalkulyator-spirta-ot-temperatury"
        Img="https://samogoncalc.ru/img/kalkulyator-spirta-ot-temperatury.png"
        Title="Калькулятор спирта от температуры"
        Description="Рассчитает реальную крепость самогона при температуре больше или меньше 20 °C."
      />
      <TemperatureCalcContainer store={props.store} />
      <Footer />
    </div>
  );
};

export default SpirtaTemper;
