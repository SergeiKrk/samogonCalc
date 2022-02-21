import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import ResultBlockDrobn from "./ResultBlockDrobn";
import s from "../Calc.module.css";

const DrobnayaPeregonkaCalc = (props) => {
  let rawAlcoholVol = React.createRef();
  let rawAlcoholFortr = React.createRef();
  let afterDistillingFortr = React.createRef();
  let partHead = React.createRef();
  let partTail = React.createRef();

  let allValuesOnChange = () => {
    let alcoholVol = rawAlcoholVol.current.value;
    let alcoholFortr = rawAlcoholFortr.current.value;
    let distillingFortr = afterDistillingFortr.current.value;
    let partHeadVol = partHead.current.value;
    let partTailVol = partTail.current.value;

    let absAlcohol = ((alcoholFortr * alcoholVol) / 100).toFixed(2);
    let outHeads = ((alcoholFortr * alcoholVol * partHeadVol) / 10000).toFixed(
      2
    );
    let outTails = ((alcoholFortr * alcoholVol * partTailVol) / 10000).toFixed(
      2
    );
    let reqVol = (
      (alcoholVol * alcoholFortr) / distillingFortr -
      outHeads -
      outTails
    ).toFixed(2);

    if (alcoholVol && alcoholFortr && distillingFortr)
      props.addCalculateFractional(
        absAlcohol,
        reqVol,
        outHeads,
        outTails,
        distillingFortr
      );
    props.updateAllDataFractional(
      alcoholVol,
      alcoholFortr,
      distillingFortr,
      partHeadVol,
      partTailVol
    );
  };

  let addCalculateFractionalElements = props.calculateFractionalData.map(
    (c) => (
      <ResultBlockDrobn
        volAbsAlcohol={c.volAbsAlcohol}
        reqVol={c.reqVol}
        volOutHeads={c.volOutHeads}
        volOutTails={c.volOutTails}
        distillingFortr={c.distillingFortr}
      />
    )
  );

  return (
    <p className="container">
      <CardGroup>
        <Card border="dark">
          <Card.Body>
            <Card.Title>Введите данные для второй перегонки</Card.Title>
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
                      ref={rawAlcoholVol}
                      onChange={allValuesOnChange}
                      value={props.alcoholVol}
                      type="text"
                      placeholder="начальный объем, литров"
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
                      ref={rawAlcoholFortr}
                      onChange={allValuesOnChange}
                      value={props.alcoholFortr}
                      type="text"
                      placeholder="начальная крепость, градусов"
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
                    Нужная крепость после перегона:
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={afterDistillingFortr}
                      onChange={allValuesOnChange}
                      value={props.distillingFortr}
                      type="text"
                      placeholder="требуемая крепость, градусов"
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
                <Form.Row>
                  <Form.Label
                    className={`${s.p10} text-md-right`}
                    column="sm"
                    lg={6}
                  >
                    Доля «Хвостов»:
                  </Form.Label>
                  <Col xs={4} md={2}>
                    <select
                      ref={partTail}
                      onChange={allValuesOnChange}
                      value={props.partTailVol}
                      className="form-control"
                    >
                      <option value="10">10%</option>
                      <option value="11">11%</option>
                      <option value="12">12%</option>
                      <option value="13">13%</option>
                      <option value="14">14%</option>
                      <option value="15">15%</option>
                      <option value="16">16%</option>
                      <option value="17">17%</option>
                      <option value="18">18%</option>
                      <option value="19">19%</option>
                      <option value="20">20%</option>
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
            {addCalculateFractionalElements}
          </blockquote>
        </Card>
      </CardGroup>
      <br />
    </p>
  );
};

export default DrobnayaPeregonkaCalc;
