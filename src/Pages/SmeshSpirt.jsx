import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import SmeshSpirtCalcContainer from "../Components/Calcs/SmeshSpirt/SmeshSpirtCalcContainer";
import smeshSpirtaImg from "../assets/img/kalkulyator-smeshivaniya-spirtov.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const SmeshSpirt = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${smeshSpirtaImg}`,
          Title: "Смешивание спиртов или самогона",
          Description:
            "Калькулятор смешивания спиртов разной крепости поможет узнать итоговую крепость по точной формуле",
          Href: "kalkulyator-smeshivaniya-spirtov",
          titleSeo:
            "Калькулятор смешивания спиртов (самогона / дистиллята) разной крепости",
          descriptionSeo:
            "Онлайн калькулятор смешивания спиртов (самогона) разной крепости поможет узнать итоговую крепость по точной формуле",
          urlSeo: "https://samogoncalc.ru/kalkulyator-smeshivaniya-spirtov/",
        }}
      />

      <Container>
        <Row>
          <Col className="text-left" md={{ span: 8, offset: 2 }}>
            <p id="yandex_rtb_R-A-1654628-5"></p>
            <p>
              В практике работы со спиртосодержащими жидкостями зачастую
              приходится смешивать две жидкости разной крепости и разного
              объема. Рассчитать крепость образующейся смеси можно с помощью
              онлайн калькулятора смешивание спиртов:
            </p>
          </Col>
        </Row>
      </Container>
      <SmeshSpirtCalcContainer />
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
              В случае его недоступности можно воспользоваться формулой
              смешивания спиртов.
            </p>
            <h2>Формула смешивания спиртов</h2>
            <Container className="mt-3">
              <Row>
                <Col xs="12" md="6">
                  <Card
                    className="text-center mt-2"
                    bg="light"
                    border="dark"
                    body
                  >
                    <p>
                      <b>К=(V1*К1/100+V2*К2/100) / (V1+V2)</b>
                    </p>
                  </Card>
                </Col>
                <Col xs="12" md="6">
                  <ul>
                    <li>
                      <b>K</b> – крепость смешанной жидкости,
                    </li>
                    <li>
                      <b>V1 и V2</b> – объемы первой и второй спиртосодержащей
                      жидкости,
                    </li>
                    <li>
                      <b>К1 и К2</b> – крепости жидкостей в градусах;
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
            <p>Поясним на примере:</p>
            <p>
              Необходимо смешать 500 мл водки крепостью 40% с 750 мл
              спиртосодержащего напитка крепостью 35%.
            </p>
            <p>
              В 500 мл водки содержится спирта (по объему) 500*40/100=200 (мл).
              В 750 мл напитка содержится спирта 750*35/100=262,5 (мл). Общий
              объем получившейся смеси 500+750=1250 (мл), а содержание спирта в
              смеси 200+262,5=462,5 (мл). Крепость получившейся смеси составляет
              100%*462,5/1250=37%.
            </p>
            <p>
              Можно решить и обратную задачу: сколько воды добавить к 1 л спирта
              крепостью 70%, чтобы получить водку крепостью 40%. В 1 литре
              спирта крепостью 70% содержится чистого спирта 1,00*70/100=0,7
              (л). Чтобы в водке крепостью 40% неизвестного объема содержалось
              0,7 л чистого спирта, объем водки должен составить
              100%*0,7/40%=1,75 (л). Поскольку мы имеем 1 литр спирта крепостью
              70%, к нему необходимо долить 1,75-1,00=0,75 (л) воды.
            </p>
            <h2>
              Правила смешивания смешивания двух спиртосодержащих жидкостей
              (самогона, дистиллята, водки, спирта)
            </h2>
            <ul>
              <li>лейте спирт в воду, а не наоборот (возможно, это миф 😂);</li>
              <li>
                при разбавлении спиртосодержащей жидкости водой используйте
                охлажденную воду;
              </li>
              <li>
                не следует пользоваться водопроводной водой, от нее спирт может
                помутнеть; идеальной является родниковая или артезианская вода,
                а также бутилированная;
              </li>
              <li>
                разведенный спирт должен отстояться пару дней в прохладном
                месте;
              </li>
              <li>
                емкости со спиртосодержащими жидкостями следует заполнять
                доверху, чтобы избежать реакции с кислородом в воздухе.
              </li>
            </ul>
            <p>
              Крепость спиртосодержащей жидкости может быть измерена
              спиртометром (ареометром), при этом следует иметь в виду, что
              ареометры калибруются при температуре жидкости 20 градусов.
            </p>
            <p id="id-C-A-1654628-3"></p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default SmeshSpirt;
