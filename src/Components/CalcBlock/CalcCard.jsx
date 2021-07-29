import React from 'react'
import { Link } from 'react-router-dom';
import s from './CalcBlock.module.css'
import Modal from "react-bootstrap/Modal";
import { FaCalculator } from "react-icons/fa";
import RazbavleniyaSamogonaCalc from "../Calcs/RazbavleniyaSamogonaCalc/RazbavleniyaSamogonaCalc";

const CalcCard = (props) => {
    let [show, setShow] = React.useState(false);
    let handleClose = () => setShow(false);
    let handleShow = () => setShow(true);

    return(
        <>
        <div className={`${s.dlockCard} col-md-6 col-lg-2 mb-5`}>
            <div className="portfolio-item mx-auto">
                <div onClick={handleShow} className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className={`${s.iconCalc} portfolio-item-caption-content text-center text-white`}><FaCalculator /></div>
                </div>
                <img 
                    src={props.Img}
                    className={`${s.imgCard} img-fluid`}
                    alt={props.Title}
                />
            </div>
            <Link className="text-secondary" to={`${props.Href}`}>
                <h3 className={`${s.titleCard} text-secondary text-center`}>{props.Title}</h3>
            </Link>
            <p className={`${s.descripyionCard} text-center`}>{props.Description}</p>
        </div>
            <Modal size='xl' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.Title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RazbavleniyaSamogonaCalc />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CalcCard;