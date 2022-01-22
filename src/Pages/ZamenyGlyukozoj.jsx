import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import ZamenaCalcContainer from "../Components/Calcs/Zamena/ZamenaCalcContainer";
import zamenaSaharaImg from "../assets/img/kalkulyator-zameny-sahara-glyukozoj.png";

const ZamenyGlyukozoj = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${zamenaSaharaImg}`,
          Title: "Расчет замены сахара декстрозой (глюкозой)",
          Description:
            "Определяет насколько меньше потребуется глюкозы, чтобы выход спирта из браги был как с 1 кг обычного сахара",
          Href: "kalkulyator-zameny-sahara-glyukozoj",
          titleSeo: "Калькулятор замены сахара глюкозой",
          descriptionSeo:
            "Онлайн калькулятор рассчитает насколько меньше потребуется глюкозы, чтобы выход спирта из браги был как из сахара",
          urlSeo: "https://samogoncalc.ru/kalkulyator-zameny-sahara-glyukozoj/",
        }}
      />

      <div className="container mt-5">
        <p className="text-left mb-4">
          Вы хотите полоучить более качественный дистилят, чем получали раньше
          из обычного сахара? У Вас есть глюкоза или декстроза, но вы не знаете
          сколько глюкозы понадобится, чтобы выход спирта из браги был как с 1
          кг обычного сахара? Воспользуйтесь калькулятором ЗАМЕНЫ САХАРА
          ГЛЮКОЗОЙ, чтобы узнать.
        </p>
      </div>
      <ZamenaCalcContainer />
      <Footer />
    </div>
  );
};

export default ZamenyGlyukozoj;
