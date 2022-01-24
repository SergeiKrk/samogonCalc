import React from "react";
import s from "../Calc.module.css";

const ResultBlockAbsolyutnijSpirt = (props) => {
  return (
    <>
      Объем абсолютного спирта:
      <br />
      <p className={s.sought}>
        <span> {props.volAbsAlcohol} </span> л.
      </p>
      <p className={s.explanation}>
        Результаты рассчета актуальны при заданной температуре, учтена поправка
        на температуру
      </p>
    </>
  );
};

export default ResultBlockAbsolyutnijSpirt;
