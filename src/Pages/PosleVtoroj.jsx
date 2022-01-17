import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import PosleVtorojCalcContainer from "../Components/Calcs/PosleVtorojCalc/PosleVtorojCalcContainer";
import React from "react";
import posleVtorojImg from "../assets/img/razbavlenie-samogona-vodoj-posle-vtorogo-peregona.png";

const PosleVtoroj = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${posleVtorojImg}`,
          Title: "Расчет разбавления самогона водой (после второго перегона)",
          Description:
            "Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях!",
          Href: "razbavlenie-samogona-vodoj-posle-vtorogo-peregona",
          titleSeo:
            "Калькулятор самогонщика: разбавление самогона водой после второй перегонки",
          descriptionSeo:
            "Онлайн-калькулятор подскажет как развести самогон (дистиллята) водой после второго перегона",
          urlSeo:
            "https://samogoncalc.ru/razbavlenie-samogona-vodoj-posle-vtorogo-peregona/",
        }}
      />

      <div className="container mt-5">
        <p className="text-left mb-4">Чтобы трам-пам-пам...</p>
      </div>
      <PosleVtorojCalcContainer store={props.store} />
      <Footer />
    </div>
  );
};

export default PosleVtoroj;
