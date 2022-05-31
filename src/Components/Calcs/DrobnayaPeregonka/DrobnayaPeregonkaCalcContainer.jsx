import "bootstrap/dist/css/bootstrap.min.css";
import {
  addCalculateFractionalActionCreator,
  updateAllDataFractionalActionCreator,
} from "../../../redux/calcs-reducer";
import DrobnayaPeregonkaCalc from "./DrobnayaPeregonkaCalc";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    calculateFractionalData: state.calcPage.calculateFractionalData,
    alcoholVol: state.calcPage.alcoholVol,
    alcoholFortr: state.calcPage.alcoholFortr,
    distillingFortr: state.calcPage.distillingFortr,
    partHeadVol: state.calcPage.partHeadVol,
    partTailVol: state.calcPage.partTailVol,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCalculateFractional: (
      absAlcohol,
      reqVol,
      outHeads,
      outTails,
      distillingFortr
    ) => {
      dispatch(
        addCalculateFractionalActionCreator(
          absAlcohol,
          reqVol,
          outHeads,
          outTails,
          distillingFortr
        )
      );
    },
    updateAllDataFractional: (
      alcoholVol,
      alcoholFortr,
      distillingFortr,
      partHeadVol,
      partTailVol
    ) => {
      dispatch(
        updateAllDataFractionalActionCreator(
          alcoholVol,
          alcoholFortr,
          distillingFortr,
          partHeadVol,
          partTailVol
        )
      );
    },
  };
};

const DrobnayaPeregonkaCalcContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DrobnayaPeregonkaCalc);

export default DrobnayaPeregonkaCalcContainer;
