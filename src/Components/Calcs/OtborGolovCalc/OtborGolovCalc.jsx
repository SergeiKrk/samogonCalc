import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import ResultBlockHeads from "./ResultBlockHeads";
import s from "../Calc.module.css";

const OtborGolovCalc = (props) => {
  let InitVol = React.createRef();
  let InitFortr = React.createRef();
  let partHead = React.createRef();

  let allValuesOnChange = () => {
    let alcoholVol = InitVol.current.value;
    let alcoholFortr = InitFortr.current.value;
    let partHeadVol = partHead.current.value;

    let absAlcohol = ((alcoholFortr * alcoholVol) / 100).toFixed(2);
    let outHeads = ((alcoholFortr * alcoholVol * partHeadVol) / 10000).toFixed(
      2
    );

    if (alcoholVol && alcoholFortr && partHeadVol)
      props.addCalculateHeads(absAlcohol, outHeads);
    props.updateAllDataHeads(alcoholVol, alcoholFortr, partHeadVol);
  };

  let addCalculateHeadsElements = props.calculateHeadsData.map((c) => (
    <ResultBlockHeads
      volOutHeads={c.volOutHeads}
      volAbsAlcohol={c.volAbsAlcohol}
    />
  ));

  return (
    <div className="container">
      <CardGroup>
        <Card border="dark">
          <Card.Body>
            <Card.Title>
              Введите данные для отбора "Голов" (легких ядовитых фракций,
              которые выходять при дистилляции первыми)
            </Card.Title>
            <Card.Text>
              <Form.Group>
                <br />
                <Form.Row>
                  <Form.Label
                    className={`${s.p10} text-md-right`}
                    column="sm"
                    lg={6}
                  >
                    Объем спирта-сырца:
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
                    Крепость спирта-сырца:
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
                <br />
                <Form.Row>
                  <Form.Label
                    className={`${s.p10} text-md-right`}
                    column="sm"
                    lg={6}
                  >
                    Доля «Голов»:
                  </Form.Label>
                  <Col xs={4} md={2}>
                    <select
                      ref={partHead}
                      onChange={allValuesOnChange}
                      value={props.partHeadVol}
                      className="form-control"
                    >
                      <option value="10">10%</option>
                      <option value="11">11%</option>
                      <option value="12">12%</option>
                      <option value="13">13%</option>
                      <option value="14">14%</option>
                      <option value="15">15%</option>
                    </select>
                  </Col>
                  <Col xs={8} md={4} className={`${s.p10} text-left`}>
                    от общего объёма
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
    </div>
  );
};

export default OtborGolovCalc;
