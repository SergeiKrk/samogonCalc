import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  addCalculateBragaActionCreator,
  updateAllDataBragaActionCreator,
} from "../../../redux/calcs-reducer";
import BragaCalc from "./BragaCalc";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    materialCost: state.calcPage.materialCost,
    materialMass: state.calcPage.materialMass,
    yeastCost: state.calcPage.yeastCost,
    bentoniteCost: state.calcPage.bentoniteCost,
    coalCost: state.calcPage.coalCost,
    wgeCostCost: state.calcPage.wgeCostCost,
    volumeDrinkCost: state.calcPage.volumeDrinkCost,
    calculateBragaData: state.calcPage.calculateBragaData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCalculateBraga: (rawAlcohol, waterVolume, alcoholStrength) => {
      dispatch(
        addCalculateBragaActionCreator(rawAlcohol, waterVolume, alcoholStrength)
      );
    },
    updateAllDataBraga: (rawMaterials, massMaterials, mashVolume) => {
      dispatch(
        updateAllDataBragaActionCreator(rawMaterials, massMaterials, mashVolume)
      );
    },
  };
};

const BragaCalcContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BragaCalc);

export default BragaCalcContainer;
