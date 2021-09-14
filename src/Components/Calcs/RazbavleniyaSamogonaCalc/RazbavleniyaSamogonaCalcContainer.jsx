import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {addCalculateDilute, updateAllDataDiluteActionCreator} from "../../../redux/calcs-reducer";
import RazbavleniyaSamogonaCalc from "./RazbavleniyaSamogonaCalc";
import {connect} from "react-redux";

/*const qqRazbavleniyaSamogonaCalcContainer = (props) => {

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
}*/

const mapStateToProps = (state) => {
    return {
        newInitVol: state.calcPage.valInitVol,
        newInitFortr: state.calcPage.valInitFortr,
        newNecessFortr: state.calcPage.valNecessFortr,
        addDilutionWaterData: state.calcPage.addDilutionWaterData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateAllDataDilute: (valInitVol,valInitFortr,valNecessFortr) => {
            dispatch(updateAllDataDiluteActionCreator(valInitVol,valInitFortr,valNecessFortr));
        },
        addCalculateDiluteStpd: (initWater,reqVol) => {
            dispatch(addCalculateDilute(initWater,reqVol));
        }
    }
}

const RazbavleniyaSamogonaCalcContainer = connect(mapStateToProps,mapDispatchToProps) (RazbavleniyaSamogonaCalc);

export default RazbavleniyaSamogonaCalcContainer;