import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {addCalculateDilute, updateAllDataDiluteActionCreator} from "../../../redux/calcs-reducer";
import RazbavleniyaSamogonaCalc from "./RazbavleniyaSamogonaCalc";

const RazbavleniyaSamogonaCalcContainer = (props) => {

    let state = props.store.getState();

    let updateAllDataDilute = (valInitVol,valInitFortr,valNecessFortr) => {
        props.store.dispatch(updateAllDataDiluteActionCreator(valInitVol,valInitFortr,valNecessFortr));
    }
    let addCalculateDiluteStpd = (initWater,reqVol) => {
        props.store.dispatch(addCalculateDilute(initWater,reqVol));
    }

    return (
        <RazbavleniyaSamogonaCalc
            updateAllDataDilute={updateAllDataDilute}
            addCalculateDiluteStpd={addCalculateDiluteStpd}
            newInitVol={state.calcPage.valInitVol}
            newInitFortr={state.calcPage.valInitFortr}
            newNecessFortr={state.calcPage.valNecessFortr}
            addDilutionWaterData={state.calcPage.addDilutionWaterData}
            />
    );
}

export default RazbavleniyaSamogonaCalcContainer;