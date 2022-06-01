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
