import React from 'react'
import s from './Post.module.css'
import {Col} from 'react-bootstrap'
import {FaGlassCheers} from "react-icons/fa"

const Post = (props) => {
    return (
        <div className={`${s.whiteBlock} row`}>
            <Col md={10}>
                <div className={`${s.postImg}`}>
                    <img width='40px' src='https://samogoncalc.ru/img/Ava.jpg' className="rounded mb-2" alt='Admin Tolya'/>
                </div>
                <div className={`${s.postName}`}>
                    {props.userName}
                </div>
                <div className={`${s.postMassage}`}>
                    {props.MyMassagePost}
                </div>
            </Col>
            <Col className={`text-right ${s.postLikeBlock}`} md={2}>
                <div className={s.postLike}>
                    <FaGlassCheers /> {props.likeCount}
                </div>
            </Col>
        </div>
    )
}

export default Post;