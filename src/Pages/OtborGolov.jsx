import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import OtborGolovCalcContainer from "../Components/Calcs/OtborGolovCalc/OtborGolovCalcContainer";
import React from "react";
import otborGolovImg from "../assets/img/kalkulyator-otbor-golov.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const OtborGolov = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${otborGolovImg}`,
          Title: "Расчет отбора голов",
          Description:
            "Рассчитает объем чистого спирта в полученном дистилляте и объем вредных «голов» в спирте первой перегонки.",
          Href: "kalkulyator-otbor-golov",
          titleSeo: "Калькулятор отбора голов: онлайн расчет сколько отбирать",
          descriptionSeo:
            "Онлайн калькулятор поможет рассчитать объем голов быстро и точно. Для этого нужно ввести следующие значения: Объем спирта-сырца и Крепость перегоняемого самогона.",
          urlSeo: "https://samogoncalc.ru/kalkulyator-otbor-golov/",
        }}
      />

      <Container>
        <Row>
          <Col className="text-left mb-3" md={{ span: 8, offset: 2 }}>
            <p>
              Онлайн калькулятор отбора голов рассчитает объем вредной верхней
              фракции и объем абсолютного спирта в полученном дистилляте.
            </p>
            <p>
              Например, есть 10 литров спирта-сырца крепостью в 50°. Вы хотите
              узнать объем голов и абсолютного спирта. Вводим два параметра
              "Объем спирта-сырца", "Крепость разбавляемого самогона", "Крепость
              спирта-сырца" и выбираем параметр "Доля Голов" из выпадающего
              списка, например, 10% и сразу получаете ответ, какой объем голов
              нужно отобрать (0.5 л.) и какой объем абсолютного спирта получится
              (в нашем случае 5 л.) и какой общий объем разбавленного самогона
              (спирта) получится (12 л.). Никаких кнопок для расчета нажимать не
              нужно, результат появится автоматически после ввода всех 3-х
              параметров.
            </p>
          </Col>
        </Row>
      </Container>
      <OtborGolovCalcContainer />
      <Container>
        <Row>
          <Col className="text-left mb-3 mt-3" md={{ span: 8, offset: 2 }}>
            <p>
              При дробной перегонке браги осуществляется разделение ее на
              фракции. Помимо воды и этилового спирта (этанола), в браге
              содержатся и иные вещества, часть из которых представляет вред для
              организма и даже ядовита.
            </p>
            <p>
              Для получения качественного напитка брагу перегоняют два раза,
              получая в результате первой перегонки спирт-сырец, а после второй
              – готовый напиток.
            </p>
            <Card className="mt-2" bg="light" border="dark" body>
              <p>
                <b>Отбор голов</b> - процесс отбора легких вредных фракци во
                время второй перегонки спирта-сырца. Обычно отбирают первые
                10-15% от объема абсолютного спирта.
              </p>
            </Card>
            <p>
              Для повышения качества дистиллята необходимо уметь правильно
              делать отбор голов. Головные фракции (первач или первак) – самая
              первая, дурно пахнущая фракция, с содержанием метанола, ацетона,
              ацетальдегида и пр. представляющих опасность веществ. Температура
              кипения этих веществ ниже, чем у этанола, и они отделяются
              первыми.
            </p>
            <p>
              Первач пить или пользоваться им с медицинскими целями (для
              растираний) нельзя, обычно его выливают. После голов отделяется
              тело (или сердце), а затем хвосты. Проблема отбора голов – вопрос
              компромисса между выходом готового продукта и его качеством.
            </p>
            <h2>Как рассчитать количество голов при перегонке?</h2>
            <p>
              Существует несколько проверенных на практике способов отбора
              голов:
            </p>
            <ul>
              <li>По сахару;</li>
              <li>По абсолютному спирту;</li>
              <li>По запаху;</li>
              <li>По температуре.</li>
            </ul>
            <h2>ЧАВО</h2>
            <p>
              Ниже, дадим ответы на самые часто задаваемые вопросы, касающиеся
              отбора голов.
            </p>
            <h3>Сколько голов на один кг сахара?</h3>
            <p>
              С 1 кг сахара отделяют 50-80 мл голов (во время второй перегонки),
              либо разбивают отбор на 2 этапа – по 30-50 мл на каждой из двух
              перегонок. Мы рекомендуем отбирать головы только во время второй
              перегонки.
            </p>
            <h3>Сколько голов отбирать с 6 кг сахара?</h3>
            <p>
              Мы рекомендуем с 6 кг сахара отделять 300-480 мл. голов во время
              второй перегонки. С сахарных и фруктовых брагах обычно нужно
              отбирать чуть больше голов, чем с зерновых браг.
            </p>
            <h3>Что нужно сделать для второго перегона самогона?</h3>
            <ul>
              <li>Перегнать брагу в спирт-сырец;</li>
              <li>Проуглевать спирт-сырец;</li>
              <li>Разбавить сырец до крепости 20 градусов.</li>
            </ul>
            <p>
              Подробный ответ на этот вопрос представлен на странице{" "}
              <a href="/razbavlenie-samogona-vodoj-posle-pervoj-peregonki">
                калькулятора разбавления самогона водой после первого перегона
              </a>
              .
            </p>
            <h3>Как правильно разбавить спирт сырец для второй перегонки?</h3>
            <p>
              Для разбавления используйте родниковую, бутилированную или
              фильтрованную воду. Крепость разбавленного сырца не должна
              превышать 40°. Для упрощения процесса расчетов, можно
              воспользоваться нашим калькулятором.
            </p>
            <p>
              Развернутый ответ на данный вопрос смотрите{" "}
              <a href="/razbavlenie-samogona-vodoj-posle-pervoj-peregonki">
                тут
              </a>
              .
            </p>
            <h3>Как рассчитать количество голов по спирту?</h3>
            <p>
              При неизвестной сахаристости браги, при первой перегонке головы не
              отбирают. Отбор ведется в количестве 8-15% от условного количества
              чистого спирта в спирте-сырце после первой перегонки. Пример:
              после первой перегонки получено 3 л спирта-сырца крепостью 60%.
              Содержание чистого спирта 60*3/100 = 1,8 (л) = 1800 мл. Отделить
              следует от 8*1800/100 = 144 (мл) до 15*1800/100 = 270 (мл). Вполне
              допустимым окажется отбор голов в объеме 200 мл.
            </p>
            <h3>Как рассчитать количество голов по запаху?</h3>
            <p>
              Опытные самогонщики нюхают дистиллят, растерев на ладони несколько
              капель. Тело начинают собирать при пропаже резкого запаха.
            </p>
            <h3>Как рассчитать количество голов по температуре?</h3>
            <p>
              При отсутствии опыта лучше не пользоваться этим методом. В
              аппаратуре на входе в холодильное устройство должен стоять
              термометр. Температура поддерживается в интервале 65-68°С, и идет
              отбор голов. Когда выход дистиллята совершенно прекращается,
              температуру поднимают до 78°С и отбирается тело, вплоть до
              повышения температуры до 85°С.
            </p>
            <div id="id-C-A-1654628-3"></div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default OtborGolov;
