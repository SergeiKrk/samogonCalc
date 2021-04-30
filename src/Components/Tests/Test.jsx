import React, { useState } from 'react';
import s from './Test.css'

const Test = (props) => {

    let InitVol = React.createRef();
    const [water, setWater] = useState(0);

    let Water = () => {
        let valInitVol = InitVol.current.value;
        alert(valInitVol);
    }

    return(
        <div>
            <input ref={InitVol} type="text" />
            <p>Вы кликнули {water} раз</p>
            <button onClick={() => setWater(water+1)}>
                +1
            </button>
            <button onClick={ Water }>
                Нажми на меня
            </button>
        </div>
    )
}

export default Test;