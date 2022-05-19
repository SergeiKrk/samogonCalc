import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import aboutImg from "../assets/img/samogoncalc-bender.png";
import Footer from "../Components/Footer/Footer";
import CardBlog from "../Components/Blog/CardBlog";

const Blog = (props) => {
  return (
    <>
      <HeaderBlock
        HeaderBlock={{
          Img: `${aboutImg}`,
          Title: "Интересные статьи о винокурении",
          Description:
            "Читайте, варите, гоните, настаивайте, пейте, наслаждайтесь, но не спивайтесь",
          Href: "kalkulyator-zameny-sahara-glyukozoj",
          titleSeo: "О самогоне",
          descriptionSeo:
            "Читайте, варите, гоните, настаивайте, пейте, наслаждайтесь, но не спивайтесь",
          urlSeo: "https://samogoncalc.ru/samogon/",
        }}
      />

      <CardBlog />

      <Footer />
    </>
  );
};

export default Blog;
