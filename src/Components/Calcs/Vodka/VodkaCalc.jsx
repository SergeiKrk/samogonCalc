import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import ResultBlockVodka from "./ResultBlockVodka";
import s from "../Calc.module.css";

const VodkaCalc = (props) => {
  let firstVolume = React.createRef();
  let alcoholStrRef = React.createRef();
  let firstTemperature = React.createRef();
  let secondTemperature = React.createRef();

  let allValuesOnChange = () => {
    let firstVol = firstVolume.current.value;
    let firstStr = alcoholStrRef.current.value;
    let firstTemp = firstTemperature.current.value;
    let secondTemp = secondTemperature.current.value;

    let waterVol = (
      (firstVol * (Number(firstStr) + 0.3 * (20 - Number(firstTemp))) -
        40 * firstVol) /
      (40 - 0.3 * (20 - Number(secondTemp)))
    ).toFixed(2);
    let mixedVolume = (Number(firstVol) + Number(waterVol)).toFixed(2);

    if (firstVol && firstStr && firstTemp && secondTemp)
      props.addCalculateVodka(waterVol, mixedVolume);
    props.updateAllDataVodka(firstVol, firstStr, firstTemp, secondTemp);
  };

  let addCalculateVodkaElements = props.calculateVodkaData.map((c) => (
    <ResultBlockVodka
      key={c.id}
      volWaterVol={c.volWaterVol}
      volMixedVolume={c.volMixedVolume}
    />
  ));

  return (
    <div className="container">
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
                    className={`${s.p10} text-md-right`}
                    column="sm"
                    lg={6}
                  >
                    Объем спирта или дистиллята:
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={firstVolume}
                      onChange={allValuesOnChange}
                      value={props.firstVol}
                      type="number"
                      placeholder="объем, литров"
                    />
                  </Col>
                  <Col xs={3} md={2} className={`${s.p10} text-left`}>
                    , л.
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Label
                    className={`${s.p10} text-md-right`}
                    column="sm"
                    lg={6}
                  >
                    Крепость спирта или дистиллята:
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={alcoholStrRef}
                      onChange={allValuesOnChange}
                      value={props.firstStr}
                      type="number"
                      placeholder="градусов"
                    />
                  </Col>
                  <Col xs={3} md={2} className={`${s.p10} text-left`}>
                    , °
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Label
                    className={`${s.p10} text-md-right`}
                    column="sm"
                    lg={6}
                  >
                    Температура спирта или дистиллята:
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={firstTemperature}
                      onChange={allValuesOnChange}
                      value={props.firstTemp}
                      type="number"
                      placeholder="объем, литров"
                    />
                  </Col>
                  <Col xs={3} md={2} className={`${s.p10} text-left`}>
                    , °C.
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label
                    className={`${s.p10} text-md-right`}
                    column="sm"
                    lg={6}
                  >
                    Температура воды:
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={secondTemperature}
                      onChange={allValuesOnChange}
                      value={props.secondTemp}
                      type="number"
                      placeholder="крепость, градусов"
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
            {addCalculateVodkaElements}
          </blockquote>
        </Card>
      </CardGroup>
      <br />
    </div>
  );
};

export default VodkaCalc;
