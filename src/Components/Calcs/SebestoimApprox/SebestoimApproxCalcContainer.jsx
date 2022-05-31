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
    yeastCost: state.calcPage.yeastCost,
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
    addCalculateSebestoimApprox: (
      costLiterApprox,
      costHalfLiterApprox,
      volumeAbsAlcoholApprox,
      reqVolApprox
    ) => {
      dispatch(
        addCalculateSebestoimApproxActionCreator(
          costLiterApprox,
          costHalfLiterApprox,
          volumeAbsAlcoholApprox,
          reqVolApprox
        )
      );
    },
    updateAllDataSebestoimApprox: (
      rawMaterials,
      massMaterials,
      costMaterials,
      yeastCostApprox,
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
          yeastCostApprox,
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
