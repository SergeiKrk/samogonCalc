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
          Title: "Коррекция спирта по температуре",
          Description:
            "Рассчитает реальную крепость самогона (дистиллята) при температуре отличной от 20 °C.",
          Href: "kalkulyator-spirta-ot-temperatury",
          titleSeo: "Калькулятор крепости самогона (спирта) от температуры",
          descriptionSeo:
            "Онлайн калькулятор поможет скорректировать крепость самогона в зависимости от температуры дистиллята",
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
