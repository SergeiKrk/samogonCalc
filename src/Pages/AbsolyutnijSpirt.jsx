import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import AbsolyutnijSpirtCalcContainer from "../Components/Calcs/AbsolyutnijSpirt/AbsolyutnijSpirtCalcContainer";
import absSpirtImg from "../assets/img/kalkulyator-absolyutnogo-spirta.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const AbsolyutnijSpirt = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${absSpirtImg}`,
          Title: "Расчет абсолютного и чистого спирта",
          Description:
            "Необходимо узнать, сколько абсолютного спирта в спирте сырце или в браге? Я помогу сделать расчет",
          Href: "kalkulyator-absolyutnogo-spirta",
          titleSeo: "Калькулятор абсолютного и чистого спирта",
          descriptionSeo:
            "Онлайн калькулятор точно рассчитает объем абсолютного и чистого спирта в браге или спирте сырце",
          urlSeo: "https://samogoncalc.ru/kalkulyator-absolyutnogo-spirta/",
        }}
      />

      <Container>
        <Row>
          <Col className="text-left" md={{ span: 8, offset: 2 }}>
            <Card className=" mb-4 mt-3" border="dark" body>
              <p>
                <b>Абсолютный спирт</b> - строго теоретическое понятие,
                подразумевающее этиловый спирт крепостью в 100 градусов. Понятие
                "Абсолютный спирт" применяется для бытовых расчетов крепости
                дистиллята.
              </p>
              <p>
                <b>Чистый спирт</b> - бытовое понятие, подразумевающее этиловый
                спирт крепостью 96,6° крепости.
              </p>
              <p>Химическая формула: С₂H₆O, С₂H₅OH</p>
              <p>Плотность: 0,7905 г/см3</p>
              <p>Температура кипения: 78,4 °C</p>
            </Card>
            <p>
              Калькулятор рассчитает объем абсолютного (100°) и чистого (96,6°)
              спирта в полученном спирте сырце, дистилляте и ректификате.
            </p>
            <p>
              Чтобы выяснить сколько чистого и абсолютного спирта содержится в
              вашем дистилляте, в калькуляторе нужно ввести параметр "Объем
              самогона", измерить и ввести "Крепость самогона", а также
              "Температура самогона", если температура дистиллята отличается от
              20°C, после чего калькулятор автоматически сделает расчет объема
              абсолютного спирта и чистого спирта и отобразит результаты в
              правой области, никакие кнопки при этом нажимать не нужно, просто
              введите все параметры.
            </p>
          </Col>
        </Row>
      </Container>
      <AbsolyutnijSpirtCalcContainer />
      <Container>
        <Row>
          <Col className="text-left" md={{ span: 8, offset: 2 }}>
            <h2>Формула абсолютного спирта</h2>
            <h2>Формула чистого спирта</h2>
            <h2>Как определить количество чистого спирта?</h2>
            <h2>Как рассчитать отбор голов по абсолютному спирту?</h2>
            <h2>Какой процент голов отбирать?</h2>
            <h2>Сколько градусов абсолютный спирт?</h2>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default AbsolyutnijSpirt;
