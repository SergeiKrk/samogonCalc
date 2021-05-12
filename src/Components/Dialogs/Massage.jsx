import React from 'react'
import Toast from 'react-bootstrap/Toast'
import msgIcon from '../../assets/img/msg-icon-36.png'
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
                        <img width='30px' src= {props.UserAva} className="rounded mr-2" alt={props.UserName} />
                        <strong className="mr-auto">{props.UserName}</strong>
                        <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>{props.Massage}</Toast.Body>
                </Toast>
            </div>
    )
}

export default Massage;