import React from "react";
import s from "../Calc.module.css";

const ResultBlockSmeshSpirt = (props) => {
  return (
    <>
      <p>Крепость смешанного алкоголя:</p>
      <p className={s.sought}>
        <span> {props.volMixedStrength} </span> °
      </p>
      <p>Объем смешанного алкоголя:</p>
      <p className={s.sought}>
        <span> {props.volMixedVolume} </span> л.
      </p>
      <p className={s.explanation}>
        Результаты расчетов представлены с поправкой на температуру смешиваемых
        жидкостей.
      </p>
    </>
  );
};

export default ResultBlockSmeshSpirt;
