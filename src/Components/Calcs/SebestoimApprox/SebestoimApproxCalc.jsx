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
  // for the allValuesOnChangeTwo function
  let rawMaterialsRef = React.createRef();
  let massMaterialsRef = React.createRef();
  let costMaterialsRef = React.createRef();
  let wgeRef = React.createRef();
  let bentoniteCoalRef = React.createRef();
  let efficiencyRef = React.createRef();
  let headsRef = React.createRef();
  let tailsRef = React.createRef();

  let allValuesOnChangeTwo = () => {
    let rawMaterials = rawMaterialsRef.current.value;
    let massMaterials = massMaterialsRef.current.value;
    let costMaterials = costMaterialsRef.current.value;
    let wge = wgeRef.current.value;
    let bentoniteCoal = bentoniteCoalRef.current.value;
    let efficiency = efficiencyRef.current.value;
    let heads = headsRef.current.value;
    let tails = tailsRef.current.value;

    let costLiterApprox = (
      ((Number(costMaterials) * Number(massMaterials) +
        Number(wge) +
        Number(bentoniteCoal) +
        Number(efficiency)) *
        (Number(heads) + Number(tails))) /
      (Number(rawMaterials) * Number(massMaterials))
    ).toFixed(2);
    let costHalfLiterApprox = (costLiterApprox / 2).toFixed(2);
    let volumeDrinkApprox = (
      Number(rawMaterials) * Number(massMaterials)
    ).toFixed(2);

    if (rawMaterials && massMaterials && costMaterials)
      props.addCalculateSebestoimApprox(
        costLiterApprox,
        costHalfLiterApprox,
        volumeDrinkApprox
      );
    props.updateAllDataSebestoimApprox(
      rawMaterials,
      massMaterials,
      costMaterials,
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
        volDrinkApprox={c.volDrinkApprox}
      />
    ));

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      цена 1 кг. сахара, муки, зерна или другого сырья на котором вы ставили
      брагу
    </Tooltip>
  );

  return (
    <div className="container">
      <br />
      <h2>Оцените примерную стоимость самогона</h2>
      <p>
        Если брагу еще не ставили, но хотите хотя бы примерно оценить
        себестоимость будущего напитка.
      </p>

      <CardGroup>
        <Card border="dark">
          <Card.Body>
            <Card.Title>
              Введите данные для расчета себестоимости дистиллята (самогона)
            </Card.Title>
            <Card.Text>
              <br />
              <Form.Row>
                <Form.Label
                  className={`${s.p10} text-right`}
                  column="sm"
                  lg={6}
                >
                  rawMaterials Сырье для самогона (дистиллята):
                </Form.Label>
                <Col xs={6} md={6}>
                  <select
                    ref={rawMaterialsRef}
                    onChange={allValuesOnChangeTwo}
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
                  className={`${s.p10} text-right`}
                  column="sm"
                  lg={6}
                >
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <span variant="success">(massMaterials) Масса сырья:</span>
                  </OverlayTrigger>
                </Form.Label>
                <Col xs={9} md={5}>
                  <Form.Control
                    ref={massMaterialsRef}
                    onChange={allValuesOnChangeTwo}
                    value={props.massMaterials}
                    type="text"
                    placeholder="масса, кг."
                  />
                </Col>
                <Col className={`${s.p10} text-left`} xs={3} md={1}>
                  , кг.
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
                    <span variant="success">
                      costMaterials Стоимость сырья за 1 кг.:
                    </span>
                  </OverlayTrigger>
                </Form.Label>
                <Col xs={9} md={5}>
                  <Form.Control
                    ref={costMaterialsRef}
                    onChange={allValuesOnChangeTwo}
                    value={props.costMaterials}
                    type="text"
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
                      wge Вода, газ / электричество:
                    </span>
                  </OverlayTrigger>
                </Form.Label>
                <Col xs={9} md={5}>
                  <Form.Control
                    ref={wgeRef}
                    onChange={allValuesOnChangeTwo}
                    value={props.wge}
                    type="text"
                    placeholder="стоимость, руб."
                  />
                </Col>
                <Col className={`${s.p10} text-left`} xs={3} md={1}>
                  , ₽.
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
                    <span variant="success">
                      bentoniteCoal Стоимость бентонита / угля:
                    </span>
                  </OverlayTrigger>
                </Form.Label>
                <Col xs={9} md={5}>
                  <Form.Control
                    ref={bentoniteCoalRef}
                    onChange={allValuesOnChangeTwo}
                    value={props.bentoniteCoal}
                    type="text"
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
                      efficiency КПД самогонного аппарата:
                    </span>
                  </OverlayTrigger>
                </Form.Label>
                <Col xs={9} md={5}>
                  <Form.Control
                    ref={efficiencyRef}
                    onChange={allValuesOnChangeTwo}
                    value={props.efficiency}
                    type="text"
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
                  className={`${s.p10} text-right`}
                  column="sm"
                  lg={6}
                >
                  heads Доля «Голов»:
                </Form.Label>
                <Col xs={4} md={2}>
                  <select
                    ref={headsRef}
                    onChange={allValuesOnChangeTwo}
                    value={props.heads}
                    className="form-control"
                  >
                    <option value="0.10">10%</option>
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
                  className={`${s.p10} text-right`}
                  column="sm"
                  lg={6}
                >
                  tails Доля «Хвостов»:
                </Form.Label>
                <Col xs={4} md={2}>
                  <select
                    ref={tailsRef}
                    onChange={allValuesOnChangeTwo}
                    value={props.tails}
                    className="form-control"
                  >
                    <option value="0.20">20%</option>
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
