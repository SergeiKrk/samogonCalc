import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import React from "react";
import drobnImg from "../assets/img/kalkulyator-drobnoj-peregonki.png";
import DrobnayaPeregonkaCalcContainer from "../Components/Calcs/DrobnayaPeregonka/DrobnayaPeregonkaCalcContainer";

const DrobnayaPeregonka = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${drobnImg}`,
          Title: "Калькулятор дробной перегонки спирта-сырца",
          Description:
            "Хотите начать дробную перегонку? Я помогу отобрать головы и хвосты!",
          Href: "kalkulyator-drobnoj-peregonki",
          titleSeo:
            "Калькулятор дробной (второй) перегонки спирта-сырца: Онлайн расчет",
          descriptionSeo:
            "Онлайн калькулятор быстро и точно рассчитает параметры дробной (второй) перегонки, подскажет как развести самогон (дистиллята) водой. Поможет рассчитать объем хвостов и голов.",
          urlSeo: "https://samogoncalc.ru/kalkulyator-drobnoj-peregonki/",
        }}
      />
      <div className="container text-left">
        <br />
        <p>
          Нужно разбавить спирт или дистиллят до конкретной крепости? Наш
          быстрый онлайн калькулятор разбавления самогона водой поможет.
        </p>
        <p>
          В онлайн режиме он поможет подобрать пропорции воды и самогона. Нужно
          лишь вписать в программу 3 параметра: первоначальный объем, крепость
          самогона и требуемую крепость. Калькулятор мгновенно произведет нужные
          расчеты и выдаст результат. Например: у вас есть 5 литров сортировки
          крепостью 62%, вам нужно разбавить ее до 40%. Заполнив 3 поля в онлайн
          калькуляторы, мы видим результат: необходимо долить 2,75 литров воды.
          Важный момент — результаты будут правильными, если температура всех
          жидкостей 20°С.
        </p>
        <br />
      </div>
      <DrobnayaPeregonkaCalcContainer />
      <Footer />
    </div>
  );
};

export default DrobnayaPeregonka;
