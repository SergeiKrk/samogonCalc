import React from 'react'
import absSpirt from '../assets/img/kalkulyator-absolyutnogo-spirta.png'

const CalcBlock = () => {
    return(
        <div>
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-3 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img 
                                src={absSpirt}
                                className="img-fluid"
                                alt="калькулятор абсолютного спирта"
                            />
                        </div>
                        <a src="#">
                            <h3 className="text-center">Калькулятор абсолютного спирта</h3>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default CalcBlock;