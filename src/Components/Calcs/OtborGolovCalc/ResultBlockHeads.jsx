import React from "react";
import s from '../Calc.module.css';

const ResultBlockHeads = (props) => {
    return (
        <p>
            Объем абсолютного спирта:<br/>
            <p className={s.sought}><span> {props.volAbsAlcohol} </span> л.</p>
            Объем «голов»:
            <p className={s.sought}><span>{props.volOutHeads}</span> л.</p>
            надо отобрать
            <br/>
            <br/>
            <div className={s.explanation}>Результаты рассчета актуальны, если температура получаемой жидкости равна 20°С</div>
        </p>
    );
}

export default ResultBlockHeads;