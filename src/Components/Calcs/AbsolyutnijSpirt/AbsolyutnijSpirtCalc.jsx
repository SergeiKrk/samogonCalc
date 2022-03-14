import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import ResultBlockAbsolyutnijSpirt from "./ResultBlockAbsolyutnijSpirt";
import s from "../Calc.module.css";

const AbsolyutnijSpirtCalc = (props) => {
  let InitVol = React.createRef();
  let InitFortr = React.createRef();
  let InitTemperature = React.createRef();

  let allValuesOnChange = () => {
    let alcoholVol = InitVol.current.value;
    let alcoholFortr = InitFortr.current.value;
    let firstTemp = InitTemperature.current.value;

    let strenghth = (
      Number(alcoholFortr) +
      0.3 * (20 - Number(firstTemp))
    ).toFixed(2);
    let absAlcohol = ((strenghth * alcoholVol) / 100).toFixed(2);
    let outHeads = ((strenghth * alcoholVol) / 10000).toFixed(2);

    if (alcoholVol && alcoholFortr && firstTemp)
      props.addCalculateHeads(absAlcohol, outHeads, strenghth);
    props.updateAllDataHeads(alcoholVol, alcoholFortr, firstTemp);
  };

  let addCalculateHeadsElements = props.calculateHeadsData.map((c) => (
    <ResultBlockAbsolyutnijSpirt
      volOutHeads={c.volOutHeads}
      volAbsAlcohol={c.volAbsAlcohol}
      volClearAlc={(c.volAbsAlcohol * 1.038421599169263).toFixed(2)}
    />
  ));

  return (
    <div className="container">
      <CardGroup>
        <Card border="dark">
          <Card.Body>
            <Card.Text>
              <Form.Group>
                <br />
                <Form.Row>
                  <Form.Label
                    className={`${s.p10} text-md-right`}
                    column="sm"
                    lg={6}
                  >
                    Объем самогона:
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={InitVol}
                      onChange={allValuesOnChange}
                      value={props.alcoholVol}
                      type="number"
                      placeholder="объем, литров"
                    />
                  </Col>
                  <Col className={`${s.p10} text-left`} xs={3} md={2}>
                    , л.
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Label
                    className={`${s.p10} text-md-right`}
                    column="sm"
                    lg={6}
                  >
                    Крепость самогона:
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={InitFortr}
                      onChange={allValuesOnChange}
                      value={props.alcoholFortr}
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
                    Температура самогона:
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={InitTemperature}
                      onChange={allValuesOnChange}
                      value={props.firstTemp}
                      type="number"
                      placeholder="температура, °C"
                    />
                  </Col>
                  <Col xs={3} md={2} className={`${s.p10} text-left`}>
                    , °C
                  </Col>
                </Form.Row>
              </Form.Group>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="dark" bg="primary" text="white" className="text-center">
          <blockquote className="blockquote mb-0 card-body">
            {addCalculateHeadsElements}
          </blockquote>
        </Card>
      </CardGroup>
      <br />
    </div>
  );
};

export default AbsolyutnijSpirtCalc;
