import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/styles.css";
import { FaCalculator, FaRocket, FaBolt } from "react-icons/fa";
import logoImg from "../../assets/img/kalkulyator-samogonshchika.png";
import HeaderBlockHome from "../../Components/Header/HeaderBlockHome";
import Footer from "../../Components/Footer/Footer";
import HomeContainer from "./HomeContainer";
const DisqusBlock = lazy(() => import("../../Components/Header/DisqusBlock"));

const Home = (props) => {
  return (
    <>
      <HeaderBlockHome
        HeaderBlockHome={{
          Img: `${logoImg}`,
          Title: "Калькулятор самогонщика",
          Description:
            "Калькулятор винокура и самогонщика: онлайн расчет всех важных параметров",
          titleSeo: "Калькулятор Самогонщика: Онлайн расчет",
          descriptionSeo:
            "Точные алкогольные онлайн калькуляторы помогут самогонщику рассчитать нужные параметры спирта, дистиллята и браги.",
          urlSeo: "https://samogoncalc.ru/",
        }}
      />
      <HomeContainer store={props.store} />
      <section className="page-section text-white bg-primary">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            Онлайн калькуляторы самогонщика
          </h2>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              {" "}
              <FaCalculator />{" "}
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <p className="lead">
                <b>Онлайн калькуляторы самогонщика</b> - набор полезных для
                винокуров (дистилье) инструментов-помощников, которые необходимы
                для расчета всех важных параметров в процессе производства
                крепких домашних напитков.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary">
            Алкогольный калькулятор самогонщика: преимущества
          </h2>

          <div className="divider-custom">
            <div className="divider-custom-line"></div>
          </div>

          <div className="lead divider-custom">
            Ищите лучший калькулятор самогонщика? Возможно, вы его нашли. <br />
            Наши онлайн калькуляторы:
          </div>

          <div className="row">
            <div className="col-lg-6 initial">
              <div className="divider-custom">
                <div className="divider-custom-icon">
                  <FaRocket />
                </div>
              </div>
              <p>
                Загружаются заметно быстрее всех остальных калькуляторов
                самогона конкурентов. Не нужно ждать пока страница откроется,
                ведь это всех раздражает.
              </p>
            </div>
            <div className="col-lg-6 initial">
              <div className="divider-custom">
                <div className="divider-custom-icon">
                  <FaBolt />
                </div>
              </div>
              <p>
                Расчет осуществляется сразу после ввода параметров в
                калькулятор. Не нужно совершать лишнего действия и нажимать на
                кнопку "Посчитать".
              </p>
            </div>
          </div>
          <div className="row my-4 rounded bg-white p-4 shadow">
            <div className="col-lg-4 mt-4 order-lg-1">
              <img
                src="https://cv3.litres.ru/pub/c/cover_250/67034733.webp"
                alt="Картинка"
                className="img-fluid rounded px-12"
              />
            </div>

            <div className="col-lg-8 order-lg-2 mx-6">
              <p>
                <b>📕 книга 👇</b>
              </p>
              <h3 className="mb-2 text-xl font-weight-bold">
                ВАШ ПЕРВЫЙ САМОГОН
              </h3>
              <h4 className="mb-4 text-sm text-muted">
                Как выбрать самогонный аппарат, поставить брагу и сделать
                самогон
              </h4>
              <div className="mb-4">
                <a
                  className="btn btn-primary mr-2"
                  href="https://www.litres.ru/pages/quickread/?art=67034733&skin=normal&lfrom=384489674&l=384489674&widget=1.00&iframe=1"
                >
                  Читать онлайн
                </a>
                <a
                  className="btn btn-success"
                  href="https://www.litres.ru/67034733/?lfrom=384489674"
                >
                  Купить
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <hr />
      <Suspense fallback={<div>Загрузка...</div>}>
        <DisqusBlock />
      </Suspense>
      <Footer />
    </>
  );
};

export default Home;
