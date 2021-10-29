import React from "react";
import s from "../Calc.module.css";

const ResultBlockSebestoimApprox = (props) => {
  return (
    <div key={props.id}>
      <p>Цена за 0.5 готового напитка:</p>
      <p className={s.sought}>
        <span> {props.volCostHalfLiterApprox} </span> руб.
      </p>
      <p>Цена за 1 литр готового напитка:</p>
      <p className={s.sought}>
        <span> {props.volCostLiterApprox} </span> руб.
      </p>
      <p>Объем абсолютного спирта:</p>
      <p className={s.sought}>
        <span> {props.volAbsAlcoholApprox} </span> л.
      </p>
      <p>Объем дистиллята крепостью в 40°:</p>
      <p className={s.sought}>
        <span> {props.volReqVol} </span> л.
      </p>
    </div>
  );
};

export default ResultBlockSebestoimApprox;
