import React from "react";
import s from "../Calc.module.css";

const ResultBlockAbsolyutnijSpirt = (props) => {
  return (
    <>
      Объем абсолютного спирта:
      <p className={s.sought}>
        <span> {props.volAbsAlcohol} </span> л.
      </p>
      Объем Чистого спирта:
      <p className={s.sought}>
        <span> {props.volClearAlc} </span> л.
      </p>
      <p className={s.explanation}>
        В рассчетах учтена поправка на температуру
      </p>
    </>
  );
};

export default ResultBlockAbsolyutnijSpirt;
