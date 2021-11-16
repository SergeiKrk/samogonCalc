import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import ResultBlockTemperature from "./ResultBlockTemperature";
import s from "../Calc.module.css";

const TemperatureCalc = (props) => {
  let firstTempRef = React.createRef();
  let firstStrRef = React.createRef();

  let allValuesOnChange = () => {
    let firstTemp = firstTempRef.current.value;
    let firstStr = firstStrRef.current.value;

    let Strenghth = (Number(firstStr) + 0.3 * (20 - Number(firstTemp))).toFixed(
      2
    );

    if (firstStr && firstTemp) props.addCalculateTemperature(Strenghth);
    props.updateAllDataTemperature(firstStr, firstTemp);
  };

  let addCalculateTemperatureElements = props.calculateTemperatureData.map(
    (c) => <ResultBlockTemperature key={c.id} volStrenghth={c.volStrenghth} />
  );
  return (
    <div className="container">
      <p>
        У Вас есть медицинский спирт или крепкий дистиллят (самогон) из которого
        хотите получить водку? Воспользуйтесь калькулятором водки, чтобы узнать,
        какой объем напитка получится после разбавления и сколько нужно добавить
        воды к имеющемуся объему спирта.
      </p>

      <CardGroup>
        <Card border="dark">
          <Card.Body>
            <Card.Title>
              Введите данные для разбавления до водочной крепости
            </Card.Title>
            <Card.Text>
              <Form.Group>
                <Form.Row>
                  <Form.Label
                    className={`${s.p10} text-right`}
                    column="sm"
                    lg={6}
                  >
                    Крепость по спиртометру:
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={firstStrRef}
                      onChange={allValuesOnChange}
                      value={props.firstStr}
                      type="text"
                      placeholder="градусов"
                    />
                  </Col>
                  <Col xs={3} md={2} className={`${s.p10} text-left`}>
                    , °
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Label
                    className={`${s.p10} text-right`}
                    column="sm"
                    lg={6}
                  >
                    Температура спирта:
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={firstTempRef}
                      onChange={allValuesOnChange}
                      value={props.firstTemp}
                      type="text"
                      placeholder="температура, градусов"
                    />
                  </Col>
                  <Col xs={3} md={2} className={`${s.p10} text-left`}>
                    , °C.
                  </Col>
                </Form.Row>
              </Form.Group>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="dark" bg="primary" text="white" className="text-center">
          <blockquote className="blockquote mb-0 card-body">
            {addCalculateTemperatureElements}
          </blockquote>
        </Card>
      </CardGroup>
      <br />
    </div>
  );
};

export default TemperatureCalc;
