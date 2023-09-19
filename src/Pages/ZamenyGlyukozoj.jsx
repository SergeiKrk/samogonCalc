import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import ZamenaCalcContainer from "../Components/Calcs/Zamena/ZamenaCalcContainer";
import zamenaSaharaImg from "../assets/img/kalkulyator-zameny-sahara-glyukozoj.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ZamenyGlyukozoj = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${zamenaSaharaImg}`,
          Title: "Расчет замены сахара декстрозой (глюкозой)",
          Description:
            "Определяет насколько меньше потребуется глюкозы, чтобы выход спирта из браги был как с 1 кг обычного сахара",
          Href: "kalkulyator-zameny-sahara-glyukozoj",
          titleSeo: "Калькулятор замены сахара глюкозой",
          descriptionSeo:
            "Онлайн калькулятор рассчитает насколько меньше потребуется глюкозы, чтобы выход спирта из браги был как из сахара",
          urlSeo: "https://samogoncalc.ru/kalkulyator-zameny-sahara-glyukozoj/",
        }}
      />
      <Container>
        <Row>
          <Col className="text-left mb-3" md={{ span: 8, offset: 2 }}>
            <p id="yandex_rtb_R-A-1654628-5"></p>
            <p>
              Вы хотите получить более качественный дистиллят, чем получали
              раньше из обычного сахара? У Вас есть глюкоза или декстроза, но вы
              не знаете сколько глюкозы понадобится, чтобы выход спирта из браги
              был как с 1 кг обычного сахара? Воспользуйтесь калькулятором
              ЗАМЕНЫ САХАРА ГЛЮКОЗОЙ, чтобы узнать.
            </p>
          </Col>
        </Row>
      </Container>
      <ZamenaCalcContainer />
      <Container>
        <Row>
          <Col className="text-left" md={{ span: 8, offset: 2 }}>
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
              Например, вы хотите получить дистиллят из декстрозы такое же
              количество, как получили бы из 6 кг сахара. Заполняем поле
              "Количество сахара" и автоматически получаем ответ "6.3 кг." в
              поле справа.
            </p>
            <p id="id-C-A-1654628-3"></p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ZamenyGlyukozoj;
