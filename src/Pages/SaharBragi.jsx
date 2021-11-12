import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import BragaCalcContainer from "../Components/Calcs/Braga/BragaCalcContainer";

const SaharBragi = (props) => {
  return (
    <div>
      <HeaderBlock
        Href="kalkulyator-saharnoj-bragi"
        Img="https://samogoncalc.ru/img/kalkulyator-saharnoj-bragi.png"
        Title="Калькулятор браги"
        Description="Вычисляет крепость сахарной или зерновой браги, потенциальный выход спирта цырца, а так же необходимое количество воды для затора, исходя из количества сырья (сахара, зерна, муки или крупы)."
      />

      <BragaCalcContainer store={props.store} />
      <Footer />
    </div>
  );
};

export default SaharBragi;
