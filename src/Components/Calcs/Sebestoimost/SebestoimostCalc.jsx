import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tooltip } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ResultBlockSebestoimost from "./ResultBlockSebestoimost";
import s from "../Calc.module.css";

const SebestoimostCalc = (props) => {
  // for the allValuesOnChange function
  let materialCostRef = React.createRef();
  let materialMassRef = React.createRef();
  let yeastCostRef = React.createRef();
  let bentoniteCostRef = React.createRef();
  let coalCostRef = React.createRef();
  let wgeCostRef = React.createRef();
  let volumeDrinkRef = React.createRef();

  let allValuesOnChange = () => {
    let materialCost = materialCostRef.current.value;
    let materialMass = materialMassRef.current.value;
    let yeastCost = yeastCostRef.current.value;
    let bentoniteCost = bentoniteCostRef.current.value;
    let coalCost = coalCostRef.current.value;
    let wgeCostCost = wgeCostRef.current.value;
    let volumeDrinkCost = volumeDrinkRef.current.value;

    let costLiter = (
      (Number(materialCost) * Number(materialMass) +
        Number(yeastCost) +
        Number(bentoniteCost) +
        Number(coalCost) +
        Number(wgeCostCost)) /
      volumeDrinkCost
    ).toFixed(2);
    let costHalfLiter = (costLiter / 2).toFixed(2);

    let volumeDrink = volumeDrinkCost;

    if (materialCost && materialMass && yeastCost && volumeDrinkCost)
      props.addCalculateSebestoimost(costLiter, costHalfLiter, volumeDrink);
    props.updateAllDataSebestoimost(
      materialCost,
      materialMass,
      yeastCost,
      bentoniteCost,
      coalCost,
      wgeCostCost,
      volumeDrinkCost
    );
  };

  let addCalculateSebestoimostElements = props.calculateSebestoimostData.map(
    (c) => (
      <ResultBlockSebestoimost
        key={c.id}
        volCostLiter={c.volCostLiter}
        volCostHalfLiter={c.volCostHalfLiter}
        volDrink={c.volDrink}
      />
    )
  );

  const materialMassOverlay = (props) => (
    <Tooltip {...props}>
      👇 Общая масса сахара, муки, зерна или другого сырья на котором вы ставили
      брагу
    </Tooltip>
  );
  const yeastCostOverlay = (props) => (
    <Tooltip {...props}>
      👇 Стоимость того количества дрожжей, которое вы потратили на затор
    </Tooltip>
  );
  const bentoniteCostOverlay = (props) => (
    <Tooltip {...props}>
      👇 Стоимость того количества бентонита, которое вы потратили на брагу
    </Tooltip>
  );
  const coalCostOverlay = (props) => (
    <Tooltip {...props}>
      👇 Стоимость того количества угля, которое вы потратили при изготовлении
      самогона
    </Tooltip>
  );
  const wgeCostCostOverlay = (props) => (
    <Tooltip {...props}>
      👇 Стоимость того количества воды и газа (или электричества), которое вы
      потратили при изготовлении самогона
    </Tooltip>
  );
  const volumeDrinkOverlay = (props) => (
    <Tooltip {...props}>
      👇 Сколько самогона (дистиллята) получилось в итоге
    </Tooltip>
  );

  const materialCostOverlay = (props) => (
    <Tooltip {...props}>
      👇 цена 1 кг. сахара, муки, зерна или другого сырья на котором вы ставили
      брагу
    </Tooltip>
  );

  return (
    <div className="container">
      <CardGroup>
        <Card border="dark">
          <Card.Body>
            <Card.Title>
              Введите данные для расчета себестоимости дистиллята (самогона)
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
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={materialCostOverlay}
                    >
                      <span variant="success">Цена сырья за 1 кг.:</span>
                    </OverlayTrigger>
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={materialCostRef}
                      onChange={allValuesOnChange}
                      value={props.materialCost}
                      type="number"
                      placeholder="цена за 1 кг."
                    />
                  </Col>
                  <Col className={`${s.p10} text-left`} xs={3} md={2}>
                    , руб.
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Label
                    className={`${s.p10} text-md-right`}
                    column="sm"
                    lg={6}
                  >
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={materialMassOverlay}
                    >
                      <span variant="success">Масса сырья:</span>
                    </OverlayTrigger>
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={materialMassRef}
                      onChange={allValuesOnChange}
                      value={props.materialMass}
                      type="number"
                      placeholder="масса, кг."
                    />
                  </Col>
                  <Col className={`${s.p10} text-left`} xs={3} md={2}>
                    , кг.
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label
                    className={`${s.p10} text-md-right`}
                    column="sm"
                    lg={6}
                  >
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={yeastCostOverlay}
                    >
                      <span variant="success">Стоимость дрожжей:</span>
                    </OverlayTrigger>
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={yeastCostRef}
                      onChange={allValuesOnChange}
                      value={props.yeastCost}
                      type="number"
                      placeholder="цена, руб."
                    />
                  </Col>
                  <Col className={`${s.p10} text-left`} xs={3} md={2}>
                    , руб.
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Label
                    className={`${s.p10} text-md-right`}
                    column="sm"
                    lg={6}
                  >
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={bentoniteCostOverlay}
                    >
                      <span variant="success">Стоимость бентонита:</span>
                    </OverlayTrigger>
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={bentoniteCostRef}
                      onChange={allValuesOnChange}
                      value={props.bentoniteCost}
                      type="number"
                      placeholder="стоимость, руб."
                    />
                  </Col>
                  <Col className={`${s.p10} text-left`} xs={3} md={2}>
                    , руб.
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Label
                    className={`${s.p10} text-md-right`}
                    column="sm"
                    lg={6}
                  >
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={coalCostOverlay}
                    >
                      <span variant="success">Стоимость угля:</span>
                    </OverlayTrigger>
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={coalCostRef}
                      onChange={allValuesOnChange}
                      value={props.coalCost}
                      type="number"
                      placeholder="стоимость, руб."
                    />
                  </Col>
                  <Col className={`${s.p10} text-left`} xs={3} md={2}>
                    , руб.
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Label
                    className={`${s.p10} text-md-right`}
                    column="sm"
                    lg={6}
                  >
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={wgeCostCostOverlay}
                    >
                      <span variant="success">Вода, газ / электричество:</span>
                    </OverlayTrigger>
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={wgeCostRef}
                      onChange={allValuesOnChange}
                      value={props.wgeCostCost}
                      type="number"
                      placeholder="стоимость, руб."
                    />
                  </Col>
                  <Col className={`${s.p10} text-left`} xs={3} md={2}>
                    , руб.
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label
                    className={`${s.p10} text-md-right`}
                    column="sm"
                    lg={6}
                  >
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={volumeDrinkOverlay}
                    >
                      <span variant="success">Объем готового напитка:</span>
                    </OverlayTrigger>
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={volumeDrinkRef}
                      onChange={allValuesOnChange}
                      value={props.volumeDrink}
                      type="number"
                      placeholder="Объем напитка, л."
                    />
                  </Col>
                  <Col className={`${s.p10} text-left`} xs={3} md={2}>
                    , л.
                  </Col>
                </Form.Row>
              </Form.Group>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="dark" bg="primary" text="white" className="text-center">
          <div className="blockquote mb-0 card-body">
            {addCalculateSebestoimostElements}
          </div>
        </Card>
      </CardGroup>
      <br />
    </div>
  );
};

export default SebestoimostCalc;
