import React from "react";
import { Link } from "react-router-dom";
import s from "./CalcBlock.module.css";
import Modal from "react-bootstrap/Modal";
import { FaCalculator } from "react-icons/fa";
import RazbavleniyaSamogonaCalc from "../Calcs/RazbavleniyaSamogonaCalc/RazbavleniyaSamogonaCalc";

const CalcCard = (props) => {
  return (
    <div key={props.id} className={`${s.dlockCard} col-md-6 col-lg-2 mb-5`}>
      <div className="portfolio-item mx-auto">
        <Link to={`${props.Href}`}>
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div
              className={`${s.iconCalc} portfolio-item-caption-content text-center text-white`}
            >
              <FaCalculator />
            </div>
          </div>
          <img
            src={props.Img}
            className={`${s.imgCard} img-fluid`}
            alt={props.Title}
          />
        </Link>
      </div>
      <Link className="text-secondary" to={`${props.Href}`}>
        <h3 className={`${s.titleCard} text-secondary text-center`}>
          {props.Title}
        </h3>
      </Link>
      <span className={`${s.descripyionCard} text-center`}>
        {props.Description}
      </span>
    </div>
  );
};

export default CalcCard;
