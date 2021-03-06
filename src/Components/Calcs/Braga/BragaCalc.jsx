import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tooltip } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ResultBlockBraga from "./ResultBlockBraga";
import s from "../Calc.module.css";

const BragaCalc = (props) => {
  // for the allValuesOnChange function
  let rawMaterialsRef = React.createRef();
  let massMaterialsRef = React.createRef();
  let mashVolumeRef = React.createRef();

  let allValuesOnChange = () => {
    let rawMaterials = rawMaterialsRef.current.value;
    let massMaterials = massMaterialsRef.current.value;
    let mashVolume = mashVolumeRef.current.value;

    let rawAlcohol = (
      (Number(rawMaterials) * Number(massMaterials)) /
      0.4
    ).toFixed(2);

    let rawDensity =
      rawMaterials === "0.59"
        ? 1.587
        : rawMaterials === "0.53"
        ? 0.65
        : rawMaterials === "0.45"
        ? 0.9
        : 0.8;

    let waterVolume = (Number(mashVolume) - massMaterials / rawDensity).toFixed(
      2
    );

    let alcoholStrength = (
      (Number(rawMaterials) * Number(massMaterials) * 100) /
      Number(mashVolume)
    ).toFixed(2);

    if (rawMaterials && massMaterials && mashVolume)
      props.addCalculateBraga(rawAlcohol, waterVolume, alcoholStrength);
    props.updateAllDataBraga(rawMaterials, massMaterials, mashVolume);
  };

  let addCalculateBragaElements = props.calculateBragaData.map((c) => (
    <ResultBlockBraga
      key={c.id}
      volRawAlcohol={c.volRawAlcohol}
      volWaterVolume={c.volWaterVolume}
      volAlcoholStrength={c.volAlcoholStrength}
    />
  ));

  const rawMaterialsOverlay = (props) => (
    <Tooltip {...props}>
      👇 Выберите из списка то сырьё, из которого хотите сделать или уже сделали
      брагу для самогона
    </Tooltip>
  );
  const materialMassOverlay = (props) => (
    <Tooltip {...props}>
      👇 Общая масса сахара, муки, зерна или другого сырья из которого брага
    </Tooltip>
  );
  const mashVolumeOverlay = (props) => (
    <Tooltip {...props}>👇 Объем сусла или уже готовой браги</Tooltip>
  );

  return (
    <div className="container">
      <CardGroup>
        <Card border="dark">
          <Card.Body>
            <Card.Title>Введите данные для расчета:</Card.Title>
            <Card.Text>
              <Form.Group>
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
                  <Col xs={6} md={6}>
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
                      overlay={mashVolumeOverlay}
                    >
                      <span variant="success">Объем браги:</span>
                    </OverlayTrigger>
                  </Form.Label>
                  <Col xs={9} md={5}>
                    <Form.Control
                      ref={mashVolumeRef}
                      onChange={allValuesOnChange}
                      value={props.mashVolume}
                      type="number"
                      placeholder="объем, л."
                    />
                  </Col>
                  <Col className={`${s.p10} text-left`} xs={3} md={1}>
                    , л.
                  </Col>
                </Form.Row>
              </Form.Group>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="dark" bg="primary" text="white" className="text-center">
          <div className="blockquote mb-0 card-body">
            {addCalculateBragaElements}
          </div>
        </Card>
      </CardGroup>
      <br />
    </div>
  );
};

export default BragaCalc;
