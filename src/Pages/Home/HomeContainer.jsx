import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeComponent from "./HomeComponent";

const HomeContainer = (props) => {
  let state = props.store.getState();

  return <HomeComponent calcsData={state.calcPage.calcsData} />;
};

export default HomeContainer;
