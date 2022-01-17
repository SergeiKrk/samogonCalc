import React from "react";
import CalcBlock from "../../Components/CalcBlock/CalcBlock";

const HomeComponent = (props) => {
  return <CalcBlock calcsData={props.calcsData} />;
};

export default HomeComponent;
