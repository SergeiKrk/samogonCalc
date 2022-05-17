import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import React from "react";
import drobnImg from "../assets/img/kalkulyator-drobnoj-peregonki.png";
import DrobnayaPeregonkaCalcContainer from "../Components/Calcs/DrobnayaPeregonka/DrobnayaPeregonkaCalcContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const DrobnayaPeregonka = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${drobnImg}`,
          Title: "Калькулятор дробной перегонки спирта-сырца",
          Description:
            "Хотите начать дробную перегонку? Я помогу отобрать головы и хвосты!",
          Href: "kalkulyator-drobnoj-peregonki",
          titleSeo:
            "Калькулятор дробной (второй) перегонки спирта-сырца: Онлайн расчет",
          descriptionSeo:
            "Онлайн калькулятор быстро и точно рассчитает параметры дробной (второй) перегонки, подскажет как развести самогон (дистиллята) водой. Поможет рассчитать объем хвостов и голов.",
          urlSeo: "https://samogoncalc.ru/kalkulyator-drobnoj-peregonki/",
        }}
      />
      <Container>
        <Row>
          <Col className="text-left mb-3" md={{ span: 8, offset: 2 }}>
            <p>
              Калькулятор дробной перегонки спирта-сырца поможет узнать объем
              абсолютного спирта, отобрать «головы» и «хвосты», а так же
              подскажет объем продукта заданной вами крепости.
            </p>
          </Col>
        </Row>
      </Container>
      <DrobnayaPeregonkaCalcContainer />
      <Container>
        <Row>
          <Col className="text-left" md={{ span: 8, offset: 2 }}>
            <p>
              Например, у вас есть 8 литров спирта-сырца, вы хотите рассчитать
              параметры дробной перегонки, а именно, выяснить какое количество
              отбирать голов, какой объем абсолютного спирта находится в сырце,
              объем хвостов и какой объем заданной вами крепости останется,
              введите в левую часть калькулятора "Объем спирта-сырца" (например,
              8 л.), "Крепость спирта-сырца" (например, 50°), "Нужная крепость
              после перегона" (42°), выберите из выпадающего списка долю голов и
              хвостов. Никаких кнопок для расчета нажимать не нужно, результат
              появится автоматически после ввода всех параметров.
            </p>
            <ul>
              <li>Абсолютного спирта на выходе: 4.00 л.</li>
              <li>Объем «голов»: 0.4 л.</li>
              <li>Объем «хвостов»: 0.4 л.</li>
              <li>Объем продукта крепостью 42° на выходе: 8.72 л.</li>
            </ul>
            <Card className="mt-2" bg="light" border="dark" body>
              <p>
                <b>Дробная перегонка</b> - процесс дистилляции спирта-сырца с
                последовательным отделением питьевых фракций от вредных
                технических. К питьевым относится «тело» и «сердце», к
                техническим – головы и хвосты - фракции с высоким содержанием
                опасных химических соединений.
              </p>
            </Card>
            <p>
              Данное описание относится к перегонке на стандартном, самом
              простом самогонном аппарате, с холодильником и перегонным кубом.
              При первой перегонке окончательно вызревшая брага отрабатывается
              полностью на высоких температурах. В результате первой перегонки
              получается непригодный для питья спирт-сырец.
            </p>
            <h2>Подготовка спирта сырца к перегонке</h2>
            <p>
              При второй, завершающей перегонке, спирт-сырец разделяется на
              фракции. Спирт-сырец разводится водой до крепости 20° или даже до
              15°, что облегчает последующее разделение его на фракции. В
              практике самогоноварения актуальным вопросом остается вопрос
              оптимальной пропорции отделяемых фракций – голов, тела и хвостов.
              При перегонке спирта-сырца процент голов составляет 3-10%, а
              хвостов 17-23%, с общими потерями 20-33%, откуда выход
              качественного самогона составляет 67-80% от количества
              спирта-сырца.
            </p>
            <h2>Дробная перегонка поэтапно</h2>
            <p>
              Головы отбираются при низкой температуре нагрева и скорости отбора
              1-2 капли в секунду, из расчета 60-100 мл на каждый килограмм
              сахара в браге до ее сбраживания. Использовать дистиллят голов
              можно лишь для розжига мангала при приготовлении шашлыка.
            </p>
            <p>
              После отбора голов начинается отбор тела, питьевой наиболее
              качественной фракции. Опытные самогонщики определяют момент
              перехода к отбору тела по исчезновению неприятного запаха
              дистиллята. На практике же отбор тела завершается по ряду
              показателей – постоянно растущая температура браги достигает 92°С,
              а крепость дистиллята опускается ниже 40°.
            </p>
            <p>
              С этого момента емкость под дистиллят необходимо заменить и начать
              отбирать хвосты.
            </p>
            <h2>Что такое хвосты и что с ними делать</h2>
            <p>
              Дистилляту хвостов свойственен неприятный сивушный запах, хвосты
              непригодны для питья. Хвосты можно вылить или накопить до
              необходимого объема и перегнать до качественного самогона, либо
              добавить в новую брагу. Перед перегонкой хвосты следует также
              разбавить водой до крепости 20°.
            </p>
            <p>
              При соблюдении правильной технологии перегонки возможно
              гарантированное получение качественного алкогольного напитка.
            </p>
            <div id="id-C-A-1654628-3"></div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default DrobnayaPeregonka;
