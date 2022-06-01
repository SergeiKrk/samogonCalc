import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import RazbavleniyaSamogonaCalcContainer from "../Components/Calcs/RazbavleniyaSamogonaCalc/RazbavleniyaSamogonaCalcContainer";
import razbavVodoi from "../assets/img/kalkulyator-razbavleniya-samogona-vodoj.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

const RazbavleniyaSamogona = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${razbavVodoi}`,
          Title: "Расчет разбавления самогона водой",
          Description:
            "Необходимо смешать дистиллят или спирт с водой? Я помогу смешать в нужных пропорциях",
          Href: "kalkulyator-razbavleniya-samogona-vodoj",
          titleSeo:
            "Калькулятор разбавления самогона (спирта) водой: Онлайн расчет",
          descriptionSeo:
            "Онлайн калькулятор по точной формуле рассчитает сколько требуется налить воды для получения спирта (самогона) требуемой крепости.",
          urlSeo:
            "https://samogoncalc.ru/kalkulyator-razbavleniya-samogona-vodoj/",
        }}
      />

      <Container>
        <Row>
          <Col className="text-left mb-3" md={{ span: 8, offset: 2 }}>
            <p id="yandex_rtb_R-A-1654628-5"></p>
            <p>
              Нужно разбавить спирт или дистиллят до конкретной крепости? Наш
              быстрый онлайн калькулятор разбавления самогона водой поможет.
            </p>
            <p>
              Онлайн калькулятор разбавления самогона (спирта) водой рассчитает
              пропорции воды и алкоголя, а так же подскажет объем самогона после
              разбавления.
            </p>
          </Col>
        </Row>
      </Container>

      <RazbavleniyaSamogonaCalcContainer />

      <Container>
        <Row>
          <Col className="text-left mt-3" md={{ span: 8, offset: 2 }}>
            <p id="yandex_rtb_R-A-1654628-4"></p>
            <p>
              Например, есть 6 литров дистиллята крепостью в 90°. Вы хотите
              развести самогон до 45°. Вводим все 3 параметра "Объем
              разбавляемого самогона", "Крепость разбавляемого самогона",
              "Крепость, которую хотите получить" в калькулятор и сразу
              получаете ответ сколько необходимо долить воды (нужно 6.86 л.) и
              какой общий объем разбавленного самогона (спирта) получится
              (получится 12 л.). Никаких кнопок для расчета нажимать не нужно,
              результат появится автоматически после ввода всех 3-х параметров.
            </p>
            <h2>Правила разбавления самогона</h2>
            <ul>
              <li>
                вливайте самогон в воду, а не воду в самогон, перемешивая
                жидкость при вливании;
              </li>
              <li>
                температура смешиваемых жидкостей должна быть одинаковой,
                порядка 20°, при этой температуре показания спиртометров
                соответствуют истинному содержанию спирта;
              </li>
              <li>
                смешанный напиток можно употреблять после отстаивания и
                стабилизации в течение нескольких часов, а лучше дней.
              </li>
            </ul>
            <h3>Правила подбора воды и тары</h3>
            <ul>
              <li>
                вода из городского водопровода непригодна, даже кипячение не
                всегда делает ее лучше;
              </li>
              <li>
                идеально подходит родниковая, артезианская и бутилированная
                вода;
              </li>
              <li>
                вполне пригодна вода, пропущенная через бытовой фильтр, при
                условии соблюдения срока его эксплуатации;
              </li>
              <li>все емкости должны быть стеклянными, а не пластиковыми;</li>
              <li>соблюдайте гигиену используемого оборудования и емкостей.</li>
            </ul>
            <h2>Как рассчитать пропорцию самогона</h2>
            <ul>
              <li>С помощью онлайн-калькулятора;</li>
              <li>С помощью формулы;</li>
              <li>С помощью таблицы Фертмана;</li>
              <li>На глазок.</li>
            </ul>
            <h2>Сколько нужно воды для разбавления самогона?</h2>
            <p>
              На этот вопрос даст ответ нас онлайн калькулятор разбавления
              алкоголя водой. Если по сложившимся обстоятельствам у вас нет
              доступа к компьютеру или телефону, то существует метод «на
              глазок», с вливанием в самогон небольших количеств воды и
              измерением крепости после каждого вливания спиртометром.
            </p>
            <h2>Формула разбавления спирта и самогона водой</h2>
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
                      <b>V = AC/B - C</b>
                    </p>
                  </Card>
                </Col>
                <Col xs="12" md="6" className=" mt-2">
                  <ul>
                    <li>
                      <b>V</b> – требуемый объем воды;
                    </li>
                    <li>
                      <b>С</b> – объем самогона;
                    </li>
                    <li>
                      <b>А</b> – крепость самогона;
                    </li>
                    <li>
                      <b>В</b> – желаемая крепость напитка.
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
            <p>
              Для пояснения пользования формулой приведем пример. Объем самогона
              С=2,5 л, крепость самогона А=72°, желаемая крепость В=40°.
              Рассчитываем требуемый объем воды V = 2,5*(72/40-1)=2,0 (л).
            </p>
            <p>
              Вышеприведенная формула существует и в ином виде, пользуйтесь
              наиболее привычной для вас: С*А/В-С = V. Эта формула называется
              "золотой" формулой самогоноварения.
            </p>
            <h2>Таблица разбавления самогона водой</h2>
            <p>
              В таблице Фертмана для разбавления самогона и спирта водой в
              первом столбце - это крепость спиртосодержащей жидкости до
              разбавления, в первой строке - крепость после разбавления, а на
              пересечении - объем воды, который нужно долить.
            </p>
            <Table striped bordered hover responsive="sm" size="sm">
              <thead>
                <tr>
                  <td>было/стало</td>
                  <td>90%</td>
                  <td>85%</td>
                  <td>80%</td>
                  <td>75%</td>
                  <td>70%</td>
                  <td>65%</td>
                  <td>60%</td>
                  <td>55%</td>
                  <td>50%</td>
                  <td>45%</td>
                  <td>40%</td>
                  <td>35%</td>
                  <td>30%</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>95%</td>
                  <td>64</td>
                  <td>133</td>
                  <td>209</td>
                  <td>295</td>
                  <td>391</td>
                  <td>501</td>
                  <td>629</td>
                  <td>779</td>
                  <td>957</td>
                  <td>1174</td>
                  <td>1443</td>
                  <td>1785</td>
                  <td>2239</td>
                </tr>
                <tr>
                  <td>90%</td>
                  <td>-</td>
                  <td>65</td>
                  <td>138</td>
                  <td>218</td>
                  <td>310</td>
                  <td>414</td>
                  <td>535</td>
                  <td>677</td>
                  <td>847</td>
                  <td>1052</td>
                  <td>1306</td>
                  <td>1630</td>
                  <td>2061</td>
                </tr>
                <tr>
                  <td>85%</td>
                  <td>-</td>
                  <td>-</td>
                  <td>68</td>
                  <td>144</td>
                  <td>231</td>
                  <td>329</td>
                  <td>443</td>
                  <td>578</td>
                  <td>738</td>
                  <td>932</td>
                  <td>1172</td>
                  <td>1478</td>
                  <td>1884</td>
                </tr>
                <tr>
                  <td>80%</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>72</td>
                  <td>153</td>
                  <td>246</td>
                  <td>353</td>
                  <td>480</td>
                  <td>630</td>
                  <td>812</td>
                  <td>1039</td>
                  <td>1327</td>
                  <td>1709</td>
                </tr>
                <tr>
                  <td>75%</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>76</td>
                  <td>163</td>
                  <td>264</td>
                  <td>382</td>
                  <td>523</td>
                  <td>694</td>
                  <td>906</td>
                  <td>1177</td>
                  <td>1535</td>
                </tr>
                <tr>
                  <td>70%</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>81</td>
                  <td>175</td>
                  <td>285</td>
                  <td>417</td>
                  <td>577</td>
                  <td>774</td>
                  <td>1027</td>
                  <td>1360</td>
                </tr>
                <tr>
                  <td>65%</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>88</td>
                  <td>190</td>
                  <td>311</td>
                  <td>460</td>
                  <td>644</td>
                  <td>878</td>
                  <td>1189</td>
                </tr>
                <tr>
                  <td>60%</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>95</td>
                  <td>207</td>
                  <td>344</td>
                  <td>514</td>
                  <td>730</td>
                  <td>1017</td>
                </tr>
                <tr>
                  <td>55%</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>103</td>
                  <td>229</td>
                  <td>384</td>
                  <td>583</td>
                  <td>845</td>
                </tr>
                <tr>
                  <td>50%</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>114</td>
                  <td>255</td>
                  <td>436</td>
                  <td>674</td>
                </tr>
                <tr>
                  <td>45%</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>127</td>
                  <td>290</td>
                  <td>505</td>
                </tr>
                <tr>
                  <td>40%</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>144</td>
                  <td>335</td>
                </tr>
                <tr>
                  <td>35%</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>167</td>
                </tr>
              </tbody>
            </Table>
            <h2>Как правильно развести самогон до 40 градусов?</h2>
            <p>
              В этом вопросе вам пригодится наш онлайн{" "}
              <a href="/kalkulyator-vodki-iz-spirta">
                калькулятор водки из спирта
              </a>
              . Он поможет подобрать пропорции и разбавить спирт или самогон
              водой до 40 градусов
            </p>
            <p id="id-C-A-1654628-3"></p>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default RazbavleniyaSamogona;
