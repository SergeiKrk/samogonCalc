import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import ResultBlockDrobn from "./ResultBlockDrobn";

const DrobnayaPeregonkaCalc = (props) => {

    let rawAlcoholVol = React.createRef();
    let rawAlcoholFortr = React.createRef();
    let afterDistillingFortr = React.createRef();
    let partHead = React.createRef();
    let partTail = React.createRef();

    let addCalculateDilute = () => {
        let alcoholVol = rawAlcoholVol.current.value;
        let alcoholFortr = rawAlcoholFortr.current.value;
        let distillingFortr = afterDistillingFortr.current.value;
        let partHeadVol = partHead.current.value;
        let partTailVol = partTail.current.value;
        let absAlcohol = (Number.parseInt(alcoholFortr) * Number.parseInt(alcoholVol) / 100 ).toFixed(2);
        let reqVol = (Number.parseInt(alcoholVol) * Number.parseInt(alcoholFortr) / Number.parseInt(distillingFortr)).toFixed(2);
        let outHeads = (Number.parseInt(alcoholFortr) * Number.parseInt(alcoholVol) * Number.parseInt(partHeadVol) / 10000 ).toFixed(2);
        let outTails = (Number.parseInt(alcoholFortr) * Number.parseInt(alcoholVol) * Number.parseInt(partTailVol) / 10000 ).toFixed(2);
        props.addCalculateFractional(absAlcohol,reqVol,outHeads,outTails,distillingFortr);
    }

    let addCalculateFractionalElements = props.calculateFractionalData.map(c => <ResultBlockDrobn volAbsAlcohol={c.volAbsAlcohol} reqVol={c.reqVol} volOutHeads={c.volOutHeads} volOutTails={c.volOutTails} distillingFortr={c.distillingFortr} />)

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
                                            Объем спирта-сырца:
                                        </Form.Label>
                                        <Col>
                                            <Form.Control ref={rawAlcoholVol} type="text" placeholder="начальный объем, литров" />
                                        </Col>
                                    </Form.Row>
                                    <br />
                                    <Form.Row>
                                        <Form.Label column="sm" lg={6}>
                                            Крепость спирта-сырца:
                                        </Form.Label>
                                        <Col>
                                            <Form.Control ref={rawAlcoholFortr} type="text" placeholder="начальная крепость, градусов" />
                                        </Col>
                                    </Form.Row>
                                    <br />
                                    <Form.Row>
                                        <Form.Label column="sm" lg={6}>
                                            Нужная крепость после перегона:
                                        </Form.Label>
                                        <Col>
                                            <Form.Control ref={afterDistillingFortr} type="text" placeholder="требуемая крепость, градусов" />
                                        </Col>
                                    </Form.Row>
                                    <br />
                                    <Form.Row>
                                        <Form.Label column="sm" lg={6}>
                                            Доля «Голов»:
                                        </Form.Label>
                                        <Col>
                                            <select ref={partHead} className="form-control">
                                                <option value="10">10% от общего объёма</option>
                                                <option value="11">11% от общего объёма</option>
                                                <option value="12">12% от общего объёма</option>
                                                <option value="13">13% от общего объёма</option>
                                                <option value="14">14% от общего объёма</option>
                                                <option value="15">15% от общего объёма</option>
                                            </select>
                                        </Col>
                                    </Form.Row>
                                    <br />
                                    <Form.Row>
                                        <Form.Label column="sm" lg={6}>
                                            Доля «Хвостов»:
                                        </Form.Label>
                                        <Col>
                                            <select ref={partTail} className="form-control">
                                                <option value="10">10% от общего объёма</option>
                                                <option value="11">11% от общего объёма</option>
                                                <option value="12">12% от общего объёма</option>
                                                <option value="13">13% от общего объёма</option>
                                                <option value="14">14% от общего объёма</option>
                                                <option value="15">15% от общего объёма</option>
                                                <option value="16">16% от общего объёма</option>
                                                <option value="17">17% от общего объёма</option>
                                                <option value="18">18% от общего объёма</option>
                                                <option value="19">19% от общего объёма</option>
                                                <option value="20">20% от общего объёма</option>
                                            </select>
                                        </Col>
                                    </Form.Row>
                                </Form.Group>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button onClick={ addCalculateDilute } variant="primary">Посчитать</Button>
                        </Card.Footer>
                    </Card>
                    <Card border="dark" bg="primary" text="white" className="text-center">
                        <blockquote className="blockquote mb-0 card-body">
                            {addCalculateFractionalElements}
                        </blockquote>
                    </Card>
                </CardGroup>
                <br/>
            </div>
    );
}

export default DrobnayaPeregonkaCalc;