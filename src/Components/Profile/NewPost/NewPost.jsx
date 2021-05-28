import React from 'react'
import {Col, Row, Button,InputGroup,FormControl} from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa";
import s from './NewPost.module.css'

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let textNewPost = newPostElement.current.value;
        props.addPost(textNewPost);
        newPostElement.current.value = '';
    }

    return (
        <div className={`${s.whiteBlock}`}>
            <Row>
                <Col xs="auto">
                    <img width='40px' src='https://samogoncalc.ru/img/Ava.jpg' className={`${s.mrMin25} mb-2 rounded`} alt='Admin Tolya' />
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                            ref={newPostElement}
                            placeholder="Введите текст поста"
                            aria-label="Введите текст поста"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-primary" onClick={ addPost }><FaArrowRight /></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
        </div>
    )
}

export default NewPost;