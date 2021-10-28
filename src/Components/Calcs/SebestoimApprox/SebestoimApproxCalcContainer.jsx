import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  addCalculateSebestoimApproxActionCreator,
  updateAllDataSebestoimApproxActionCreator,
} from "../../../redux/calcs-reducer";
import SebestoimApproxCalc from "./SebestoimApproxCalc";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    rawMaterials: state.calcPage.rawMaterials,
    massMaterials: state.calcPage.massMaterials,
    costMaterials: state.calcPage.costMaterials,
    wge: state.calcPage.wge,
    bentoniteCoal: state.calcPage.bentoniteCoal,
    efficiency: state.calcPage.efficiency,
    heads: state.calcPage.heads,
    tails: state.calcPage.tails,
    calculateSebestoimApproxData: state.calcPage.calculateSebestoimApproxData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCalculateSebestoimost: (
      costLiterApprox,
      costHalfLiterApprox,
      volumeDrinkAprox
    ) => {
      dispatch(
        addCalculateSebestoimApproxActionCreator(
          costLiterApprox,
          costHalfLiterApprox,
          volumeDrinkAprox
        )
      );
    },
    updateAllDataSebestoimApprox: (
      rawMaterials,
      massMaterials,
      costMaterials,
      wge,
      bentoniteCoal,
      efficiency,
      heads,
      tails
    ) => {
      dispatch(
        updateAllDataSebestoimApproxActionCreator(
          rawMaterials,
          massMaterials,
          costMaterials,
          wge,
          bentoniteCoal,
          efficiency,
          heads,
          tails
        )
      );
    },
  };
};

const SebestoimApproxCalcContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SebestoimApproxCalc);

export default SebestoimApproxCalcContainer;
