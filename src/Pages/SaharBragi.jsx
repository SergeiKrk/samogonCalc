import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import BragaCalcContainer from "../Components/Calcs/Braga/BragaCalcContainer";
import bragaImg from "../assets/img/kalkulyator-saharnoj-bragi.png";

const SaharBragi = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${bragaImg}`,
          Title: "Калькулятор браги",
          Description:
            "Вычисляет крепость сахарной или зерновой браги, потенциальный выход спирта цырца, а так же необходимое количество воды для затора, исходя из количества сырья (сахара, зерна, муки или крупы).",
          Href: "kalkulyator-saharnoj-bragi",
          titleSeo: "",
          descriptionSeo: "",
          urlSeo: "https://samogoncalc.ru/kalkulyator-saharnoj-bragi/",
        }}
      />

      <div className="container mt-5">
        <p className="text-left mb-4">Трам-пам-пам...</p>
      </div>

      <BragaCalcContainer />
      <Footer />
    </div>
  );
};

export default SaharBragi;
