import "bootstrap/dist/css/bootstrap.min.css";
import {
  addCalculateTemperatureActionCreator,
  updateAllDataTemperatureActionCreator,
} from "../../../redux/calcs-reducer";
import TemperatureCalc from "./TemperatureCalc";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    calculateTemperatureData: state.calcPage.calculateTemperatureData,
    firstStr: state.calcPage.firstStr,
    firstTemp: state.calcPage.firstTemp,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCalculateTemperature: (Strenghth) => {
      dispatch(addCalculateTemperatureActionCreator(Strenghth));
    },
    updateAllDataTemperature: (firstStr, firstTemp) => {
      dispatch(updateAllDataTemperatureActionCreator(firstStr, firstTemp));
    },
  };
};

const TemperatureCalcContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TemperatureCalc);

export default TemperatureCalcContainer;
