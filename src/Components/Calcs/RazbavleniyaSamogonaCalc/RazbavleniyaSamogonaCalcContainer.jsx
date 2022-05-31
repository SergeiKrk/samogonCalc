import "bootstrap/dist/css/bootstrap.min.css";
import {
  addCalculateDilute,
  updateAllDataDiluteActionCreator,
} from "../../../redux/calcs-reducer";
import RazbavleniyaSamogonaCalc from "./RazbavleniyaSamogonaCalc";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newInitVol: state.calcPage.valInitVol,
    newInitFortr: state.calcPage.valInitFortr,
    newNecessFortr: state.calcPage.valNecessFortr,
    addDilutionWaterData: state.calcPage.addDilutionWaterData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateAllDataDilute: (valInitVol, valInitFortr, valNecessFortr) => {
      dispatch(
        updateAllDataDiluteActionCreator(
          valInitVol,
          valInitFortr,
          valNecessFortr
        )
      );
    },
    addCalculateDiluteStpd: (initWater, reqVol) => {
      dispatch(addCalculateDilute(initWater, reqVol));
    },
  };
};

const RazbavleniyaSamogonaCalcContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RazbavleniyaSamogonaCalc);

export default RazbavleniyaSamogonaCalcContainer;
