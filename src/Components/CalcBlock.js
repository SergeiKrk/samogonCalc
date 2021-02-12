import React from 'react'
import razbavSam from '../assets/img/kalkulyator-razbavleniya-samogona-vodoj.png'
import otborGolov from '../assets/img/kalkulyator-otbor-golov.png'
import drobPeregon from '../assets/img/kalkulyator-drobnoj-peregonki.png'
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
                                src={razbavSam}
                                className="img-fluid"
                                alt="калькулятор абсолютного спирта"
                            />
                        </div>
                        <a className="text-secondary" href="#">
                            <h3 className="text-secondary" className="text-center">Калькулятор разбавления самогона водой</h3>
                        </a>
                        <p>Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях</p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img 
                                src={otborGolov}
                                className="img-fluid"
                                alt="калькулятор абсолютного спирта"
                            />
                        </div>
                        <a className="text-secondary" href="#">
                            <h3 className="text-secondary" className="text-center">Калькулятор отбор голов</h3>
                        </a>
                        <p className="text-center">Рассчитает объем чистого спирта в полученном и объем вредных «голов» в спирте первой перегонки.</p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img 
                                src={drobPeregon}
                                className="img-fluid"
                                alt="калькулятор абсолютного спирта"
                            />
                        </div>
                        <a className="text-secondary" href="#">
                            <h3 className="text-secondary" className="text-center">Калькулятор дробной перегонки спирта-сырца</h3>
                        </a>
                        <p className="text-center">Хотите начать дробную перегонку? Я помогу отобрать головы и хвосты!</p>
                    </div>
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
                        <a className="text-secondary" href="#">
                            <h3 className="text-secondary" className="text-center">Калькулятор абсолютного спирта</h3>
                        </a>
                        <p className="text-center">Рассчитает объем чистого спирта в полученном и объем вредных «голов» в спирте первой перегонки.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default CalcBlock;