import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import PoslePervojResultBlock from "./PoslePervojResultBlock";

const PoslePervojCalc = (props) => {
  /*Разбавление самогона водой*/
  let InitVol = React.createRef();
  let InitFortr = React.createRef();
  let NecessFortr = React.createRef();

  let addDilutionWaterElements = props.addDilutionWaterData.map((ca) => (
    <PoslePervojResultBlock
      addwater={ca.addwater}
      afterDelution={ca.afterDelution}
    />
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
      <p>
        После первой перегонки необходимо разбавить дистиллят. Важный момент —
        результаты будут правильными, если температура всех жидкостей 20°С.
      </p>
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
                  <Form.Label column="sm" lg={6}>
                    Объем разбавляемого самогона:
                  </Form.Label>
                  <Col>
                    <Form.Control
                      ref={InitVol}
                      onChange={allValuesOnChange}
                      value={props.valInitVol}
                      type="text"
                      placeholder="начальный объем, литров"
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column="sm" lg={6}>
                    Крепость разбавляемого самогона:
                  </Form.Label>
                  <Col>
                    <Form.Control
                      ref={InitFortr}
                      onChange={allValuesOnChange}
                      value={props.valInitFortr}
                      type="text"
                      placeholder="начальная крепость, градусов"
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column="sm" lg={6}>
                    Крепость, которую хотите получить:
                  </Form.Label>
                  <Col>
                    {/* <Form.Control ref={NecessFortr} onChange={allValuesOnChange} value={props.valNecessFortr} type="text" placeholder="требуемая крепость, градусов" /> */}
                    <select
                      ref={NecessFortr}
                      onChange={allValuesOnChange}
                      value={props.valNecessFortr}
                      className="form-control"
                    >
                      <option value="20">20% от общего объёма</option>
                      <option value="10">10% от общего объёма</option>
                      <option value="15">15% от общего объёма</option>
                      <option value="25">25% от общего объёма</option>
                    </select>
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
      <br />
    </div>
  );
};

export default PoslePervojCalc;
