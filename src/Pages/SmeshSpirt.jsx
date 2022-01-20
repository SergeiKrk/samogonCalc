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
          Title: "Смешивание спиртов или самогона",
          Description:
            "Калькулятор смешивания спиртов разной крепости поможет узнать итоговую крепость по точной формуле",
          Href: "kalkulyator-smeshivaniya-spirtov",
          titleSeo:
            "Калькулятор смешивания спиртов (самогона / дистиллята) разной крепости",
          descriptionSeo:
            "Онлайн калькулятор смешивания спиртов (самогона) разной крепости поможет узнать итоговую крепость по точной формуле",
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
