import React, { Component } from "react";
import logoImg from "../../assets/img/kalkulyator-samogonshchika.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">SamogonCalc</h4>
              <p className="lead mb-0">
                - быстрые онлайн-калькуляторы для винокуров и самогонщиков
              </p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <img
                src={logoImg}
                width="150"
                className="img-fluid"
                alt="калькулятор самогонщика Samogoncalc"
              />
            </div>
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">Контакты</h4>
              <p className="lead mb-0">
                По всем вопросам пишите в Telegram <br />
                Sergei Krk{" "}
                <a href="https://telegram.me/sergeikrk">@sergeikrk</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>SamogonCalc.ru © 2021</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
