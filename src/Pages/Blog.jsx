import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import aboutImg from "../assets/img/samogoncalc-bender.png";
import Footer from "../Components/Footer/Footer";
import CardBlog from "../Components/Blog/CardBlog";

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

      <CardBlog />

      <Footer />
    </>
  );
};

export default About;
