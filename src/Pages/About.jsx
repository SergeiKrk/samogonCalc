import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import aboutImg from "../assets/img/samogoncalc-bender.png";
import Footer from "../Components/Footer/Footer";

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

      <div className="row justify-content-center mb-5 mt-5">
        <div className="col-lg-8 col-xl-7">
          <p className="lead text-left">
            SamogonCalc помог и в знак благодарности вы хотите поспособствовать
            его развитию? Для этого достаточно:
          </p>
          <ul className="text-left">
            <li>Сообщите оошибках на сайте.</li>
            <li>
              Оставить ссылку на SamogonCalc.ru в сайте блоге или в соц.сетях.
            </li>
            <li>
              Расскажите о нас друзьям и знакомым на крупных тематических
              площадках.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
