import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import VodkaCalcContainer from "../Components/Calcs/Vodka/VodkaCalcContainer";
import vodkaImg from "../assets/img/kalkulyator-vodki-iz-spirta.png";

const Vodka = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${vodkaImg}`,
          Title: "Калькулятор водки из спирта",
          Description:
            "Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла.",
          Href: "kalkulyator-vodki-iz-spirta",
          titleSeo: "",
          descriptionSeo: "",
          urlSeo: "https://samogoncalc.ru/kalkulyator-vodki-iz-spirta/",
        }}
      />

      <div className="container mt-5">
        <p className="text-left mb-4">
          У Вас есть медицинский спирт, домашний ректификат или крепкий
          дистиллят (самогон) из которого хотите получить водку или настойку
          крепостью в 40°? Воспользуйтесь калькулятором водки, чтобы узнать,
          какой объем напитка получится после разбавления и сколько нужно
          добавить воды к имеющемуся объему спирта.
        </p>
      </div>
      <VodkaCalcContainer />
      <Footer />
    </div>
  );
};

export default Vodka;
