import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import s from "./CalcBlock.module.css";
import { FaStar } from "react-icons/fa";
import CalcCard from "./CalcCard";

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
    <section className={`page-section portfolio ${s.FullContainer}`}>
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

      <Container fluid>
        <Row
          xs={2}
          sm={3}
          md={4}
          lg={5}
          xl={6}
          className="justify-content-center"
        >
          {calcsElements}
        </Row>
      </Container>
    </section>
  );
};

export default CalcBlock;
