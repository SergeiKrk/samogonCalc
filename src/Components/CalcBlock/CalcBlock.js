import React from 'react'
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
                                alt="Калькулятор разбавления самогона водой"
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
                                alt="Калькулятор отбор голов"
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
                                alt="Калькулятор дробной перегонки спирта-сырца"
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
                                src={razbavlPerv}
                                className="img-fluid"
                                alt="Калькулятор разбавления самогона водой после первого перегона"
                            />
                        </div>
                        <a className="text-secondary" href="#">
                            <h3 className="text-secondary" className="text-center">Калькулятор разбавления самогона водой <br/>(после первого перегона)</h3>
                        </a>
                        <p className="text-center">Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях!</p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img 
                                src={razbavlVtor}
                                className="img-fluid"
                                alt="Калькулятор разбавления самогона водой после второго перегона"
                            />
                        </div>
                        <a className="text-secondary" href="#">
                            <h3 className="text-secondary" className="text-center">Калькулятор разбавления самогона водой <br/>(после второго перегона)</h3>
                        </a>
                        <p className="text-center">Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях!</p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img 
                                src={smeshSpirt}
                                className="img-fluid"
                                alt="Калькулятор смешивания спиртов"
                            />
                        </div>
                        <a className="text-secondary" href="#">
                            <h3 className="text-secondary" className="text-center">Калькулятор смешивания спиртов</h3>
                        </a>
                        <p className="text-center">Смешиваете две разных крепости? Узнайте сейчас какой градус будет на выходе!</p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img 
                                src={absSpirt}
                                className="img-fluid"
                                alt="Калькулятор абсолютного спирта"
                            />
                        </div>
                        <a className="text-secondary" href="#">
                            <h3 className="text-secondary" className="text-center">Калькулятор абсолютного спирта</h3>
                        </a>
                        <p className="text-center">Рассчитает объем чистого спирта в полученном и объем вредных «голов» в спирте первой перегонки.</p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img 
                                src={sebestoim}
                                className="img-fluid"
                                alt="Калькулятор себестоимости самогона"
                            />
                        </div>
                        <a className="text-secondary" href="#">
                            <h3 className="text-secondary" className="text-center">Калькулятор себестоимости самогона</h3>
                        </a>
                        <p className="text-center">Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла .</p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img 
                                src={saharBragi}
                                className="img-fluid"
                                alt="Калькулятор сахарной браги"
                            />
                        </div>
                        <a className="text-secondary" href="#">
                            <h3 className="text-secondary" className="text-center">Калькулятор сахарной браги</h3>
                        </a>
                        <p className="text-center">Вычисляет крепость браги и оптимальные пропорции сахара и воды для браги.</p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img 
                                src={vodka}
                                className="img-fluid"
                                alt="Калькулятор водки из спирта"
                            />
                        </div>
                        <a className="text-secondary" href="#">
                            <h3 className="text-secondary" className="text-center">Калькулятор водки из спирта</h3>
                        </a>
                        <p className="text-center">Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла.</p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img 
                                src={vspirtTemperatury}
                                className="img-fluid"
                                alt="Калькулятор спирта от температуры"
                            />
                        </div>
                        <a className="text-secondary" href="#">
                            <h3 className="text-secondary" className="text-center">Калькулятор спирта от температуры</h3>
                        </a>
                        <p className="text-center">Рассчитает реальную крепость самогона при температуре больше или меньше 20 °C.</p>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img 
                                src={saharGlukoza}
                                className="img-fluid"
                                alt="Калькулятор замены сахара глюкозой"
                            />
                        </div>
                        <a className="text-secondary" href="#">
                            <h3 className="text-secondary" className="text-center">Калькулятор замены сахара глюкозой</h3>
                        </a>
                        <p className="text-center">Определяет насколько меньше потребуется глюкозы, чтобы выход спирта из браги был как с 1 кг обычного сахара.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default CalcBlock;