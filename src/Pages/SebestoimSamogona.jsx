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
          Title: "Калькулятор себестоимости самогона",
          Description:
            "Я помогу оценить стоимость самогона, если Ваш дистиллят уже готов и вы хотите посчитать его себестоимость, но не знаете как или просто хотите усорить процесс рассчета.",
          Href: "kalkulyator-sebestoimosti-samogona",
          titleSeo: "",
          descriptionSeo: "",
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
