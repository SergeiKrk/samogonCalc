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
            <div className="row my-4 rounded bg-white p-4 shadow">
              <div className="col-lg-4 mt-4 order-lg-1">
                <img
                  src="https://cv3.litres.ru/pub/c/cover_250/67034733.webp"
                  alt="Картинка"
                  className="img-fluid rounded px-12"
                />
              </div>

              <div className="col-lg-8 order-lg-2 mx-6">
                <p>
                  <b>📕 книга 👇</b>
                </p>
                <h3 className="mb-2 text-xl font-weight-bold">
                  ВАШ ПЕРВЫЙ САМОГОН
                </h3>
                <h4 className="mb-4 text-sm text-muted">
                  Как выбрать самогонный аппарат, поставить брагу и сделать
                  самогон
                </h4>
                <div className="mb-4">
                  <a
                    className="btn btn-primary mr-2"
                    href="https://www.litres.ru/pages/quickread/?art=67034733&skin=normal&lfrom=384489674&l=384489674&widget=1.00&iframe=1"
                  >
                    Читать онлайн
                  </a>
                  <a
                    className="btn btn-success"
                    href="https://www.litres.ru/67034733/?lfrom=384489674"
                  >
                    Купить
                  </a>
                </div>
              </div>
            </div>
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
