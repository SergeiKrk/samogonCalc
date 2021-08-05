import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import RazbavleniyaSamogonaCalc from "../Components/Calcs/RazbavleniyaSamogonaCalc/RazbavleniyaSamogonaCalc";
import DisqusBlock from "../Components/Header/DisqusBlock";
import React from "react";

const RazbavleniyaSamogona = (props) => {
  return (
    <div>
      <HeaderBlock
          Href='kalkulyator-razbavleniya-samogona-vodoj'
          Img='https://samogoncalc.ru/img/kalkulyator-razbavleniya-samogona-vodoj.png'
          Title='Калькулятор разбавления самогона водой'
          Description='Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях'
      />
        <br/>
      <RazbavleniyaSamogonaCalc
          newInitVol={props.valInitVol}
          newInitFortr={props.valInitFortr}
          newNecessFortr={props.valNecessFortr}
          addDilutionWaterData={props.addDilutionWaterData}
          addCalculateDilute={props.addCalculateDilute}
          updateAllDataDilute={props.updateAllDataDilute}
      />
        <DisqusBlock />
      <Footer />
    </div>
  );
}

export default RazbavleniyaSamogona;