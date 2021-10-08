import React from "react";
import s from "../Calc.module.css";

/*volAbsAlcohol: 0, volOutHeads: 0, volOutTails: 0, distillingFortr: 0*/

const ResultBlockPosleVtoroj = (props) => {
  return (
    <>
      Абсолютного спирта на выходе:
      <br />
      <p className={s.sought}>
        <span> {props.volAbsAlcohol} </span> л.
      </p>
      Объем «голов»:
      <p className={s.sought}>
        <span>{props.volOutHeads}</span> л.
      </p>
      Объем «хвостов»:
      <p className={s.sought}>
        <span>{props.volOutTails}</span> л.
      </p>
      Объем тела крепостью {props.distillingFortr}° на выходе:
      <p className={s.sought}>
        <span>{props.reqVol}</span> л.
      </p>
      <p className={s.explanation}>
        Результаты рассчета актуальны, если температура получаемой жидкости
        равна 20°С
      </p>
    </>
  );
};

export default ResultBlockPosleVtoroj;
