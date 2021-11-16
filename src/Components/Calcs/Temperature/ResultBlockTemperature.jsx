import React from "react";
import s from "../Calc.module.css";

const ResultBlockTemperature = (props) => {
  return (
    <div key={props.id}>
      <p>Крепость с поправкой:</p>
      <p className={s.sought}>
        <span> {props.volStrenghth} </span> °
      </p>
      <p className={s.explanation}>
        Результаты расчетов представлены с поправкой на температуру.
      </p>
    </div>
  );
};

export default ResultBlockTemperature;
