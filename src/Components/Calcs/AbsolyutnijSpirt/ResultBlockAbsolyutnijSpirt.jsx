import React from "react";
import s from "../Calc.module.css";

const ResultBlockAbsolyutnijSpirt = (props) => {
  return (
    <p>
      Объем абсолютного спирта:
      <br />
      <p className={s.sought}>
        <span> {props.volAbsAlcohol} </span> л.
      </p>
      <div className={s.explanation}>
        Результаты рассчета актуальны, если температура получаемой жидкости
        равна 20°С
      </div>
    </p>
  );
};

export default ResultBlockAbsolyutnijSpirt;
