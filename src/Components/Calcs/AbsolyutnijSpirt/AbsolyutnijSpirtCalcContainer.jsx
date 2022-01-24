import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  addCalculateHeadsActionCreator,
  updateAllDataHeadsActionCreator,
} from "../../../redux/calcs-reducer";
import AbsolyutnijSpirtCalc from "./AbsolyutnijSpirtCalc";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    alcoholVol: state.calcPage.alcoholVol,
    alcoholFortr: state.calcPage.alcoholFortr,
    firstTemp: state.calcPage.firstTemp,
    calculateHeadsData: state.calcPage.calculateHeadsData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCalculateHeads: (strenghth, absAlcohol, outHeads) => {
      dispatch(addCalculateHeadsActionCreator(strenghth, absAlcohol, outHeads));
    },
    updateAllDataHeads: (alcoholVol, alcoholFortr, firstTemp) => {
      dispatch(
        updateAllDataHeadsActionCreator(alcoholVol, alcoholFortr, firstTemp)
      );
    },
  };
};

const AbsolyutnijSpirtCalcContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AbsolyutnijSpirtCalc);

export default AbsolyutnijSpirtCalcContainer;
