import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import SebestoimApproxCalcContainer from "../Components/Calcs/SebestoimApprox/SebestoimApproxCalcContainer";

const SebestoimApprox = (props) => {
  return (
    <div>
      <HeaderBlock
        Href="kalkulyator-sebestoimosti-samogona"
        Img="https://samogoncalc.ru/img/kalkulyator-sebestoimosti-samogona.png"
        Title="Калькулятор себестоимости самогона"
        Description="Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла."
      />
      <SebestoimApproxCalcContainer store={props.store} />
      <Footer />
    </div>
  );
};

export default SebestoimApprox;
