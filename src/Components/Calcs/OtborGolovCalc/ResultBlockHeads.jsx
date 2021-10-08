import React from "react";
import s from "../Calc.module.css";

const ResultBlockHeads = (props) => {
  return (
    <>
      Объем абсолютного спирта:
      <br />
      <p className={s.sought}>
        <span> {props.volAbsAlcohol} </span> л.
      </p>
      Объем «голов»:
      <p className={s.sought}>
        <span>{props.volOutHeads}</span> л.
      </p>
      надо отобрать
      <br />
      <p className={s.explanation}>
        Результаты рассчета актуальны, если температура получаемой жидкости
        равна 20°С
      </p>
    </>
  );
};

export default ResultBlockHeads;
