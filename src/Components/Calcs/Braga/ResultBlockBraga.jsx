import React from "react";
import s from "../Calc.module.css";

const ResultBlockBraga = (props) => {
  return (
    <div key={props.id}>
      <p>Крепость браги:</p>
      <p className={s.sought}>
        <span> {props.volAlcoholStrength} </span> °
      </p>
      <p>Выход спирта-сырца (40°):</p>
      <p className={s.sought}>
        <span> {props.volRawAlcohol} </span> л.
      </p>
      <p>Воды долить:</p>
      <p className={s.sought}>
        <span> {props.volWaterVolume} </span> л.
      </p>
    </div>
  );
};

export default ResultBlockBraga;
