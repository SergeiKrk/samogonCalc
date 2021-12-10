import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/styles.css";
import {
  FaStar,
  FaCalculator,
  FaRocket,
  FaBolt,
  FaGripHorizontal,
} from "react-icons/fa";
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
        }}
      />

      <HomeContainer store={props.store} />
      <section className="page-section text-white bg-primary mb-0">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white mb-0">
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

      <section className="page-section mb-0">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Алкогольный калькулятор самогонщика: преимущества
          </h2>

          <div className="divider-custom">
            <div className="divider-custom-line"></div>
          </div>

          <div className="lead divider-custom">
            Ищите лучший калькулятор самогонщика? Возможно, вы его нашли. Наши
            онлайн калькуляторы:
          </div>

          <div className="row">
            <div className="col-lg-4 initial">
              <FaRocket /> Загружаются заметно быстрее всех остальных
              калькуляторов самогона конкурентов. Не нужно ждать пока страница
              откроется, ведь это всех раздражает.
            </div>
            <div className="col-lg-4 initial">
              <FaBolt /> Рассчет осуществляется сразу после ввода параметров в
              калькулятор. Не нужно совершать лишнего действия и нажимать на
              кнопту "Посчитать".
            </div>
            <div className="col-lg-4 initial">
              <FaGripHorizontal /> Четкая и понятная структура сервиса.
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div>Загрузка...</div>}>
        <DisqusBlock />
      </Suspense>
      <Footer />
    </>
  );
};

export default Home;
