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
                    className={`${s.p10} text-right`}
                    column="sm"
                    lg={6}
                  >
                    Объем разбавляемого спирта-сырца:
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={InitVol}
                      onChange={allValuesOnChange}
                      value={props.alcoholVol}
                      type="text"
                      placeholder="объем, литров"
                    />
                  </Col>
                  <Col className={`${s.p10} text-left`} xs={3} md={2}>
                    , л.
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Label
                    className={`${s.p10} text-right`}
                    column="sm"
                    lg={6}
                  >
                    Крепость разбавляемого самогона:
                  </Form.Label>
                  <Col xs={9} md={4}>
                    <Form.Control
                      ref={InitFortr}
                      onChange={allValuesOnChange}
                      value={props.alcoholFortr}
                      type="text"
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
                    className={`${s.p10} text-right`}
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
      <br />

      <h2>Ключи "Калькулятор отбора голов"</h2>

      <p>калькулятор голов и хвостов самогонщика 927 252</p>
      <p>калькулятор самогонщика отбор голов 594 240</p>
      <p>калькулятор самогонщика онлайн расчет голов и хвостов 293 179</p>
      <p>расчет голов в спирте сырце калькулятор 106 100</p>
      <p>калькулятор самогонщика расчет голов и хвостов 414 61</p>
      <p>калькулятор самогонщика вторая перегонка отбор голов 202 59</p>
      <p>калькулятор самогонщика отбор голов и хвостов 189 54</p>
      <p>количество голов в самогоне калькулятор 47 38</p>
      <p>калькулятор самогонщика онлайн расчет голов 347 34</p>
      <p>калькулятор отбора голов самогона 55 31</p>
      <p>калькулятор самогонщика расчет голов 509 30</p>
      <p>рассчитать головы в самогоне калькулятор 45 29</p>
      <p>как посчитать головы в самогоне калькулятор 25 28</p>
      <p>калькулятор голов самогонщика 1505 27</p>
      <p>калькулятор голов и хвостов самогонщика онлайн 370 21</p>
      <p>калькулятор голов самогона 368 21</p>
      <p>калькулятор самогонщика отбор голов тела и хвостов 17 19</p>
      <p>калькулятор самогонщика отбор голов онлайн 129 16</p>
      <p>калькулятор хвостов и голов самогона 37 15</p>
      <p>отбор голов по спирту калькулятор 23 12</p>
      <p>расчет количества голов в самогоне калькулятор 11 11</p>
      <p>калькулятор самогонщика онлайн вторая перегонка отбор голов 90 10</p>
      <p>количество голов в самогоне калькулятор рассчитать 11 10</p>
      <p>отделение голов в самогоне калькулятор 10 10</p>
      <p>калькулятор абсолютного спирта и отбора голов 11 10</p>
      <p>калькулятор самогона головы тело хвосты 11 9</p>
      <p>сколько голов убирать с самогона калькулятор 8 8</p>
      <p>калькулятор самогонщика онлайн головы 513 6</p>
      <p>калькулятор самогонщика голова тело хвост 36 5</p>
      <p>калькулятор самогонщика расчет отбора голов 18 5</p>
      <p>калькулятор расчета голов самогона 33 4</p>
      <p>калькулятор снятия голов самогона 9 4</p>
      <p>калькулятор самогонщика онлайн расчет отбор голов 10 3</p>
      <p>сколько голов снимать с самогона калькулятор 22 3</p>
      <p>калькулятор спирта без голов 5 3</p>
      <p>сколько процентов хвостов забивать в калькулятор самогонщика 7 2</p>
      <p>калькулятор самогонщика голова тело 39 1</p>
      <p>калькулятор самогонщика онлайн хвосты 386 0</p>
      <p>калькулятор самогонщика скачать головы хвосты 25 0</p>
      <p>калькулятор самогонщика онлайн выход тела головы 11 0</p>
      <p>калькулятор самогонщика выход тела головы хвостов 11 0</p>
      <p>как отобрать голову калькулятор самогонщика 8 0</p>
    </div>
  );
};

export default OtborGolovCalc;
