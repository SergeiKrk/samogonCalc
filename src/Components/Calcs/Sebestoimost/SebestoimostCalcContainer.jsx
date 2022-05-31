import "bootstrap/dist/css/bootstrap.min.css";
import {
  addCalculateSebestoimostActionCreator,
  updateAllDataSebestoimostActionCreator,
} from "../../../redux/calcs-reducer";
import SebestoimostCalc from "./SebestoimostCalc";
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
    calculateSebestoimostData: state.calcPage.calculateSebestoimostData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCalculateSebestoimost: (costLiter, costHalfLiter, volumeDrink) => {
      dispatch(
        addCalculateSebestoimostActionCreator(
          costLiter,
          costHalfLiter,
          volumeDrink
        )
      );
    },
    updateAllDataSebestoimost: (
      materialCost,
      materialMass,
      yeastCost,
      bentoniteCost,
      coalCost,
      wgeCostCost,
      volumeDrinkCost
    ) => {
      dispatch(
        updateAllDataSebestoimostActionCreator(
          materialCost,
          materialMass,
          yeastCost,
          bentoniteCost,
          coalCost,
          wgeCostCost,
          volumeDrinkCost
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
