import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import ResultBlockSmeshSpirt from "./ResultBlockSmeshSpirt";
import s from "../Calc.module.css";

const SmeshSpirtCalc = (props) => {
  let firstVolume = React.createRef();
  let firstStrength = React.createRef();
  let firstTemperature = React.createRef();
  let secondVolume = React.createRef();
  let secondStrength = React.createRef();
  let secondTemperature = React.createRef();

  let allValuesOnChange = () => {
    let firstVol = firstVolume.current.value;
    let firstStr = firstStrength.current.value;
    let firstTemp = firstTemperature.current.value;
    let secondVol = secondVolume.current.value;
    let secondStr = secondStrength.current.value;
    let secondTemp = secondTemperature.current.value;

    let mixedStrength = (
      (firstVol * (Number(firstStr) + 0.3 * (20 - Number(firstTemp))) +
        Number(secondVol) *
          (Number(secondStr) + 0.3 * (20 - Number(secondTemp)))) /
      (Number(firstVol) + Number(secondVol))
    ).toFixed(2);
    let mixedVolume = (Number(firstVol) + Number(secondVol)).toFixed(2);

    if (
      firstVol &&
      firstStr &&
      firstTemp &&
      secondVol &&
      secondStr &&
      secondTemp
    )
      props.addCalculateMixedStrength(mixedStrength, mixedVolume);
    props.updateAllDataMixedStrength(
      firstVol,
      firstStr,
      firstTemp,
      secondVol,
      secondStr,
      secondTemp
    );
  };

  let addCalculateMixedStrengthElements = props.calculateMixedStrengthData.map(
    (c) => (
      <ResultBlockSmeshSpirt
        volMixedStrength={c.volMixedStrength}
        volMixedVolume={c.volMixedVolume}
      />
    )
  );

  return (
    <div className="container">
      <CardGroup>
        <Card border="dark">
          <Card.Body>
            <Card.Title>Калькулятор смешивания алкоголя</Card.Title>
            <Card.Text>
              <Form.Group>
                <Form.Row>
                  <Form.Label
                    className={`${s.p10} text-md-right`}
                    column="sm"
                    lg={6}
                  >
                    Объем 1-ой жидкости:
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
                    Крепость 1-ой жидкости:
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={firstStrength}
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
                    Температура 1-ой жидкости:
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
                    Объем 2-ой жидкости:
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={secondVolume}
                      onChange={allValuesOnChange}
                      value={props.secondVol}
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
                    Крепость 2-ой жидкости:
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={secondStrength}
                      onChange={allValuesOnChange}
                      value={props.secondStr}
                      type="number"
                      placeholder="крепость, градусов"
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
                    Температура 2-ой жидкости:
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
            {addCalculateMixedStrengthElements}
          </blockquote>
        </Card>
      </CardGroup>
      <br />
    </div>
  );
};

export default SmeshSpirtCalc;
