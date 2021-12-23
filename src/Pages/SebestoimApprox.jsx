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
          Title: "Калькулятор себестоимости самогона",
          Description:
            "Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла ",
          Href: "kalkulyator-sebestoimosti-samogona",
          titleSeo: "",
          descriptionSeo: "",
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
