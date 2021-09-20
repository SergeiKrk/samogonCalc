import React from "react";
import s from '../Calc.module.css';

const PoslePervojResultBlock = (props) => {
    return (
        <p>
            Необходимо долить воды:<br/>
            <p className={s.sought}><span> {props.addwater} </span> л.</p>
            Общий объем разбавленного самогона (спирта):
            <p className={s.sought}><span>{props.afterDelution}</span> л.</p>
            получится после разбавления
            <br/>
            <br/>
            <div className={s.explanation}>Результаты рассчета актуальны, если температура получаемой жидкости равна 20°С</div>
        </p>
    );
}

export default PoslePervojResultBlock;