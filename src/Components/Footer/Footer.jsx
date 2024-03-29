import React from "react";
import logoImg from "../../assets/img/kalkulyator-samogonshchika.png";

const Footer = () => {
  return (
    <div className="mt-4">
      <div
        className="tgx-rlf"
        data-rlf-id="7547"
        data-rlf-auto="1"
        data-rlf-flt="1"
        data-rlf-dock="0"
        data-rlf-align="rb"
        data-rlf-min-time="60"
        data-rlf-fw="600"
      ></div>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">SamogonCalc</h4>
              <p className="lead mb-0">
                Набор быстрых онлайн-калькуляторов для винокуров и самогонщиков
              </p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <img
                src={logoImg}
                width="150"
                height="150"
                alt="калькулятор самогонщика Samogoncalc"
              />
            </div>
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">Контакты</h4>
              <p className="lead mb-0">
                Подписывайтесь на наш канал
                <br />
                "Самогон и самогонщики"{" "}
                <a href="https://telegram.me/samogonco">@samogonco</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>SamogonCalc.ru © 2021-2022 </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
