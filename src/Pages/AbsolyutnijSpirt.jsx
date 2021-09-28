import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";

const AbsolyutnijSpirt = (props) => {
  return (
    <div>
      <HeaderBlock
        Href="kalkulyator-absolyutnogo-spirta"
        Img="https://samogoncalc.ru/img/kalkulyator-absolyutnogo-spirta.png"
        Title="Калькулятор разбавления самогона водой"
        Description="Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях"
      />
      - Калькулятор разбавления самогона водой -
      <Footer />
    </div>
  );
};

export default AbsolyutnijSpirt;
