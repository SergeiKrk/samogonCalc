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
    calculateHeadsData: state.calcPage.calculateHeadsData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCalculateHeads: (absAlcohol, outHeads) => {
      dispatch(addCalculateHeadsActionCreator(absAlcohol, outHeads));
    },
    updateAllDataHeads: (alcoholVol, alcoholFortr) => {
      dispatch(updateAllDataHeadsActionCreator(alcoholVol, alcoholFortr));
    },
  };
};

const AbsolyutnijSpirtCalcContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AbsolyutnijSpirtCalc);

export default AbsolyutnijSpirtCalcContainer;
