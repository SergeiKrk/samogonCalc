import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Tooltip, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ResultBlockSebestoimost from "./ResultBlockSebestoimost";
import s from "../Calc.module.css";

const SebestoimostCalc = (props) => {
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

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      цена 1 кг. сахара, муки, зерна или другого сырья на котором вы ставили
      брагу
    </Tooltip>
  );
  debugger;
  return (
    <div className="container">
      <p>
        Тут про абсолютный спирт результаты будут правильными, если температура
        всех жидкостей 20°С.
      </p>

      <CardGroup>
        <Card border="dark">
          <Card.Body>
            <Card.Title>
              Введите данные для расчета себестоимости дистиллята (самогона)
            </Card.Title>
            <Card.Text>
              <Tabs
                defaultActiveKey="direct"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab
                  eventKey="direct"
                  title="Стоимость уже готового продукта 👈"
                >
                  <Form.Group>
                    <br />
                    <Form.Row>
                      <Form.Label
                        className={`${s.p10} text-right`}
                        column="sm"
                        lg={6}
                      >
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <span variant="success">Цена сырья за 1 кг.:</span>
                        </OverlayTrigger>
                      </Form.Label>
                      <Col xs={9} md={4}>
                        <Form.Control
                          ref={materialCostRef}
                          onChange={allValuesOnChange}
                          value={props.materialCost}
                          type="text"
                          placeholder="цена за 1 кг."
                        />
                      </Col>
                      <Col className={`${s.p10} text-left`} xs={3} md={2}>
                        , руб.
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Form.Label
                        className={`${s.p10} text-right`}
                        column="sm"
                        lg={6}
                      >
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <span variant="success">Масса сырья:</span>
                        </OverlayTrigger>
                      </Form.Label>
                      <Col xs={9} md={4}>
                        <Form.Control
                          ref={materialMassRef}
                          onChange={allValuesOnChange}
                          value={props.materialMass}
                          type="text"
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
                        className={`${s.p10} text-right`}
                        column="sm"
                        lg={6}
                      >
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <span variant="success">Стоимость дрожжей:</span>
                        </OverlayTrigger>
                      </Form.Label>
                      <Col xs={9} md={4}>
                        <Form.Control
                          ref={yeastCostRef}
                          onChange={allValuesOnChange}
                          value={props.yeastCost}
                          type="text"
                          placeholder="цена, руб."
                        />
                      </Col>
                      <Col className={`${s.p10} text-left`} xs={3} md={2}>
                        , руб.
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Form.Label
                        className={`${s.p10} text-right`}
                        column="sm"
                        lg={6}
                      >
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <span variant="success">Стоимость бентонита:</span>
                        </OverlayTrigger>
                      </Form.Label>
                      <Col xs={9} md={4}>
                        <Form.Control
                          ref={bentoniteCostRef}
                          onChange={allValuesOnChange}
                          value={props.bentoniteCost}
                          type="text"
                          placeholder="стоимость, руб."
                        />
                      </Col>
                      <Col className={`${s.p10} text-left`} xs={3} md={2}>
                        , руб.
                      </Col>
                    </Form.Row>
                    <Form.Row>
                      <Form.Label
                        className={`${s.p10} text-right`}
                        column="sm"
                        lg={6}
                      >
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <span variant="success">Стоимость угля:</span>
                        </OverlayTrigger>
                      </Form.Label>
                      <Col xs={9} md={4}>
                        <Form.Control
                          ref={coalCostRef}
                          onChange={allValuesOnChange}
                          value={props.coalCost}
                          type="text"
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
                        className={`${s.p10} text-right`}
                        column="sm"
                        lg={6}
                      >
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <span variant="success">
                            Вода, газ / электричество:
                          </span>
                        </OverlayTrigger>
                      </Form.Label>
                      <Col xs={9} md={4}>
                        <Form.Control
                          ref={wgeCostRef}
                          onChange={allValuesOnChange}
                          value={props.wgeCostCost}
                          type="text"
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
                        className={`${s.p10} text-right`}
                        column="sm"
                        lg={6}
                      >
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <span variant="success">Объем готового напитка:</span>
                        </OverlayTrigger>
                      </Form.Label>
                      <Col xs={9} md={4}>
                        <Form.Control
                          ref={volumeDrinkRef}
                          onChange={allValuesOnChange}
                          value={props.volumeDrink}
                          type="text"
                          placeholder="Объем напитка, л."
                        />
                      </Col>
                      <Col className={`${s.p10} text-left`} xs={3} md={2}>
                        , л.
                      </Col>
                    </Form.Row>
                  </Form.Group>
                </Tab>
                <Tab eventKey="before" title="👉 Примерный расчет">
                  222
                </Tab>
              </Tabs>
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
