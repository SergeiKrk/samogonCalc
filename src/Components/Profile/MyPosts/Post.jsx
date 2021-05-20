import React from 'react'
import {Col, Row, Button} from 'react-bootstrap'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={`${s.whiteBlock}`}>
            <div className={`${s.postImg}`}>
                <img width='40px' src='https://samogoncalc.ru/img/Ava.jpg' className="rounded mb-2" alt='Admin Tolya'/>
            </div>
            <div className={`${s.postName}`}>
                {props.userName}
            </div>
            <div className={`${s.postMassage}`}>
                {props.MyMassagePost}
            </div>
        </div>
    )
}

export default Post;