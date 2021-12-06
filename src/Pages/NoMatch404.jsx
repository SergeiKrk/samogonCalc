import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import HeaderBlock from "../Components/Header/HeaderBlock";
import Footer from "../Components/Footer/Footer";

const Vodka = (props) => {
  return (
    <div>
      <HeaderBlock
        Href="404"
        Img="https://samogoncalc.ru/img/404.png"
        Title="404"
        Description="Страница не найден"
      />
      <Footer />
    </div>
  );
};

export default Vodka;
