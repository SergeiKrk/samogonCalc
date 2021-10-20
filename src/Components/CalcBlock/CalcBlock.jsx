import React from "react";
import s from "./CalcBlock.module.css";
import { FaStar } from "react-icons/fa";
import CalcCard from "./CalcCard";
import DisqusBlock from "../Header/DisqusBlock";

const CalcBlock = (props) => {
  let calcsElements = props.calcsData.map((calc) => (
    <CalcCard
      key={calc.id}
      Href={calc.href}
      Img={calc.img}
      Title={calc.title}
      Description={calc.description}
    />
  ));

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className={s.FullContainer}>
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Полезные калькуляторы для винокуров и самогонщиков
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            {" "}
            <FaStar />{" "}
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">{calcsElements}</div>
      </div>
      <DisqusBlock />
    </section>
  );
};

export default CalcBlock;
