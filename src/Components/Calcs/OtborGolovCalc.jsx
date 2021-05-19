import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import s from './Calc.module.css'

const OtborGolovCalc = (props) => {

    /*Разбавление самогона водой*/
    let InitVol = React.createRef();
    let InitFortr = React.createRef();
    let NecessFortr = React.createRef();

    let inWater = () => {
        let valInitVol = InitVol.current.value;
        let valInitFortr = InitFortr.current.value;
        let valNecessFortr = NecessFortr.current.value;
        let initWater = Number.parseInt(valInitVol) * Number.parseInt(valInitFortr) / Number.parseInt(valNecessFortr) - Number.parseInt(valInitVol);
        alert(initWater.toFixed(2));
    }

    /*Получение нужного объема разведенного самогона (разбавленного спирта) нужной крепости*/
    let requiredVolume = () => {
        let valInitVol = InitVol.current.value;
        let valInitFortr = InitFortr.current.value;
        let valNecessFortr = NecessFortr.current.value;
        let reqVol = Number.parseInt(valInitVol) * Number.parseInt(valInitFortr) / Number.parseInt(valNecessFortr);
        alert(reqVol.toFixed(2));
    }

    return (

            <div className="container">
                <p>
                    Чтобы разбавить дистиллят до нужной крепости, воспользуйтесь калькулятором разбавления самогона водой. В онлайн режиме он поможет подобрать пропорции воды и самогона. Нужно лишь вписать в программу 3 параметра: первоначальный объем, крепость самогона и требуемую крепость. Калькулятор мгновенно произведет нужные расчеты и выдаст результат. Например: у вас есть 5 литров сортировки крепостью 62%, вам нужно разбавить ее до 40%. Заполнив 3 поля в онлайн калькуляторы, мы видим результат: необходимо долить 2,75 литров воды. Важный момент — результаты будут правильными, если температура всех жидкостей 20°С.
                </p>
                <CardGroup>
                    <Card border="dark">
                        <Card.Body>
                            <Card.Title>Введите данные для разбавления спирта (самогона) водой</Card.Title>
                            <Card.Text>
                                <Form.Group>
                                    <Form.Row>
                                        <Form.Label column="sm" lg={6}>
                                            Объем разбавляемого самогона:
                                        </Form.Label>
                                        <Col>
                                            <Form.Control ref={InitVol} type="text" placeholder="начальный объем, литров" />
                                        </Col>
                                    </Form.Row>
                                    <br />
                                    <Form.Row>
                                        <Form.Label column="sm" lg={6}>
                                            Крепость разбавляемого самогона:
                                        </Form.Label>
                                        <Col>
                                            <Form.Control ref={InitFortr} type="text" placeholder="начальная крепость, градусов" />
                                        </Col>
                                    </Form.Row>
                                    <br />
                                    <Form.Row>
                                        <Form.Label column="sm" lg={6}>
                                            Крепость, которую хотите получить:
                                        </Form.Label>
                                        <Col>
                                            <Form.Control ref={NecessFortr} type="text" placeholder="требуемая крепость, градусов" />
                                        </Col>
                                    </Form.Row>
                                </Form.Group>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button  onClick={ inWater } variant="primary">Сколько воды долить</Button>
                            <span className={s.ml_20} />
                            <Button onClick={ requiredVolume } variant="primary">Сколько всего получится</Button>
                        </Card.Footer>
                    </Card>
                    <Card border="dark" bg="primary" text="white" className="text-center">
                        <blockquote className="blockquote mb-0 card-body">
                            <p>
                                Необходимо долить воды:<br/>
                                <p className={s.sought}><span>0</span> л.</p>
                                Общий объем разбавленного самогона (спирта):
                                <p className={s.sought}><span>30</span> л.</p>
                                <br/>
                                Результаты рассчета актуальны, если температура получаемой жидкости равна 20°С
                            </p>
                        </blockquote>
                    </Card>
                </CardGroup>
                <br/>
            </div>
    );
}

export default OtborGolovCalc;