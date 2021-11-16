import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import ZamenaCalcContainer from "../Components/Calcs/Zamena/ZamenaCalcContainer";

const ZamenyGlyukozoj = (props) => {
  return (
    <div>
      <HeaderBlock
        Href="kalkulyator-zameny-sahara-glyukozoj"
        Img="https://samogoncalc.ru/img/kalkulyator-zameny-sahara-glyukozoj.png"
        Title="Калькулятор замены сахара глюкозой"
        Description="Определяет насколько меньше потребуется глюкозы, чтобы выход спирта из браги был как с 1 кг обычного сахара."
      />
      <ZamenaCalcContainer />
      <Footer />
    </div>
  );
};

export default ZamenyGlyukozoj;
