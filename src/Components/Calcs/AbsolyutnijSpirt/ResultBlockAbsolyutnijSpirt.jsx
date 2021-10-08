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
        Результаты рассчета актуальны, если температура получаемой жидкости
        равна 20°С
      </p>
    </>
  );
};

export default ResultBlockAbsolyutnijSpirt;
