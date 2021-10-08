import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import SebestoimostCalc from "../Components/Calcs/Sebestoimost/SebestoimostCalc";
import SebestoimostCalcContainer from "../Components/Calcs/Sebestoimost/SebestoimostCalcContainer";

const SebestoimSamogona = (props) => {
  return (
    <div>
      <HeaderBlock
        Href="kalkulyator-sebestoimosti-samogona"
        Img="https://samogoncalc.ru/img/kalkulyator-sebestoimosti-samogona.png"
        Title="Калькулятор себестоимости самогона"
        Description="Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла."
      />
      <SebestoimostCalcContainer />
      <Footer />
    </div>
  );
};

export default SebestoimSamogona;
