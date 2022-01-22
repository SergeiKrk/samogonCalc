import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import AbsolyutnijSpirtCalcContainer from "../Components/Calcs/AbsolyutnijSpirt/AbsolyutnijSpirtCalcContainer";
import absSpirtImg from "../assets/img/kalkulyator-absolyutnogo-spirta.png";

const AbsolyutnijSpirt = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${absSpirtImg}`,
          Title: "Расчет абсолютного и чистого спирта",
          Description:
            "Необходимо узнать, сколько абсолютного спирта в спирте сырце или в браге? Я помогу сделать расчет",
          Href: "kalkulyator-absolyutnogo-spirta",
          titleSeo: "Калькулятор абсолютного и чистого спирта",
          descriptionSeo:
            "Онлайн калькулятор точно рассчитает объем абсолютного и чистого спирта в браге или спирте сырце",
          urlSeo: "https://samogoncalc.ru/kalkulyator-absolyutnogo-spirta/",
        }}
      />

      <div className="container mt-5">
        <p className="text-left mb-4">
          Тут про абсолютный спирт результаты будут правильными, если
          температура всех жидкостей 20°С.
        </p>
      </div>
      <AbsolyutnijSpirtCalcContainer />
      <Footer />
    </div>
  );
};

export default AbsolyutnijSpirt;
