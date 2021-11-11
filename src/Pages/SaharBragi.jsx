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
        Title="Калькулятор сахарной браги"
        Description="Вычисляет крепость браги, потенциальный выход спирта цырца, а так же оптимальные пропорции сахара и воды."
      />

      <BragaCalcContainer store={props.store} />
      <Footer />
    </div>
  );
};

export default SaharBragi;
