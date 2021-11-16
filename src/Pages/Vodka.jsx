import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import VodkaCalcContainer from "../Components/Calcs/Vodka/VodkaCalcContainer";

const Vodka = (props) => {
  return (
    <div>
      <HeaderBlock
        Href="kalkulyator-vodki-iz-spirta"
        Img="https://samogoncalc.ru/img/kalkulyator-vodki-iz-spirta.png"
        Title="Калькулятор водки из спирта"
        Description="Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла."
      />
      <VodkaCalcContainer store={props.store} />
      <Footer />
    </div>
  );
};

export default Vodka;
