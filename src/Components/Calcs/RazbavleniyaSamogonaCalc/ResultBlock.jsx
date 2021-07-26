import React from "react";
import s from '../Calc.module.css';

const ResultBlock = (props) => {
debugger;
    return (
        <p>
            Необходимо долить воды:<br/>
            <p className={s.sought}><span> {props.addwater} </span> л.</p>
            Общий объем разбавленного самогона (спирта):
            <p className={s.sought}><span>{props.afterDelution}</span> л.</p>
            <br/>
            Результаты рассчета актуальны, если температура получаемой жидкости равна 20°С
        </p>
    );
}

export default ResultBlock;