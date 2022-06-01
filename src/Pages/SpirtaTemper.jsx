import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import TemperatureCalcContainer from "../Components/Calcs/Temperature/TemperatureCalcContainer";
import otTemperaturyImg from "../assets/img/kalkulyator-spirta-ot-temperatury.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SpirtaTemper = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${otTemperaturyImg}`,
          Title: "Коррекция спирта по температуре",
          Description:
            "Рассчитает реальную крепость самогона (дистиллята) при температуре отличной от 20 °C.",
          Href: "kalkulyator-spirta-ot-temperatury",
          titleSeo:
            "Калькулятор крепости самогона от температуры - коррекция показаний ареометра",
          descriptionSeo:
            "Онлайн калькулятор поможет скорректировать крепость самогона в зависимости от температуры дистиллята",
          urlSeo: "https://samogoncalc.ru/kalkulyator-spirta-ot-temperatury/",
        }}
      />

      <Container>
        <Row>
          <Col className="text-left mb-3" md={{ span: 8, offset: 2 }}>
            <p id="yandex_rtb_R-A-1654628-5"></p>
            <p>
              Калькулятор спирта от температуры поможет рассчитать реальную
              крепость при любой температуре дистиллята
            </p>
          </Col>
        </Row>
      </Container>
      <TemperatureCalcContainer />
      <Container>
        <Row>
          <Col className="text-left mb-3" md={{ span: 8, offset: 2 }}>
            <p id="yandex_rtb_R-A-1654628-4"></p>
            <p>
              Ареометр, к примеру, бытовой спиртомер АСП-3, верно измеряет
              крепость только при температуре 20 °C. Наш онлайн калькулятор
              подскажет реальную крепость самогона при температуре больше или
              меньше 20 °C.
            </p>
            <p id="id-C-A-1654628-3"></p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default SpirtaTemper;
