import "bootstrap/dist/css/bootstrap.min.css";
import {
  addCalculateZamenaActionCreator,
  updateAllDataZamenaActionCreator,
} from "../../../redux/calcs-reducer";
import ZamenaCalc from "./ZamenaCalc";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    calculateZamenaData: state.calcPage.calculateZamenaData,
    sugar: state.calcPage.sugar,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCalculateZamena: (glucose) => {
      dispatch(addCalculateZamenaActionCreator(glucose));
    },
    updateAllDataZamena: (sugar) => {
      dispatch(updateAllDataZamenaActionCreator(sugar));
    },
  };
};

const ZamenaCalcContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ZamenaCalc);

export default ZamenaCalcContainer;
