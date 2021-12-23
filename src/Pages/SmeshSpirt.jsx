import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import SmeshSpirtCalcContainer from "../Components/Calcs/SmeshSpirt/SmeshSpirtCalcContainer";
import smeshSpirtaImg from "../assets/img/kalkulyator-smeshivaniya-spirtov.png";

const SmeshSpirt = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${smeshSpirtaImg}`,
          Title: "Калькулятор смешивания спиртов",
          Description:
            "Смешиваете две разных крепости? Узнайте сейчас какой градус будет на выходе!",
          Href: "kalkulyator-smeshivaniya-spirtov",
          titleSeo: "",
          descriptionSeo: "",
          urlSeo: "https://samogoncalc.ru/kalkulyator-smeshivaniya-spirtov/",
        }}
      />

      <div className="container mt-5">
        <p className="text-left mb-4">
          Тут про абсолютный спирт результаты будут правильными, если
          температура всех жидкостей 20°С.
        </p>
      </div>
      <SmeshSpirtCalcContainer />
      <Footer />
    </div>
  );
};

export default SmeshSpirt;
