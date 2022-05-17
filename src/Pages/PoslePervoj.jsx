import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import PoslePervojCalcContainer from "../Components/Calcs/PoslePervojCalc/PoslePervojCalcContainer";
import React from "react";
import poslePervojImg from "../assets/img/razbavlenie-samogona-vodoj-posle-pervoj-peregonki.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const PoslePervoj = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${poslePervojImg}`,
          Title: "Расчет разбавления самогона водой (после первого перегона)",
          Description:
            "Поможет подготовить спирт-сырец к дробной перегонке, рассчитать пропорции и разбавить его до приемлемой крепости для производства качественного дистиллята",
          Href: "razbavlenie-samogona-vodoj-posle-pervoj-peregonki",
          titleSeo:
            "Калькулятор самогонщика: разбавление самогона водой после первой перегонки",
          descriptionSeo:
            "Калькулятор подскажет, как разбавить спирт-сырец (первый самогон) водой для второго перегона до нужной крепости",
          urlSeo:
            "https://samogoncalc.ru/razbavlenie-samogona-vodoj-posle-pervoj-peregonki/",
        }}
      />

      <Container>
        <Row>
          <Col className="text-left" md={{ span: 8, offset: 2 }}></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="text-left" md={{ span: 8, offset: 2 }}>
            <p>
              Чтобы разбавить спирт-сырец водой до оптимальной для второй
              перегонки крепости в 20° (25, 30, 35, 40), нужно выяснить, какой
              объем воды необходимо долить в самогон. Калькулятор разбавления
              самогона водой после первой перегонки поможет это выяснить, а так
              же он подскажет общий объем спирта сырца после разбавления.
            </p>
          </Col>
        </Row>
      </Container>

      <PoslePervojCalcContainer />
      <Container>
        <Row>
          <Col className="text-left" md={{ span: 8, offset: 2 }}>
            <p>
              Считается, что домашний самогон по качеству превосходит фабричную
              водку и многие крепкие напитки из магазина. Но это не совсем так.
              Качественный чистый самогон, получается только при соблюдении
              технологии: обязательной двойной перегонке, максимальном отделении
              вредных примесей и оптимальной крепости напитка, составляющей
              40-45 градусов.
            </p>
            <p>
              Для получения качественного продукта, пригодного к употреблению,
              перегонку следует производить два раза. Как правило,
              недобросовестные винокуры, один раз перегоняют сырьё, которое
              потом будет предназначено для продажи. Себе такой самогон
              оставлять не рекомендуется.
            </p>
            <p>
              В сущности, продукт после первой перегонки, это и не самогон
              вовсе, а спирт-сырец, насыщенный вредными примесями и неприятными
              запахами. У него обычно не удаляются голова и хвост (первая и
              последняя фракции), поэтому концентрация посторонних примесей в
              спирте-сырце очень высокая. Чтобы эту концентрацию уменьшить, и
              рекомендуется разбавлять продукт уже после первичной перегонки.
            </p>
            <Card className="mb-4 mt-3" bg="light" border="dark" body>
              <h2>Зачем разбавлять спирт-сырец перед второй перегонкой</h2>
              <p>
                Наилучшее разделение на фракции во время второго перегона
                происходить, если крепость спирта сырец низкая 20-40 градусов.
                Как следствие, сырец получается максимально очищенным.
                Разбавленный спирт перед перегонкой рекомендуется углевать, так
                как спиртовой раствор такой концентрации хорошо отдает сивушные
                масла активированному углю.
              </p>
            </Card>
            <h2>Как разбавить самогон водой до 20 градусов</h2>
            <p>
              После первой перегонки получается продукт с сильным неприятным
              запахом. В подобных случаях концентрацию спирта-сырца перед второй
              перегонкой следует уменьшить. Для этой цели крепость полученной
              жидкости снижают до 20 градусов (в редких случаях до 30-35, но не
              выше 40), разбавляя её водой. Чтобы рассчитать необходимое
              количество воды, которое нужно долить и общий объем спирта-сырца
              после разбавления, воспользуйтесь нашим калькулятором разбавления
              самогона водой после первой перегонки. До 20 градусов можно
              разбавить любой первичный продукт, например некачественную водку.
              Так она лучше очистится во время второй перегонки.
            </p>
            <h2>Подготовка спирта-сырца ко второй перегонке</h2>
            <p>
              Итак, вы разбавили сырец до 20 или хотя бы до 40 градусов. В
              принципе, его уже можно вторично перегонять. Но для получения
              настоящего качественного самогона спирт-сырец нужно дополнительно
              очистить перед повторной перегонкой. Приготовьтесь к тому, что
              процесс этот может занять несколько дней:
            </p>
            <ul>
              <li>смешать весь спирт-сырец в одной ёмкости;</li>
              <li>
                добавить активированный уголь из расчёта 1 ст. ложка на 1 л.
                самогона;
              </li>
              <li>настаивать от 1 часа, но не дольше суток;</li>
              <li>отфильтровать угольную взвесь;</li>
            </ul>
            <h2>Градус спирта сырца для второй перегонки</h2>
            <p>
              Считается, что оптимальный градус всё-таки – 20°. Так можно
              удалить самое большое количество вредных фракций. Но в этом случае
              процесс перегонки может увеличиться. Допускается крепость сырца и
              до 40 градусов.
            </p>
            <div id="id-C-A-1654628-3"></div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default PoslePervoj;
