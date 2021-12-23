import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";
import notFoundImg from "../assets/img/404.png";

const Vodka = (props) => {
  return (
    <div>
      <HeaderBlock
        HeaderBlock={{
          Img: `${notFoundImg}`,
          Title: "404",
          Description: "Страница не найден",
          Href: "404",
          titleSeo: "404",
          descriptionSeo: "Страница не найден",
          urlSeo: "https://samogoncalc.ru/404/",
        }}
      />
      <Footer />
    </div>
  );
};

export default Vodka;
