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
                        <img src= {msgIcon} className="rounded mr-2" alt="" />
                        <strong className="mr-auto">Bootstrap</strong>
                        <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>
            </div>
    )
}

export default Massage;