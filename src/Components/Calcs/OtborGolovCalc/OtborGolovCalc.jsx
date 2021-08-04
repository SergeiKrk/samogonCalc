import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import ResultBlockHeads from "./ResultBlockHeads"

const OtborGolovCalc = (props) => {

    let InitVol = React.createRef();
    let InitFortr = React.createRef();
    let partHead = React.createRef();

    let addCalculateHeads = () => {

        let alcoholVol = InitVol.current.value;
        let alcoholFortr = InitFortr.current.value;
        let partHeadVol = partHead.current.value;
        let absAlcohol = (Number.parseInt(alcoholFortr) * Number.parseInt(alcoholVol) / 100 ).toFixed(2);
        let outHeads = (Number.parseInt(alcoholFortr) * Number.parseInt(alcoholVol) * Number.parseInt(partHeadVol) / 10000 ).toFixed(2);
        props.addCalculateHeads(absAlcohol,outHeads);
    }

    let addCalculateHeadsElements = props.calculateHeadsData.map(c => <ResultBlockHeads volOutHeads={c.volOutHeads} volAbsAlcohol={c.volAbsAlcohol}  />)

    return (

            <div className="container">
                <p>
                    Чтобы разбавить дистиллят до нужной крепости, воспользуйтесь калькулятором разбавления самогона водой. В онлайн режиме он поможет подобрать пропорции воды и самогона. Нужно лишь вписать в программу 3 параметра: первоначальный объем, крепость самогона и требуемую крепость. Калькулятор мгновенно произведет нужные расчеты и выдаст результат. Например: у вас есть 5 литров сортировки крепостью 62%, вам нужно разбавить ее до 40%. Заполнив 3 поля в онлайн калькуляторы, мы видим результат: необходимо долить 2,75 литров воды. Важный момент — результаты будут правильными, если температура всех жидкостей 20°С.
                </p>

                <CardGroup>
                    <Card border="dark">
                        <Card.Body>
                            <Card.Title>Введите данные для отбора "Голов" (легких ядовитых фракций, которые выходять при дистилляции первыми)</Card.Title>
                            <Card.Text>
                                <Form.Group>
                                    <Form.Row>
                                        <Form.Label column="sm" lg={6}>
                                            Объем разбавляемого спирта-сырца:
                                        </Form.Label>
                                        <Col>
                                            <Form.Control ref={InitVol} type="text" placeholder="объем, литров" />
                                        </Col>
                                    </Form.Row>
                                    <br />
                                    <Form.Row>
                                        <Form.Label column="sm" lg={6}>
                                            Крепость разбавляемого самогона:
                                        </Form.Label>
                                        <Col>
                                            <Form.Control ref={InitFortr} type="text" placeholder="крепость, градусов" />
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
                                </Form.Group>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button onClick={ addCalculateHeads } variant="primary">Посчитать</Button>
                        </Card.Footer>
                    </Card>
                    <Card border="dark" bg="primary" text="white" className="text-center">
                        <blockquote className="blockquote mb-0 card-body">
                            {addCalculateHeadsElements}
                        </blockquote>
                    </Card>
                </CardGroup>
                <br/>
            </div>
    );
}

export default OtborGolovCalc;