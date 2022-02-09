import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import aboutImg from "../assets/img/samogoncalc-bender.png";
import Footer from "../Components/Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const About = (props) => {
  return (
    <>
      <HeaderBlock
        HeaderBlock={{
          Img: `${aboutImg}`,
          Title: "О проекте",
          Description:
            "SamogonCalc - Набор быстрых онлайн-калькуляторов для винокуров и самогонщиков",
          Href: "kalkulyator-zameny-sahara-glyukozoj",
          titleSeo: "О проекте - SamogonCalc",
          descriptionSeo:
            "SamogonCalc - набор быстрых онлайн-калькуляторов для винокуров и самогонщиков",
          urlSeo: "https://samogoncalc.ru/kalkulyator-zameny-sahara-glyukozoj/",
        }}
      />

      <Container>
        <Row>
          <Col className="text-left mb-3" md={{ span: 8 }}>
            <p>
              SamogonCalc помог Вам? Помогите и Вы нашему проекту. Вы можете
              поспособствовать его развитию довольно простыми действиями:
            </p>
            <Card className="mt-2 mb-2" bg="light" border="dark" body>
              <ul className="text-left">
                <li>Сообщите о ошибке, если вдруг найдете.</li>
                <li>
                  Оставить ссылку на SamogonCalc.ru в соц.сетях, в комментариях
                  YouTube роликов по теме или в своем блоге.
                </li>
                <li>
                  Расскажите о нас друзьям и знакомым на крупных тематических
                  площадках.
                </li>
              </ul>
            </Card>
          </Col>
          <Col className="text-left mb-3" md={{ span: 8, offset: 4 }}>
            <h2>Хотите заказать разработку быстрого сайта?</h2>
            <p>
              Если понравилось быстродействие интерфейса SamogonCalc.ru и для
              Вас нужно разработать:
            </p>
            <ul>
              <li>Cайт с калькуляторами любой сложности,</li>
              <li>Cайт компании,</li>
              <li>Информационный сайт,</li>
              <li>Сайт-визитка</li>
            </ul>
            <p>
              Пишите в Telegram{" "}
              <a href="https://telegram.me/sergeikrk">@sergeikrk</a>
            </p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default About;
