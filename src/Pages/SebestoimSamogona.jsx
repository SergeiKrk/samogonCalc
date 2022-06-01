import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import SebestoimostCalcContainer from "../Components/Calcs/Sebestoimost/SebestoimostCalcContainer";
import sebestoimostImg from "../assets/img/kalkulyator-sebestoimosti-samogona.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SebestoimSamogona = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${sebestoimostImg}`,
          Title: "Расчет себестоимости самогона",
          Description:
            "Поможет оценить стоимость самогона, если Ваш дистиллят уже готов и вы хотите посчитать его себестоимость",
          Href: "kalkulyator-sebestoimosti-samogona",
          titleSeo: "Калькулятор себестоимости самогона",
          descriptionSeo:
            "Калькулятор поможет рассчитать онлайн себестоимость уже готового дистиллята, исходя из массы и стоимости сырья и объема готового самогона",
          urlSeo: "https://samogoncalc.ru/kalkulyator-sebestoimosti-samogona/",
        }}
      />

      <Container>
        <Row>
          <Col className="text-left mb-3" md={{ span: 8, offset: 2 }}>
            <p id="yandex_rtb_R-A-1654628-5"></p>
            <p>
              Калькулятор поможет рассчитать стоимость получившегося дистиллята
              исходя из затрат на сырье и ингредиенты.
            </p>
          </Col>
        </Row>
      </Container>
      <SebestoimostCalcContainer />
      <Container>
        <Row>
          <Col className="text-left mb-3" md={{ span: 8, offset: 2 }}>
            <p id="yandex_rtb_R-A-1654628-4"></p>
            <p>
              Не знаете, как рассчитать себестоимость самогона? Вы можете
              сделать это вручную с учётом всех входных параметров, а можете
              указать их в онлайн калькуляторе, который посчитает себестоимость
              продукта быстро и легко.
            </p>
            <p>
              Цена самогона складывается из стоимости сырья, вспомогательных
              продуктов, затрат на электроэнергию; для производства при
              необходимом учёте КПД аппарата, долей "голов" и "хвостов" для ещё
              не готового продукта.
            </p>
            <h2>Как рассчитывается стоимость готового напитка?</h2>
            <p>
              Для вычисления стоимости готового самогона вам потребуются
              следующие параметры:
            </p>
            <ul>
              <lu>Цена сырья за килограмм</lu>
              <lu>Общая масса использованного сырья (в кг)</lu>
              <lu>Стоимость дрожжей</lu>
              <lu>Стоимость бентонита</lu>
              <lu>Стоимость угля</lu>
              <lu>
                Энергозатраты в рублях (стоимость потраченного на производство
                электричества, воды, газа)
              </lu>
              <lu>Объём готового напитка</lu>
            </ul>
            <p>
              В онлайн калькуляторе вы указываете все эти параметры, и он выдаёт
              результат в виде цены 1 литра самогона. Для самостоятельного
              расчёта вам потребуется суммировать общую стоимость сырья (масса,
              помноженная на цену) с общей стоимостью дрожжей, бентонита и угля
              и с затратами на энергию - вы получите полную стоимость всего
              результата. Для вычисления цены за литр разделите получившуюся
              сумму на объём готового напитка.
            </p>
            <p>
              Если вы еще не ставили брагу и даже не определились с сырьем, но
              уже хотите примерно понимать какой продукт и какой стоимости
              получится, то можно воспользоваться{" "}
              <a href="/primernaya-stoimost-samogona">
                калькулятором примерной стоимости самогона
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

export default SebestoimSamogona;
