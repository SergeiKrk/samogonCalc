import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import SebestoimostCalcContainer from "../Components/Calcs/Sebestoimost/SebestoimostCalcContainer";
import SebestoimApproxCalcContainer from "../Components/Calcs/SebestoimApprox/SebestoimApproxCalcContainer";
import sebestoimostImg from "../assets/img/kalkulyator-sebestoimosti-samogona.png";

const SebestoimSamogona = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${sebestoimostImg}`,
          Title: "Расчет себестоимости самогона",
          Description:
            "Поможет оценить стоимость самогона, если Ваш дистиллят уже готов и вы хотите посчитать его себестоимость",
          Href: "kalkulyator-sebestoimosti-samogona",
          titleSeo: "Калькулятор себестоимости самогона",
          descriptionSeo: "Калькулятор поможет рассчитать онлайн себестоимость уже готового дистиллята, исходя из массы и стоимости сырья и объема готового самогона",
          urlSeo: "https://samogoncalc.ru/kalkulyator-sebestoimosti-samogona/",
        }}
      />

      <div className="container mt-5">
        <p className="text-left mb-4">трам пам</p>
      </div>
      <SebestoimostCalcContainer />
      <div className="container mt-5">
        <p className="text-left mb-4">трам пам</p>
      </div>
      <SebestoimApproxCalcContainer />
      <Footer />
    </div>
  );
};

export default SebestoimSamogona;
