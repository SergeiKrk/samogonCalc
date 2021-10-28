import React from "react";
import s from "../Calc.module.css";

const ResultBlockSebestoimApprox = (props) => {
  debugger;
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
      <p>Объем готового напитка:</p>
      <p className={s.sought}>
        <span> {props.volDrinkApprox} </span> л.
      </p>
    </div>
  );
};

export default ResultBlockSebestoimApprox;
