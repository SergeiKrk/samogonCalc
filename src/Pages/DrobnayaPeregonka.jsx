import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import React from "react";
import drobnImg from "../assets/img/kalkulyator-drobnoj-peregonki.png";
import DrobnayaPeregonkaCalcContainer from "../Components/Calcs/DrobnayaPeregonka/DrobnayaPeregonkaCalcContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const DrobnayaPeregonka = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${drobnImg}`,
          Title: "Калькулятор дробной перегонки спирта-сырца",
          Description:
            "Хотите начать дробную перегонку? Я помогу отобрать головы и хвосты!",
          Href: "kalkulyator-drobnoj-peregonki",
          titleSeo:
            "Калькулятор дробной (второй) перегонки спирта-сырца: Онлайн расчет",
          descriptionSeo:
            "Онлайн калькулятор быстро и точно рассчитает параметры дробной (второй) перегонки, подскажет как развести самогон (дистиллята) водой. Поможет рассчитать объем хвостов и голов.",
          urlSeo: "https://samogoncalc.ru/kalkulyator-drobnoj-peregonki/",
        }}
      />
      <Container>
        <Row>
          <Col className="text-left mb-3" md={{ span: 8, offset: 2 }}>
            <p>
              Калькулятор дробной перегонки спирта-сырца поможет узнать объем
              абсолютного спирта, отобрать «головы» и «хвосты», а так же объем
              продукта заданной вами крепости.
            </p>
          </Col>
        </Row>
      </Container>
      <DrobnayaPeregonkaCalcContainer />
      <Container>
        <Row>
          <Col className="text-left mt-3" md={{ span: 8, offset: 2 }}>
            <p></p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default DrobnayaPeregonka;
