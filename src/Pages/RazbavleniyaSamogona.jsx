import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
// import DisqusBlock from "../Components/Header/DisqusBlock";
import React from "react";
import RazbavleniyaSamogonaCalcContainer from "../Components/Calcs/RazbavleniyaSamogonaCalc/RazbavleniyaSamogonaCalcContainer";
import razbavVodoi from "../assets/img/kalkulyator-razbavleniya-samogona-vodoj.png";
const DisqusBlock = React.lazy(() =>
  import("../Components/Header/DisqusBlock")
);

const RazbavleniyaSamogona = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${razbavVodoi}`,
          Title: "Расчет разбавления самогона водой",
          Description:
            "Необходимо смешать дистиллят или спирт с водой? Я помогу смешать в нужных пропорциях",
          Href: "kalkulyator-razbavleniya-samogona-vodoj",
          titleSeo:
            "Калькулятор разбавления самогона (спирта) водой: Онлайн расчет",
          descriptionSeo:
            "Онлайн калькулятор по точной формуле рассчитает сколько требуется налить воды для получения спирта (самогона) требуемой крепости.",
          urlSeo:
            "https://samogoncalc.ru/kalkulyator-razbavleniya-samogona-vodoj/",
        }}
      />

      <div className="container">
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
      <RazbavleniyaSamogonaCalcContainer store={props.store} />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default RazbavleniyaSamogona;
