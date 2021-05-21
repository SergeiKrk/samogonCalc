import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialogItemsBlock}>
            <NavLink to={path} className={s.dialogItems}>{props.dialogUserName}</NavLink>
        </div>
    )
}

export default DialogItem;