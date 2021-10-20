import React from "react";
import s from "../Calc.module.css";

const ResultBlockSebestoimost = (props) => {
  return (
    <div key={props.id}>
      <p>Цена за 0.5 готового напитка:</p>
      <p className={s.sought}>
        <span> {props.volCostHalfLiter} </span> руб.
      </p>
      <p>Цена за 1 литр готового напитка:</p>
      <p className={s.sought}>
        <span> {props.volCostLiter} </span> руб.
      </p>
      <p>Объем готового напитка:</p>
      <p className={s.sought}>
        <span> {props.volDrink} </span> л.
      </p>
    </div>
  );
};

export default ResultBlockSebestoimost;
