import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import PoslePervojCalcContainer from "../Components/Calcs/PoslePervojCalc/PoslePervojCalcContainer";
import React from "react";
import poslePervojImg from "../assets/img/razbavlenie-samogona-vodoj-posle-pervoj-peregonki.png";

const PoslePervoj = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${poslePervojImg}`,
          Title:
            "Калькулятор разбавления самогона водой (после первого перегона)",
          Description: "Необходимо ",
          Href: "razbavlenie-samogona-vodoj-posle-pervoj-peregonki",
          titleSeo: "",
          descriptionSeo: "",
          urlSeo:
            "https://samogoncalc.ru/razbavlenie-samogona-vodoj-posle-pervoj-peregonki/",
        }}
      />

      <div className="container mt-5">
        <p className="text-left mb-4">
          После первой перегонки необходимо разбавить дистиллят. Важный момент —
          результаты будут правильными, если температура всех жидкостей 20°С.
        </p>
      </div>
      <PoslePervojCalcContainer />
      <Footer />
    </div>
  );
};

export default PoslePervoj;
