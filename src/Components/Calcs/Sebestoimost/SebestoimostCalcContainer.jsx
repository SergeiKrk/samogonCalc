import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  addCalculateMixedStrengthActionCreator,
  updateAllDataMixedStrengthActionCreator,
} from "../../../redux/calcs-reducer";
import SebestoimostCalc from "./SebestoimostCalc";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    calculateMixedStrengthData: state.calcPage.calculateMixedStrengthData,
    firstVol: state.calcPage.firstVol,
    firstStr: state.calcPage.firstStr,
    firstTemp: state.calcPage.firstTemp,
    secondVol: state.calcPage.secondVol,
    secondStr: state.calcPage.secondStr,
    secondTemp: state.calcPage.secondTemp,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCalculateMixedStrength: (mixedStrength, mixedVolume) => {
      dispatch(
        addCalculateMixedStrengthActionCreator(mixedStrength, mixedVolume)
      );
    },
    updateAllDataMixedStrength: (
      firstVol,
      firstStr,
      firstTemp,
      secondVol,
      secondStr,
      secondTemp
    ) => {
      dispatch(
        updateAllDataMixedStrengthActionCreator(
          firstVol,
          firstStr,
          firstTemp,
          secondVol,
          secondStr,
          secondTemp
        )
      );
    },
  };
};

const SebestoimostCalcContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SebestoimostCalc);

export default SebestoimostCalcContainer;
