import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import ResultBlockZamena from "./ResultBlockZamena";
import s from "../Calc.module.css";

const ZamenaCalc = (props) => {
  let sugarRef = React.createRef();

  let allValuesOnChange = () => {
    let sugar = sugarRef.current.value;

    let glucose = (sugar * 1.05).toFixed(2);

    if (sugar) props.addCalculateZamena(glucose);
    props.updateAllDataZamena(sugar);
  };

  let addCalculateZamenaElements = props.calculateZamenaData.map((c) => (
    <ResultBlockZamena key={c.id} volGlucose={c.volGlucose} />
  ));
  return (
    <div className="container">
      <CardGroup>
        <Card border="dark">
          <Card.Body>
            <Card.Title>Введите данные для расчетов</Card.Title>
            <Card.Text>
              <Form.Group>
                <Form.Row>
                  <Form.Label
                    className={`${s.p10} text-md-right`}
                    column="sm"
                    lg={6}
                  >
                    Количество сахара:
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={sugarRef}
                      onChange={allValuesOnChange}
                      value={props.sugar}
                      type="text"
                      placeholder="масса сахара"
                    />
                  </Col>
                  <Col xs={3} md={2} className={`${s.p10} text-left`}>
                    , кг.
                  </Col>
                </Form.Row>
              </Form.Group>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="dark" bg="primary" text="white" className="text-center">
          <blockquote className="blockquote mb-0 card-body">
            {addCalculateZamenaElements}
          </blockquote>
        </Card>
      </CardGroup>
      <br />
    </div>
  );
};

export default ZamenaCalc;
