import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import TemperatureCalcContainer from "../Components/Calcs/Temperature/TemperatureCalcContainer";
import otTemperaturyImg from "../assets/img/kalkulyator-spirta-ot-temperatury.png";

const SpirtaTemper = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${otTemperaturyImg}`,
          Title: "Калькулятор спирта от температуры",
          Description:
            "Рассчитает реальную крепость самогона при температуре больше или меньше 20 °C.",
          Href: "kalkulyator-spirta-ot-temperatury",
          titleSeo: "",
          descriptionSeo: "",
          urlSeo: "https://samogoncalc.ru/kalkulyator-spirta-ot-temperatury/",
        }}
      />

      <div className="container mt-5">
        <p className="text-left mb-4">
          У Вас есть медицинский спирт или крепкий дистиллят (самогон) из
          которого хотите получить водку? Воспользуйтесь калькулятором водки,
          чтобы узнать, какой объем напитка получится после разбавления и
          сколько нужно добавить воды к имеющемуся объему спирта.
        </p>
      </div>
      <TemperatureCalcContainer />
      <Footer />
    </div>
  );
};

export default SpirtaTemper;
