import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import ResultBlockDrobn from "./ResultBlockDrobn";

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
      <p>
        Чтобы разбавить дистиллят до нужной крепости, воспользуйтесь
        калькулятором разбавления самогона водой. В онлайн режиме он поможет
        подобрать пропорции воды и самогона. Нужно лишь вписать в программу 3
        параметра: первоначальный объем, крепость самогона и требуемую крепость.
        Калькулятор мгновенно произведет нужные расчеты и выдаст результат.
        Например: у вас есть 5 литров сортировки крепостью 62%, вам нужно
        разбавить ее до 40%. Заполнив 3 поля в онлайн калькуляторы, мы видим
        результат: необходимо долить 2,75 литров воды. Важный момент —
        результаты будут правильными, если температура всех жидкостей 20°С.
      </p>
      <h2>Ключи "Дробная перегонка"</h2>
      Фраза База " "<p>калькулятор дробной перегонки спирта сырца 405 212</p>
      <p>калькулятор самогонщика онлайн вторая перегонка 1026 163</p>
      <p>калькулятор дробной перегонки спирта сырца онлайн 70 69</p>
      <p>калькулятор выхода спирта из спирта сырца 80 55</p>
      <p>калькулятор самогонщика дробная перегонка 117 47</p>
      <p>калькулятор второй перегонки самогона 2264 40</p>
      <p>калькулятор спирта сырца 1060 37</p>
      <p>выход самогона при второй перегонке калькулятор 33 36</p>
      <p>калькулятор самогонщика вторая перегонка 2447 31</p>
      <p>калькулятор перегонки спирта сырца 616 29</p>
      <p>дробная перегонка самогона калькулятор 53 26</p>
      <p>калькулятор дробной перегонки самогона онлайн бесплатно 19 19</p>
      <p>калькулятор дробной перегонки спирта 442 19</p>
      <p>калькулятор перегонки спирта сырца онлайн 104 16</p>
      <p>калькулятор второй дробной перегонки спирта сырца 15 16</p>
      <p>калькулятор второго перегона самогона 89 14</p>
      <p>калькулятор самогонщика 2 перегонка 12 13</p>
      <p>калькулятор самогонщика онлайн вторая 1082 11</p>
      <p>калькулятор самогонщика второй перегон 38 11</p>
      <p>калькулятор самогонщика онлайн расчет второй перегон 13 11</p>
      <p>калькулятор выхода спирта 171 9</p>
      <p>онлайн калькулятор дробной перегонки спирта сердца 11 9</p>
      <p>калькулятор самогонщика онлайн вторая перегонка отбор 97 8</p>
      <p>вторая перегонка самогона какая пропорция калькулятор 35 8</p>
      <p>калькулятор отбора тела самогона 7 8</p>
      <p>калькулятор дробления самогона 7 7</p>
      <p>калькулятор выхода самогона из спирта сырца 6 7</p>
      <p>калькулятор перегонки спирта 719 7</p>
      <p>калькулятор самогонщика вторая перегонка спирта сырца 47 6</p>
      <p>калькулятор дробного перегона самогона 7 6</p>
      <p>калькулятор расчета спирта из сырца 10 6</p>
      <p>калькулятор скорости отбора спирта 5 6</p>
      <p>калькулятор самогонщика онлайн дробная перегонка 5 5</p>
      <p>калькулятор перегона самогона 123 5</p>
      <p>калькулятор второй перегонки спирта 198 5</p>
      <p>выход спирта при второй перегонке калькулятор 5 5</p>
      <p>калькулятор для расчета дробного перегона спирта 5 5</p>
      <p>калькулятор самогонщика спирт сырец 103 4</p>
      <p>калькулятор ректификации спирта 14 4</p>
      <p>дробная перегонка спирта сырца таблица калькулятор 13 4</p>
      <p>вторая перегонка спирта сырца на колонне калькулятор 7 4</p>
      <p>калькулятор самогонщика отбор 607 1</p>
      <p>калькулятор самогонщика онлайн расчет вторая перегонка 357 1</p>
      <p>калькулятор самогонщика дробная 122 1</p>
      <p>перегонка самогона калькулятор 2723 1</p>
      <p>калькулятор самогонщика перегонка 2976 0</p>
      <p>калькулятор самогонщика вторая перегонка отбор 209 0</p>
      <p>калькулятор самогонщика сырец 108 0</p>
      <p>калькулятор самогонщика онлайн расчет спирта сырца 24 0</p>
      <p>калькулятор самогонщика онлайн вторая перегонка спирта 21 0</p>
      <p>калькулятор самогонщика онлайн выход тела 11 0</p>
      <p>калькулятор самогонщика выход тела 11 0</p>
      <p>дробный калькулятор спирта сырца 407 0</p>
      <p>калькулятор отбора спирта 54 0</p>
      <p>калькулятор дробной перегонки спирта сырца русская 42 0</p>
      <p>калькулятор для спирта сырца онлайн 17 0</p>
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
                    Объем спирта-сырца:
                  </Form.Label>
                  <Col>
                    <Form.Control
                      ref={rawAlcoholVol}
                      onChange={allValuesOnChange}
                      value={props.alcoholVol}
                      type="text"
                      placeholder="начальный объем, литров"
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column="sm" lg={6}>
                    Крепость спирта-сырца:
                  </Form.Label>
                  <Col>
                    <Form.Control
                      ref={rawAlcoholFortr}
                      onChange={allValuesOnChange}
                      value={props.alcoholFortr}
                      type="text"
                      placeholder="начальная крепость, градусов"
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column="sm" lg={6}>
                    Нужная крепость после перегона:
                  </Form.Label>
                  <Col>
                    <Form.Control
                      ref={afterDistillingFortr}
                      onChange={allValuesOnChange}
                      value={props.distillingFortr}
                      type="text"
                      placeholder="требуемая крепость, градусов"
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column="sm" lg={6}>
                    Доля «Голов»:
                  </Form.Label>
                  <Col>
                    <select
                      ref={partHead}
                      onChange={allValuesOnChange}
                      value={props.partHeadVol}
                      className="form-control"
                    >
                      <option value="10">10% от общего объёма</option>
                      <option value="11">11% от общего объёма</option>
                      <option value="12">12% от общего объёма</option>
                      <option value="13">13% от общего объёма</option>
                      <option value="14">14% от общего объёма</option>
                      <option value="15">15% от общего объёма</option>
                    </select>
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column="sm" lg={6}>
                    Доля «Хвостов»:
                  </Form.Label>
                  <Col>
                    <select
                      ref={partTail}
                      onChange={allValuesOnChange}
                      value={props.partTailVol}
                      className="form-control"
                    >
                      <option value="10">10% от общего объёма</option>
                      <option value="11">11% от общего объёма</option>
                      <option value="12">12% от общего объёма</option>
                      <option value="13">13% от общего объёма</option>
                      <option value="14">14% от общего объёма</option>
                      <option value="15">15% от общего объёма</option>
                      <option value="16">16% от общего объёма</option>
                      <option value="17">17% от общего объёма</option>
                      <option value="18">18% от общего объёма</option>
                      <option value="19">19% от общего объёма</option>
                      <option value="20">20% от общего объёма</option>
                    </select>
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
