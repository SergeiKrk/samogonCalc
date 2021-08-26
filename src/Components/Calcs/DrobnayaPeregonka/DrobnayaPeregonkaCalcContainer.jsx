/*
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {addCalculateFractionalActionCreator, updateAllDataFractionalActionCreator} from "../../../redux/calcs-reducer";
import DrobnayaPeregonkaCalc from "./DrobnayaPeregonkaCalc";

const DrobnayaPeregonkaCalcContainer = (props) => {

    let allValuesOnChange = (alcoholFortr,alcoholVol,partHeadVol,distillingFortr,partTailVol) => {

        let absAlcohol = (Number.parseInt(alcoholFortr) * Number.parseInt(alcoholVol) / 100 ).toFixed(2);
        let reqVol = (Number.parseInt(alcoholVol) * Number.parseInt(alcoholFortr) / Number.parseInt(distillingFortr)).toFixed(2);
        let outHeads = (Number.parseInt(alcoholFortr) * Number.parseInt(alcoholVol) * Number.parseInt(partHeadVol) / 10000 ).toFixed(2);
        let outTails = (Number.parseInt(alcoholFortr) * Number.parseInt(alcoholVol) * Number.parseInt(partTailVol) / 10000 ).toFixed(2);

         if(alcoholVol && alcoholFortr && distillingFortr) props.dispatch(addCalculateFractionalActionCreator(absAlcohol,reqVol,outHeads,outTails,distillingFortr));
         props.dispatch(updateAllDataFractionalActionCreator(alcoholVol,alcoholFortr,distillingFortr,partHeadVol,partTailVol));
    }

    return (
        <DrobnayaPeregonkaCalc addCalculateFractional={allValuesOnChange} updateAllDataFractional={updateAllDataFractional}/>
    );
}

export default DrobnayaPeregonkaCalcContainer;*/
