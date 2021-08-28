import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {addCalculateFractionalActionCreator, updateAllDataFractionalActionCreator} from "../../../redux/calcs-reducer";
import DrobnayaPeregonkaCalc from "./DrobnayaPeregonkaCalc";

const DrobnayaPeregonkaCalcContainer = (props) => {

    let state = props.store.getState();

    let addCalculateFractional = (absAlcohol,reqVol,outHeads,outTails,distillingFortr) => {
        props.store.dispatch(addCalculateFractionalActionCreator(absAlcohol,reqVol,outHeads,outTails,distillingFortr));
    }

    let updateAllDataFractional = (alcoholVol,alcoholFortr,distillingFortr,partHeadVol,partTailVol) => {
        props.store.dispatch(updateAllDataFractionalActionCreator(alcoholVol,alcoholFortr,distillingFortr,partHeadVol,partTailVol));
    }

    return (
        <DrobnayaPeregonkaCalc
            addCalculateFractional={addCalculateFractional}
            updateAllDataFractional={updateAllDataFractional}
            calculateFractionalData={state.calcPage.calculateFractionalData}
            alcoholVol={state.calcPage.alcoholVol}
            alcoholFortr={state.calcPage.alcoholFortr}
            distillingFortr={state.calcPage.distillingFortr}
            partHeadVol={state.calcPage.partHeadVol}
            partTailVol={state.calcPage.partTailVol}
        />
    );
}

export default DrobnayaPeregonkaCalcContainer;
