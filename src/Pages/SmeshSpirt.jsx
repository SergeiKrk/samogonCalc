import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import SmeshSpirtCalcContainer from "../Components/Calcs/SmeshSpirt/SmeshSpirtCalcContainer";

const SmeshSpirt = (props) => {
  return (
    <div>
      <HeaderBlock
        Href="kalkulyator-smeshivaniya-spirtov"
        Img="https://samogoncalc.ru/img/kalkulyator-smeshivaniya-spirtov.png"
        Title="Калькулятор смешивания спиртов"
        Description="Смешиваете две разных крепости? Узнайте сейчас какой градус будет на выходе!"
      />
      - SmeshSpirt
      <SmeshSpirtCalcContainer store={props.store} />
      <Footer />
    </div>
  );
};

export default SmeshSpirt;
