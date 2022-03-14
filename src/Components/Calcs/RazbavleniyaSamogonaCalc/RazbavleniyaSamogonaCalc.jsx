import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import ResultBlock from "./ResultBlock";
import s from "../Calc.module.css";

const RazbavleniyaSamogonaCalc = (props) => {
  /*Разбавление самогона водой*/
  let InitVol = React.createRef();
  let InitFortr = React.createRef();
  let NecessFortr = React.createRef();

  let addDilutionWaterElements = props.addDilutionWaterData.map((ca) => (
    <ResultBlock addwater={ca.addwater} afterDelution={ca.afterDelution} />
  ));

  let allValuesOnChange = () => {
    let valInitVol = InitVol.current.value;
    let valInitFortr = InitFortr.current.value;
    let valNecessFortr = NecessFortr.current.value;
    let initWater = (
      (valInitVol * valInitFortr) / valNecessFortr -
      valInitVol
    ).toFixed(2);
    let reqVol = ((valInitVol * valInitFortr) / valNecessFortr).toFixed(2);

    props.updateAllDataDilute(valInitVol, valInitFortr, valNecessFortr);
    if (valInitVol && valInitFortr && valNecessFortr)
      props.addCalculateDiluteStpd(initWater, reqVol);
  };

  return (
    <div className="container">
      <CardGroup>
        <Card border="dark">
          <Card.Body>
            <Card.Title>
              Введите данные для разбавления спирта (самогона) водой
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
                    Объем разбавляемого самогона:
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={InitVol}
                      onChange={allValuesOnChange}
                      value={props.valInitVol}
                      type="number"
                      placeholder="начальный объем, литров"
                    />
                  </Col>
                  <Col className={`${s.p10} text-left`} xs={3} md={2}>
                    , л.
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Label className="text-md-right" column="sm" lg={6}>
                    Крепость разбавляемого самогона:
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={InitFortr}
                      onChange={allValuesOnChange}
                      value={props.valInitFortr}
                      type="number"
                      placeholder="начальная крепость, градусов"
                    />
                  </Col>
                  <Col xs={3} md={2} className={`${s.p10} text-left`}>
                    , °
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Label className="text-md-right" column="sm" lg={6}>
                    Крепость, которую хотите получить:
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={NecessFortr}
                      onChange={allValuesOnChange}
                      value={props.valNecessFortr}
                      type="number"
                      placeholder="требуемая крепость, градусов"
                    />
                  </Col>
                  <Col xs={3} md={2} className={`${s.p10} text-left`}>
                    , °
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
    </div>
  );
};

export default RazbavleniyaSamogonaCalc;
