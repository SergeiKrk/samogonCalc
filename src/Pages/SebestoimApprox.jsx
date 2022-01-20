import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import SebestoimApproxCalcContainer from "../Components/Calcs/SebestoimApprox/SebestoimApproxCalcContainer";
import sebestoimostAprImg from "../assets/img/kalkulyator-sebestoimosti-samogona.png";

const SebestoimApprox = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${sebestoimostAprImg}`,
          Title: "Расчет стоимости будущего самогона",
          Description:
            "Калькулятор поможет рассчитать примерную стоимость сахарного и зернового дистиллята, исходя из массы и стоимости сырья",
          Href: "kalkulyator-sebestoimosti-samogona",
          titleSeo: "Калькулятор стоимости самогона (сахарного / зернового)",
          descriptionSeo:
            "Калькулятор поможет рассчитать онлайн стоимость будущего сахарного и зернового дистиллята (самогона), исходя из массы и стоимости сырья.",
          urlSeo: "https://samogoncalc.ru/kalkulyator-sebestoimosti-samogona/",
        }}
      />

      <div className="container mt-5">
        <p className="text-left mb-4">тра-та-та</p>
      </div>
      <SebestoimApproxCalcContainer />
      <Footer />
    </div>
  );
};

export default SebestoimApprox;
