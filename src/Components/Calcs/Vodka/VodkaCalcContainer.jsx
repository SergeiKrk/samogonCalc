import "bootstrap/dist/css/bootstrap.min.css";
import {
  addCalculateVodkaActionCreator,
  updateAllDataVodkaActionCreator,
} from "../../../redux/calcs-reducer";
import VodkaCalc from "./VodkaCalc";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    calculateVodkaData: state.calcPage.calculateVodkaData,
    firstVol: state.calcPage.firstVol,
    firstStr: state.calcPage.firstStr,
    firstTemp: state.calcPage.firstTemp,
    secondTemp: state.calcPage.secondTemp,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCalculateVodka: (waterVol, mixedVolume) => {
      dispatch(addCalculateVodkaActionCreator(waterVol, mixedVolume));
    },
    updateAllDataVodka: (firstVol, firstStr, firstTemp, secondTemp) => {
      dispatch(
        updateAllDataVodkaActionCreator(
          firstVol,
          firstStr,
          firstTemp,
          secondTemp
        )
      );
    },
  };
};

const VodkaCalcContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VodkaCalc);

export default VodkaCalcContainer;
