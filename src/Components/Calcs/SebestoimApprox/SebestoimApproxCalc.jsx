import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tooltip } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ResultBlockSebestoimApprox from "./ResultBlockSebestoimApprox";
import s from "../Calc.module.css";

const SebestoimApproxCalc = (props) => {
  // for the allValuesOnChange function
  let rawMaterialsRef = React.createRef();
  let massMaterialsRef = React.createRef();
  let costMaterialsRef = React.createRef();
  let yeastCostRef = React.createRef();
  let wgeRef = React.createRef();
  let bentoniteCoalRef = React.createRef();
  let efficiencyRef = React.createRef();
  let headsRef = React.createRef();
  let tailsRef = React.createRef();

  let allValuesOnChange = () => {
    let rawMaterials = rawMaterialsRef.current.value;
    let massMaterials = massMaterialsRef.current.value;
    let costMaterials = costMaterialsRef.current.value;
    let yeastCost = yeastCostRef.current.value;
    let wge = wgeRef.current.value;
    let bentoniteCoal = bentoniteCoalRef.current.value;
    let efficiency = efficiencyRef.current.value;
    let heads = headsRef.current.value;
    let tails = tailsRef.current.value;

    // Объем абсолютного спирта
    let volumeAbsAlcoholApprox = (
      (Number(rawMaterials) * Number(massMaterials) * Number(efficiency)) /
      100
    ).toFixed(2);

    // Объем алкоголя питейной крепости
    let reqVolApprox = (
      (volumeAbsAlcoholApprox * (1 - (Number(heads) + Number(tails)))) /
      0.4
    ).toFixed(2);

    // Стоимость алкоголя крепостью 40
    let costLiterApprox = (
      (Number(costMaterials * massMaterials) +
        Number(wge) +
        Number(yeastCost) +
        Number(bentoniteCoal)) /
      reqVolApprox
    ).toFixed(2);
    let costHalfLiterApprox = (costLiterApprox / 2).toFixed(2);

    if (rawMaterials && massMaterials && costMaterials)
      props.addCalculateSebestoimApprox(
        costLiterApprox,
        costHalfLiterApprox,
        volumeAbsAlcoholApprox,
        reqVolApprox
      );
    props.updateAllDataSebestoimApprox(
      rawMaterials,
      massMaterials,
      costMaterials,
      yeastCost,
      wge,
      bentoniteCoal,
      efficiency,
      heads,
      tails
    );
  };

  let addCalculateSebestoimApproxElements =
    props.calculateSebestoimApproxData.map((c) => (
      <ResultBlockSebestoimApprox
        key={c.id}
        volCostLiterApprox={c.volCostLiterApprox}
        volCostHalfLiterApprox={c.volCostHalfLiterApprox}
        volAbsAlcoholApprox={c.volAbsAlcoholApprox}
        volReqVol={c.volReqVol}
      />
    ));

  const materialMassOverlay = (props) => (
    <Tooltip {...props}>
      👇 Общая масса сахара, муки, зерна или другого сырья на котором вы ставили
      брагу
    </Tooltip>
  );
  const costMaterialsOverlay = (props) => (
    <Tooltip {...props}>
      👇 Стоимость сырья (сахара, муки, зерна или др.) за 1 кг. на котором вы
      хотите ставить брагу
    </Tooltip>
  );
  const rawMaterialsOverlay = (props) => (
    <Tooltip {...props}>
      👇 Выберите из списка то сырьё, из которого хотите сделать брагу для
      самогона
    </Tooltip>
  );
  const yeastCostOverlay = (props) => (
    <Tooltip {...props}>
      👇 Стоимость того количества дрожжей, которое вы потратите на затор
    </Tooltip>
  );
  const bentoniteCostOverlay = (props) => (
    <Tooltip {...props}>
      👇 Стоимость того количества бентонита и угля, которое вы потратите на
      изготовление браги и бистиллята
    </Tooltip>
  );
  const efficiencyOverlay = (props) => (
    <Tooltip {...props}>
      👇 Эффективность вашего самогонного аппарата, измеряется в процентах от
      абсолютного значения
    </Tooltip>
  );
  const wgeCostCostOverlay = (props) => (
    <Tooltip {...props}>
      👇 Примерная стоимость того количества воды и газа (или электричества),
      которое вы потратите при изготовлении самогона
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
              <br />
              <Form.Row>
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={rawMaterialsOverlay}
                >
                  <Form.Label
                    className={`${s.p10} text-md-right`}
                    column="sm"
                    lg={6}
                  >
                    Сырье для самогона (дистиллята):
                  </Form.Label>
                </OverlayTrigger>
                <Col xs={9} md={4}>
                  <select
                    ref={rawMaterialsRef}
                    onChange={allValuesOnChange}
                    value={props.rawMaterials}
                    className="form-control"
                  >
                    <option value="0.59">Сахар-песок</option>
                    <option value="0.53">Рисовая крупа / мука</option>
                    <option value="0.45">Кукурузная крупа / мука</option>
                    <option value="0.43">Пшеничная крупа / мука</option>
                    <option value="0.39">Пшено крупа / мука</option>
                    <option value="0.35">Гречиха крупа / мука</option>
                    <option value="0.35">Ячниевая крупа / мука</option>
                    <option value="0.33">Ржаная крупа / мука</option>
                  </select>
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
                <Col xs={9} md={5}>
                  <Form.Control
                    ref={massMaterialsRef}
                    onChange={allValuesOnChange}
                    value={props.massMaterials}
                    type="number"
                    placeholder="масса, кг."
                  />
                </Col>
                <Col className={`${s.p10} text-left`} xs={3} md={1}>
                  , кг.
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
                    overlay={costMaterialsOverlay}
                  >
                    <span variant="success">Стоимость сырья за 1 кг.:</span>
                  </OverlayTrigger>
                </Form.Label>
                <Col xs={9} md={5}>
                  <Form.Control
                    ref={costMaterialsRef}
                    onChange={allValuesOnChange}
                    value={props.costMaterials}
                    type="number"
                    placeholder="стоимость, руб."
                  />
                </Col>
                <Col className={`${s.p10} text-left`} xs={3} md={1}>
                  , ₽.
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
                    overlay={wgeCostCostOverlay}
                  >
                    <span variant="success">Вода, газ / электричество:</span>
                  </OverlayTrigger>
                </Form.Label>
                <Col xs={9} md={5}>
                  <Form.Control
                    ref={wgeRef}
                    onChange={allValuesOnChange}
                    value={props.wge}
                    type="number"
                    placeholder="стоимость, руб."
                  />
                </Col>
                <Col className={`${s.p10} text-left`} xs={3} md={1}>
                  , ₽.
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
                    <span variant="success">Стоимость бентонита / угля:</span>
                  </OverlayTrigger>
                </Form.Label>
                <Col xs={9} md={5}>
                  <Form.Control
                    ref={bentoniteCoalRef}
                    onChange={allValuesOnChange}
                    value={props.bentoniteCoal}
                    type="number"
                    placeholder="стоимость, руб."
                  />
                </Col>
                <Col className={`${s.p10} text-left`} xs={3} md={1}>
                  , ₽.
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
                    overlay={efficiencyOverlay}
                  >
                    <span variant="success">КПД самогонного аппарата:</span>
                  </OverlayTrigger>
                </Form.Label>
                <Col xs={9} md={5}>
                  <Form.Control
                    ref={efficiencyRef}
                    onChange={allValuesOnChange}
                    value={props.efficiency}
                    type="number"
                    placeholder="КПД, %"
                  />
                </Col>
                <Col className={`${s.p10} text-left`} xs={3} md={1}>
                  , %
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
                    ref={headsRef}
                    onChange={allValuesOnChange}
                    value={props.heads}
                    className="form-control"
                  >
                    <option value="0.1">10%</option>
                    <option value="0.11">11%</option>
                    <option value="0.12">12%</option>
                    <option value="0.13">13%</option>
                    <option value="0.14">14%</option>
                    <option value="0.15">15%</option>
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
                    ref={tailsRef}
                    onChange={allValuesOnChange}
                    value={props.tails}
                    className="form-control"
                  >
                    <option value="0.2">20%</option>
                    <option value="0.10">10%</option>
                    <option value="0.15">15%</option>
                    <option value="0.25">25%</option>
                  </select>
                </Col>
                <Col xs={8} md={4} className={`${s.p10} text-left`}>
                  от общего объёма
                </Col>
              </Form.Row>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="dark" bg="primary" text="white" className="text-center">
          <div className="blockquote mb-0 card-body">
            {addCalculateSebestoimApproxElements}
          </div>
        </Card>
      </CardGroup>
      <br />
    </div>
  );
};

export default SebestoimApproxCalc;
