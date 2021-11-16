import React from "react";
import s from "../Calc.module.css";

const ResultBlockTemperature = (props) => {
  return (
    <div key={props.id}>
      <p>Потребуется глюкозы или декстрозы:</p>
      <p className={s.sought}>
        <span> {props.volGlucose} </span> кг.
      </p>
    </div>
  );
};

export default ResultBlockTemperature;
