import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import SebestoimApproxCalcContainer from "../Components/Calcs/SebestoimApprox/SebestoimApproxCalcContainer";
import sebestoimostAprImg from "../assets/img/kalkulyator-sebestoimosti-samogona.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SebestoimApprox = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${sebestoimostAprImg}`,
          Title: "Расчет стоимости будущего самогона",
          Description:
            "Калькулятор поможет рассчитать примерную стоимость сахарного и зернового дистиллята, исходя из массы и стоимости сырья",
          Href: "kalkulyator-sebestoimosti-samogona",
          titleSeo: "Калькулятор стоимости самогона (сахарного / зернового)",
          descriptionSeo:
            "Калькулятор поможет рассчитать онлайн стоимость будущего сахарного и зернового дистиллята (самогона), исходя из массы и стоимости сырья.",
          urlSeo: "https://samogoncalc.ru/kalkulyator-sebestoimosti-samogona/",
        }}
      />

      <Container>
        <Row>
          <Col className="text-left mb-3" md={{ span: 8, offset: 2 }}>
            <p id="yandex_rtb_R-A-1654628-5"></p>
            <p>
              Калькулятор поможет рассчитать примерную себестоимость и объем
              самогона даже если вы еще не ставили брагу и не перегоняли
              дистиллят.
            </p>
          </Col>
        </Row>
      </Container>
      <SebestoimApproxCalcContainer />
      <Container>
        <Row>
          <Col className="text-left mb-3" md={{ span: 8, offset: 2 }}>
            <p id="yandex_rtb_R-A-1654628-4"></p>
            <p>
              Если вы ещё не начали готовить самогон, не поставили брагу, но
              задумались о выгоде мероприятия, логичным будет посчитать
              примерную стоимость будущего напитка.
            </p>
            <h2>
              Как рассчитывается примерная стоимость ещё неготового самогона?
            </h2>
            <p>
              Для расчёта примерной стоимости дистиллята требуется немного
              больше параметров, которые сложнее учесть вручную.
              Онлайн-калькуляторы упрощают эту работу, предлагают вам указать:
            </p>
            <ul>
              <li>Вид используемого сырья (сахар или вид круп);</li>
              <li>Общая предполагаемая масса сырья;</li>
              <li>Цена сырья за 1 кг.;</li>
              <li>Стоимость дрожжей;</li>
              <li>Стоимость бентонита;</li>
              <li>Стоимость угля;</li>
              <li>Энергозатраты в рублях (ожидаемые затраты);</li>
              <li>КПД самогонного аппарата в процентах;</li>
              <li>Доли "голов" и "хвостов" от общего объёма в процентах.</li>
            </ul>
            <p>
              В ходе расчёта с данными параметрами вы получите значения
              стоимости за литр готового напитка, объём абсолютного спирта и
              объём итогового дистиллята с крепостью в 40 градусов.
            </p>
            <p>
              Если дистиллят уже готов и вы хотите быстро посчитать стоимость
              литра или полулитра, то можно воспользоваться{" "}
              <a href="/kalkulyator-sebestoimosti-samogona">
                калькулятором себестоимости самогона
              </a>
              .
            </p>
            <p id="id-C-A-1654628-3"></p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default SebestoimApprox;
