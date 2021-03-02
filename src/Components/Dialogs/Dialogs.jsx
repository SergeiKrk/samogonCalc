import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import saharGlukoza from '../../assets/img/kalkulyator-zameny-sahara-glyukozoj.png'

const Dialogs = (props) => {
    return  (
        <div>
            <Container>
                <Card>
                    <Card.Body>
                        <Row>
                            <img 
                                src={saharGlukoza}
                                className='img-fluid'
                                alt='fsvfksmvkms'
                            />
                            <Col className="text-left" md={2}>
                                <Card.Title>Анатолий</Card.Title>
                            </Col>
                            <Col className="text-left">Привет ребята!</Col>
                            <Col className="text-right">
                                <Button variant="outline-success" size="sm">1</Button>{' '}
                                <Button variant="outline-danger" size="sm">2</Button>{' '}
                                <Button variant="outline-dark"  size="sm">Комментировать</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col className="text-left" md={2}>
                                <Card.Title>Петр</Card.Title>
                            </Col>
                            <Col className="text-left">Добрый день ;)</Col>
                            <Col className="text-right">
                                <Button variant="outline-success" size="sm">1</Button>{' '}
                                <Button variant="outline-danger" size="sm">2</Button>{' '}
                                <Button variant="outline-dark"  size="sm">Комментировать</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Dialogs;