import React from "react";
import s from "../Calc.module.css";

const ResultBlockVodka = (props) => {
  return (
    <div key={props.id}>
      <p>Воды долить:</p>
      <p className={s.sought}>
        <span> {props.volWaterVol} </span> л.
      </p>
      <p>Объем водки:</p>
      <p className={s.sought}>
        <span> {props.volMixedVolume} </span> л.
      </p>
      <p className={s.explanation}>
        Результаты расчетов представлены с поправкой на температуру смешиваемых
        жидкостей.
      </p>
    </div>
  );
};

export default ResultBlockVodka;
