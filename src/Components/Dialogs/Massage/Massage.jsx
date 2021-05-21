import React from 'react'
import Toast from 'react-bootstrap/Toast'
import s from './Massage.module.css'


const Massage = (props) => {
    return  (
            <div
                aria-live="polite"
                aria-atomic="true"
                className={s.toastBlock}
            >
                <Toast
                    className={s.toast}
                >
                    <Toast.Header>
                        <img width='30px' src= {props.massageUserAva} className="rounded mr-2" alt={props.massageUserName} />
                        <strong className="mr-auto">{props.massageUserName}</strong>
                        <small>только что</small>
                    </Toast.Header>
                    <Toast.Body>{props.massage}</Toast.Body>
                </Toast>
            </div>
    )
}

export default Massage;