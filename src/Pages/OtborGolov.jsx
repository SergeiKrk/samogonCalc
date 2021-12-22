import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import OtborGolovCalcContainer from "../Components/Calcs/OtborGolovCalc/OtborGolovCalcContainer";
import DisqusBlock from "../Components/Header/DisqusBlock";
import React from "react";
import otborGolovImg from "../assets/img/kalkulyator-otbor-golov.png";

const OtborGolov = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${otborGolovImg}`,
          Title: "Расчет отбора голов",
          Description:
            "Рассчитает объем чистого спирта в полученном дистилляте и объем вредных «голов» в спирте первой перегонки.",
          Href: "kalkulyator-otbor-golov",
          titleSeo: "Калькулятор отбора голов: онлайн расчет сколько отбирать",
          descriptionSeo:
            "Онлайн калькулятор поможет рассчитать объем голов быстро и точно. Для этого нужно ввестиследующие значения: Объем спирта-сырца и Крепость перегоняемого самогона.",
          urlSeo: "https://samogoncalc.ru/kalkulyator-otbor-golov/",
        }}
      />
      <div className="container">
        <br />
        <p>
          Чтобы разбавить дистиллят до нужной крепости, воспользуйтесь
          калькулятором разбавления самогона водой. В онлайн режиме он поможет
          подобрать пропорции воды и самогона. Нужно лишь вписать в программу 3
          параметра: первоначальный объем, крепость самогона и требуемую
          крепость. Калькулятор мгновенно произведет нужные расчеты и выдаст
          результат. Например: у вас есть 5 литров сортировки крепостью 62%, вам
          нужно разбавить ее до 40%. Заполнив 3 поля в онлайн калькуляторы, мы
          видим результат: необходимо долить 2,75 литров воды. Важный момент —
          результаты будут правильными, если температура всех жидкостей 20°С.
        </p>
        <br />
      </div>
      <OtborGolovCalcContainer store={props.store} />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default OtborGolov;
