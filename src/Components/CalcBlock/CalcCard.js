import React from 'react'
import s from './CalcBlock.module.css'
import razbavSam from '../../assets/img/kalkulyator-razbavleniya-samogona-vodoj.png'
import otborGolov from '../../assets/img/kalkulyator-otbor-golov.png'
import drobPeregon from '../../assets/img/kalkulyator-drobnoj-peregonki.png'
import absSpirt from '../../assets/img/kalkulyator-absolyutnogo-spirta.png'
import razbavlPerv from '../../assets/img/razbavlenie-samogona-vodoj-posle-pervoj-peregonki.png'
import razbavlVtor from '../../assets/img/razbavlenie-samogona-vodoj-posle-vtorogo-peregona.png'
import smeshSpirt from '../../assets/img/kalkulyator-smeshivaniya-spirtov.png'
import sebestoim from '../../assets/img/kalkulyator-sebestoimosti-samogona.png'
import saharBragi from '../../assets/img/kalkulyator-saharnoj-bragi.png'
import vodka from '../../assets/img/kalkulyator-vodki-iz-spirta.png'
import vspirtTemperatury from '../../assets/img/kalkulyator-spirta-ot-temperatury.png'
import saharGlukoza from '../../assets/img/kalkulyator-zameny-sahara-glyukozoj.png'

const CalcCard = (props) => {
    return(
        <div className="col-md-6 col-lg-2 mb-5">
            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img 
                    src={props.CalcCard.img}
                    className={`${s.imgCard} img-fluid`}
                    alt={props.CalcCard.Name}
                />
            </div>
            <a className="text-secondary" href="#">
                <h3 className={`${s.titleCard} text-secondary text-center`}>{props.CalcCard.Name}</h3>
            </a>
            <p className="text-center">{props.CalcCard.descriptionCard}</p>
        </div>
    )
}

export default CalcCard;