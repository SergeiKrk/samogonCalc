import React from 'react'
import {Col, Form, Button} from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa";
import s from './NewPost.module.css'

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let textNewPost = newPostElement.current.value;
        alert(textNewPost);
    }

    return (
        <div className={`${s.whiteBlock}`}>
            <Form>
                <Form.Row className="align-items-center">
                    <Col xs="auto">
                        <img width='40px' src='https://samogoncalc.ru/img/Ava.jpg' className="rounded mb-2" alt='Admin Tolya' />
                    </Col>
                    <Col xs="10">
                        <Form.Label htmlFor="inlineFormInput" srOnly>
                            Post
                        </Form.Label>
                        <Form.Control
                            ref={newPostElement}
                            className="mb-2"
                            id="inlineFormInput"
                            placeholder="Введите текст поста"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" onClick={ addPost } className="mb-2">
                            <FaArrowRight />
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    )
}

export default NewPost;