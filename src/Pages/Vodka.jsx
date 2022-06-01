import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import VodkaCalcContainer from "../Components/Calcs/Vodka/VodkaCalcContainer";
import vodkaImg from "../assets/img/kalkulyator-vodki-iz-spirta.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Vodka = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${vodkaImg}`,
          Title: "Калькулятор водки из спирта",
          Description:
            "Поможет подобрать пропорции и разбавить спирт или самогон водой до 40 градусов",
          Href: "kalkulyator-vodki-iz-spirta",
          titleSeo:
            "Как разбавить самогон водой до 40 градусов: онлайн калькулятор",
          descriptionSeo:
            "Онлайн калькулятор водки из спирта поможет подобрать пропорции и разбавить спирт или самогон водой до 40 градусов",
          urlSeo: "https://samogoncalc.ru/kalkulyator-vodki-iz-spirta/",
        }}
      />

      <Container>
        <Row>
          <Col className="text-left mb-3" md={{ span: 8, offset: 2 }}>
            <p id="yandex_rtb_R-A-1654628-5"></p>
            <p>
              У Вас есть медицинский спирт, домашний ректификат или крепкий
              дистиллят (самогон) из которого хотите получить водку или настойку
              крепостью в 40°? Воспользуйтесь калькулятором водки, чтобы узнать,
              какой объем напитка получится после разбавления и сколько нужно
              добавить воды к имеющемуся объему спирта.
            </p>
          </Col>
        </Row>
      </Container>
      <VodkaCalcContainer />
      <Container>
        <Row>
          <Col className="text-left mt-3" md={{ span: 8, offset: 2 }}>
            <p id="yandex_rtb_R-A-1654628-4"></p>
            <p>
              Например, у вас есть 3 литра медицинского спирта, вы хотите
              рассчитать сколько воды нужно долить и сколько водки получится
              после разбавления. Введите в левую часть калькулятора "Объем
              спирта или дистиллята" (например, 3 л.), "Крепость спирта или
              дистиллята" (например, 96°), "Температура спирта или дистиллята"
              (25 °С) и "Температура воды" (20 °С). Никаких кнопок для расчета
              нажимать не нужно, результат появится автоматически после ввода
              всех параметров.
            </p>
            <p>Результат:</p>
            <ul>
              <li>Воды долить: 4.09 л.</li>
              <li>Объем водки: 7.09 л.</li>
            </ul>
            <p>
              Если вы хотите разбавить самогон или спирт до какой-то другой
              крепости, то{" "}
              <a href="/kalkulyator-razbavleniya-samogona-vodoj">
                Калькулятор разбавления спирта водой
              </a>{" "}
              вам поможет.
            </p>
            <p id="id-C-A-1654628-3"></p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Vodka;
