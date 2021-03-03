import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import s from './Massage.module.css'
import msgIcon from '../../assets/img/msg-icon-36.png'


const Massage = (props) => {
    return  (
        <>
            <Card>
                <Card.Body>
                    <Row>
                        <img 
                            src={msgIcon}
                            className={s.ml25}
                            alt='fsvfksmvkms'
                        />
                        <Col className="text-left" md={2} xs={9}>
                            <div className={s.ma7}><b>Анатолий</b></div>
                        </Col>
                        <Col className="text-left" xs={12}>
                            <div className={s.ma7}>Привет ребята!</div>
                        </Col>
                        <Col className="text-right" md={3} xs={12}>
                            <Button variant="outline-success" size="sm">1</Button>{' '}
                            <Button variant="outline-danger" size="sm">2</Button>{' '}
                            <Button variant="outline-dark"  size="sm">Комментировать</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default Massage;