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
      {/* <HeaderBlock
        Href="kalkulyator-razbavleniya-samogona-vodoj"
        Img="https://samogoncalc.ru/img/kalkulyator-razbavleniya-samogona-vodoj.png"
        Title="Калькулятор разбавления самогона водой"
        Description="Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях"
      /> */}
      <HeaderBlock
        HeaderBlock={{
          Img: `${razbavVodoi}`,
          Title: "Калькулятор разбавления самогона водой",
          Description:
            "Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях",
          Href: "kalkulyator-razbavleniya-samogona-vodoj",
          titleSeo:
            "Калькулятор разбавления самогона (спирта) водой: Онлайн расчет",
          descriptionSeo:
            "Онлайн калькулятор по точной формуле рассчитает сколько требуется налить воды для получения спирта (самогона) требуемой крепости.",
          urlSeo:
            "https://samogoncalc.ru/kalkulyator-razbavleniya-samogona-vodoj/",
        }}
      />

      <br />
      <RazbavleniyaSamogonaCalcContainer store={props.store} />
      <DisqusBlock />
      <Footer />
    </div>
  );
};

export default RazbavleniyaSamogona;
