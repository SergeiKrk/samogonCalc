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
            <p id="yandex_rtb_R-A-1654628-5"></p>
            <p>
              Калькулятор рассчитает объем абсолютного (100°) и чистого спирта в
              полученном спирте сырце, дистилляте и ректификате.
            </p>
          </Col>
        </Row>
      </Container>
      <AbsolyutnijSpirtCalcContainer />

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
              Чтобы выяснить сколько чистого и абсолютного спирта содержится в
              вашем дистилляте, в калькуляторе нужно ввести параметр "Объем
              самогона", измерить и ввести "Крепость самогона", а также
              "Температура самогона", если температура дистиллята отличается от
              20°C, после чего калькулятор автоматически сделает расчет объема
              абсолютного спирта и чистого спирта и отобразит результаты в
              правой области, никакие кнопки при этом нажимать не нужно, просто
              введите все параметры.
            </p>
            <Card className="mb-4 mt-3" bg="light" border="dark" body>
              <p>
                <b>Абсолютный спирт</b> - теоретическое понятие (в обороте не
                встречается), подразумевающее этиловый спирт крепостью в 100
                градусов. Понятие "Абсолютный спирт" применяется для бытовых
                расчетов крепости дистиллята.
              </p>
              <p>
                <b>Чистый спирт</b> - бытовое понятие, подразумевающее этиловый
                спирт крепостью 96,3° (класса "Экстра", "Люкс" и "Альфа")
                крепости.
              </p>
              <p>Химическая формула: С₂H₆O, С₂H₅OH</p>
              <p>Плотность: 0,7905 г/см3</p>
              <p>Температура кипения: 78,4 °C</p>
            </Card>

            <h2>Формула абсолютного спирта</h2>
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
                      <b>Sa = V * F / 100</b>
                    </p>
                  </Card>
                </Col>
                <Col xs="12" md="6">
                  <ul>
                    <li>
                      <b>Sa</b> – абсолютный спирт;
                    </li>
                    <li>
                      <b>V</b> – объем жидкости в литрах;
                    </li>
                    <li>
                      <b>F</b> – крепость жидкости в процентах от объема.
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
            <p>
              При объеме браги 5 л крепостью 18 % оборотов жидкость содержит 0.9
              литра чистого спирта (5 х 18 : 100 = 0.9). Далее вычитается
              желаемый процент голов, отбираемый при второй перегонке.
            </p>

            <h2>Формула чистого спирта</h2>
            <Container className="mt-3">
              <Row>
                <Col xs="12" md="6">
                  <ul>
                    <li>
                      <b>Sч</b> – Объем чистого спирт;
                    </li>
                    <li>
                      <b>V</b> – объем спиртосодержащей жидкости;
                    </li>
                    <li>
                      <b>F</b> – крепость спиртосодержащей жидкости.
                    </li>
                  </ul>
                </Col>
                <Col xs="12" md="6">
                  <Card
                    className="text-center mt-2"
                    bg="light"
                    border="dark"
                    body
                  >
                    <p>
                      <b>Sч = V * F / 96,3</b>
                    </p>
                  </Card>
                </Col>
              </Row>
            </Container>
            <p>
              Для определения чистого спирта в браге целесообразно пользоваться
              специальным устройством - виномером. Измеритель работает при
              наличии крепости 0 – 16%. Учитывается и погрешность устройства в
              размере 2 – 3%. А еще, что гораздо проще, можно воспользоваться{" "}
              <a href="/kalkulyator-saharnoj-bragi">калькулятором браги</a>. При
              отсутствии ареометра и при известном показателе сахара браги
              крепость вычисляется с учетом той информации, что 1%
              перебродившего сахара дает 0.6% спирта.
            </p>
            <h2>Как определить количество чистого спирта?</h2>
            <p>
              Сначала определяем количество абсолютного спирта, затем умножаем
              получившееся значение на 1.03842 и получаем объем чистого спирта в
              сырце или в браге. Например, при наличии самогона, содержащего 0.9
              литров абсолютного спирта, можно определить, что такая жидкость
              содержит (0.9 * 1.03842 = 0,934 л.) 934 мл. чистого спирта.
            </p>
            <h2>Как рассчитать отбор голов по абсолютному спирту?</h2>
            <p>Принцип расчета сводится к следующему:</p>
            <ul>
              <li>первую перегонку делают без деления на фракции;</li>
              <li>
                осуществляется измерение объема и крепости полученного
                дистиллята, количество чистого спирта;
              </li>
              <li>
                вычисляют 10% от полученного количества жидкости - это и есть
                объем головы (для этого можно воспользоваться{" "}
                <a href="/kalkulyator-otbor-golov">
                  калькулятором отбора голов
                </a>
                ).
              </li>
            </ul>
            <p>
              Головы необходимо удалять, так как их присутствие оказывает
              существенное воздействие на качество: он ухудшается по причине
              неприятного запаха, наличия посторонних, опасных для здоровья
              примесей. Хвостовые части тоже удаляются.
            </p>
            <h2>Какой процент голов отбирать?</h2>
            <p>
              Количество голов составляет 10-15% от объема полученного чистого
              спирта.
            </p>
            <h2>Сколько градусов абсолютный спирт?</h2>
            <p>
              Этиловый спирт широко используется в народном хозяйстве. Согласно
              ГОСТ 5964-93, спирт имеет крепость 96%. В такой жидкости
              содержится 4% воды. В абсолютном спирте вода и другие примеси
              отсутствуют.
            </p>
            <p id="id-C-A-1654628-3"></p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default AbsolyutnijSpirt;
