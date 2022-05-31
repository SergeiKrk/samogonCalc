import "bootstrap/dist/css/bootstrap.min.css";
import {
  addCalculateHeadsActionCreator,
  updateAllDataHeadsActionCreator,
} from "../../../redux/calcs-reducer";
import OtborGolovCalc from "./OtborGolovCalc";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    alcoholVol: state.calcPage.alcoholVol,
    alcoholFortr: state.calcPage.alcoholFortr,
    partHeadVol: state.calcPage.partHeadVol,
    calculateHeadsData: state.calcPage.calculateHeadsData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCalculateHeads: (absAlcohol, outHeads) => {
      dispatch(addCalculateHeadsActionCreator(absAlcohol, outHeads));
    },
    updateAllDataHeads: (alcoholVol, alcoholFortr, partHeadVol) => {
      dispatch(
        updateAllDataHeadsActionCreator(alcoholVol, alcoholFortr, partHeadVol)
      );
    },
  };
};

const OtborGolovCalcContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OtborGolovCalc);

export default OtborGolovCalcContainer;
