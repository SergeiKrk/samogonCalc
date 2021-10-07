import React from "react";
import s from "../Calc.module.css";

const ResultBlockSmeshSpirt = (props) => {
  return (
    <>
      <br />
      <p>Крепость смешанного алкоголя:</p>
      <p className={s.sought}>
        <span> {props.volMixedStrength} </span> °
      </p>
      <p>Объем смешанного алкоголя:</p>
      <p className={s.sought}>
        <span> {props.volMixedVolume} </span> л.
      </p>
      <br />
      <div className={s.explanation}>
        Результаты расчетов представлены с поправкой на температуру смешиваемых
        жидкостей.
      </div>
    </>
  );
};

export default ResultBlockSmeshSpirt;
