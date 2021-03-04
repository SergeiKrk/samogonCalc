import React from 'react'
import { Link } from 'react-router-dom';
import s from './CalcBlock.module.css'

const CalcCard = (props) => {
    return(
        <div className="col-md-6 col-lg-2 mb-5">
            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img 
                    src={props.CalcCard.Img}
                    className={`${s.imgCard} img-fluid`}
                    alt={props.CalcCard.Title}
                />
            </div>
            <Link className="text-secondary" to={`${props.CalcCard.Href}`}>
                <h3 className={`${s.titleCard} text-secondary text-center`}>{props.CalcCard.Title}</h3>
            </Link>
            <p className="text-center">{props.CalcCard.Description}11</p>
        </div>
    )
}

export default CalcCard;