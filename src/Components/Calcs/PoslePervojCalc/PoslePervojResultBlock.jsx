import React from "react";
import s from "../Calc.module.css";

const PoslePervojResultBlock = (props) => {
  return (
    <>
      Необходимо долить воды:
      <br />
      <p className={s.sought}>
        <span> {props.addwater} </span> л.
      </p>
      Общий объем разбавленного самогона (спирта):
      <p className={s.sought}>
        <span>{props.afterDelution}</span> л.
      </p>
      получится после разбавления
      <br />
      <br />
      <p className={s.explanation}>
        Результаты рассчета актуальны, если температура получаемой жидкости
        равна 20°С
      </p>
    </>
  );
};

export default PoslePervojResultBlock;
