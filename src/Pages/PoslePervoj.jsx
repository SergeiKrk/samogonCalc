import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import PoslePervojCalcContainer from "../Components/Calcs/PoslePervojCalc/PoslePervojCalcContainer";
import React from "react";
import poslePervojImg from "../assets/img/razbavlenie-samogona-vodoj-posle-pervoj-peregonki.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const PoslePervoj = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${poslePervojImg}`,
          Title: "Расчет разбавления самогона водой (после первого перегона)",
          Description:
            "Поможет подготовить спирт-сырец к дробной перегонке, рассчитать пропорции и разбавить его до приемлемой крепости для производства качественного дистиллята",
          Href: "razbavlenie-samogona-vodoj-posle-pervoj-peregonki",
          titleSeo:
            "Калькулятор самогонщика: разбавление самогона водой после первой перегонки",
          descriptionSeo:
            "Калькулятор подскажет, как разбавить спирт-сырец (первый самогон) водой для второго перегона до нужной крепости",
          urlSeo:
            "https://samogoncalc.ru/razbavlenie-samogona-vodoj-posle-pervoj-peregonki/",
        }}
      />

      <Container>
        <Row>
          <Col className="text-left" md={{ span: 8, offset: 2 }}></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="text-left" md={{ span: 8, offset: 2 }}>
            <p>
              Чтобы разбавить спирт-сырец водой до оптимальной для второй
              перегонки крепости в 20°, нужно выяснить, какой объем воды
              необходимо долить в самогон.
            </p>
          </Col>
        </Row>
      </Container>

      <PoslePervojCalcContainer />
      <Container>
        <Row>
          <Col className="text-left" md={{ span: 8, offset: 2 }}>
            <p>
              Считается, что домашний самогон по качеству превосходит фабричную
              водку и многие крепкие напитки из магазина. Но это не совсем так.
              Качественный чистый самогон, получается только при соблюдении
              технологии: обязательной двойной перегонке, максимальном отделении
              вредных примесей и оптимальной крепости напитка, составляющей
              40-45 градусов.
            </p>
            <Card className="mb-4 mt-3" bg="light" border="dark" body>
              <h2>Зачем разбавлять спирт-сырец перед второй перегонкой</h2>
              <p>
                Для более качественного разделения фракций спирт сырец
                разбавляют до 20-25 градусов. Также я бы посоветовал еще после
                разбавления перед перегонкой спирт сырец проуглевать, так как
                при такой концентрации спирта сивушные масла выходят из
                связанного состояния и часть их перед перегоном можно убрать
                активированным углем.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default PoslePervoj;
