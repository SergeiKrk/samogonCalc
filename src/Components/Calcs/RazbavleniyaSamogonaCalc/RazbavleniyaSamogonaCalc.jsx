import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import ResultBlock from "./ResultBlock";
import {addCalculateDilute, updateAllDataDiluteActionCreator} from "../../../redux/state";

const RazbavleniyaSamogonaCalc = (props) => {

    /*Разбавление самогона водой*/
    let InitVol = React.createRef();
    let InitFortr = React.createRef();
    let NecessFortr = React.createRef();

    let addDilutionWaterElements = props.addDilutionWaterData.map(ca => <ResultBlock addwater={ca.addwater} afterDelution={ca.afterDelution}  />)

    let allValuesOnChange = () => {
        let valInitVol = InitVol.current.value;
        let valInitFortr = InitFortr.current.value;
        let valNecessFortr = NecessFortr.current.value;
        let initWater = (Number.parseInt(valInitVol) * Number.parseInt(valInitFortr) / Number.parseInt(valNecessFortr) - Number.parseInt(valInitVol)).toFixed(2);
        let reqVol = (Number.parseInt(valInitVol) * Number.parseInt(valInitFortr) / Number.parseInt(valNecessFortr)).toFixed(2);

        props.dispatch(updateAllDataDiluteActionCreator(valInitVol,valInitFortr,valNecessFortr));
        if (valInitVol && valInitFortr && valNecessFortr) props.dispatch(addCalculateDilute(initWater,reqVol));
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
                                    <br/>
                                    <Form.Row>
                                        <Form.Label column="sm" lg={6}>
                                            Объем разбавляемого самогона:
                                        </Form.Label>
                                        <Col>
                                            <Form.Control ref={InitVol} onChange={allValuesOnChange} value={props.valInitVol} type="text" placeholder="начальный объем, литров" />
                                        </Col>
                                    </Form.Row>
                                    <br />
                                    <Form.Row>
                                        <Form.Label column="sm" lg={6}>
                                            Крепость разбавляемого самогона:
                                        </Form.Label>
                                        <Col>
                                            <Form.Control ref={InitFortr} onChange={allValuesOnChange} value={props.valInitFortr} type="text" placeholder="начальная крепость, градусов" />
                                        </Col>
                                    </Form.Row>
                                    <br />
                                    <Form.Row>
                                        <Form.Label column="sm" lg={6}>
                                            Крепость, которую хотите получить:
                                        </Form.Label>
                                        <Col>
                                            <Form.Control ref={NecessFortr} onChange={allValuesOnChange} value={props.valNecessFortr} type="text" placeholder="требуемая крепость, градусов" />
                                        </Col>
                                    </Form.Row>
                                </Form.Group>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="dark" bg="primary" text="white" className="text-center">
                        <blockquote className="blockquote mb-0 card-body">
                            {addDilutionWaterElements}
                        </blockquote>
                    </Card>
                </CardGroup>
                <br/>
            </div>
    );
}

export default RazbavleniyaSamogonaCalc;