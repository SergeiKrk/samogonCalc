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
import s from './CalcBlock.module.css'
import CalcCard from './CalcCard'

const CalcBlock = (props) => {
    return(
        <section className="page-section portfolio" id="portfolio">
            <div className={s.FullContainer}>
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Полезные калькуляторы для самогонщика</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <CalcCard CalcCard={{Img: `${razbavSam}`, Name: 'Калькулятор разбавления самогона водой', descriptionCard: 'Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях'}}/>
                    <CalcCard CalcCard={{Img: `${otborGolov}`, Name: 'Калькулятор отбор голов', descriptionCard: 'Рассчитает объем чистого спирта в полученном и объем вредных «голов» в спирте первой перегонки.'}}/>
                    <CalcCard CalcCard={{Img: `${drobPeregon}`, Name: 'Калькулятор дробной перегонки спирта-сырца', descriptionCard: 'Хотите начать дробную перегонку? Я помогу отобрать головы и хвосты!'}}/>
                    <CalcCard CalcCard={{Img: `${absSpirt}`, Name: 'Калькулятор разбавления самогона водой (после первого перегона)', descriptionCard: 'Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях!'}}/>
                    <CalcCard CalcCard={{Img: `${razbavlPerv}`, Name: 'Калькулятор разбавления самогона водой (после второго перегона)', descriptionCard: 'Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях!'}}/>
                    <CalcCard CalcCard={{Img: `${razbavlVtor}`, Name: 'Калькулятор смешивания спиртов', descriptionCard: 'Смешиваете две разных крепости? Узнайте сейчас какой градус будет на выходе!'}}/>
                    <CalcCard CalcCard={{Img: `${smeshSpirt}`, Name: 'Калькулятор абсолютного спирта', descriptionCard: 'Рассчитает объем чистого спирта в полученном и объем вредных «голов» в спирте первой перегонки.'}}/>
                    <CalcCard CalcCard={{Img: `${sebestoim}`, Name: 'Калькулятор себестоимости самогона', descriptionCard: 'Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла.'}}/>
                    <CalcCard CalcCard={{Img: `${saharBragi}`, Name: 'Калькулятор сахарной браги', descriptionCard: 'Вычисляет крепость браги и оптимальные пропорции сахара и воды для браги.'}}/>
                    <CalcCard CalcCard={{Img: `${vodka}`, Name: 'Калькулятор водки из спирта', descriptionCard: 'Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла.'}}/>
                    <CalcCard CalcCard={{Img: `${vspirtTemperatury}`, Name: 'Калькулятор спирта от температуры', descriptionCard: 'Рассчитает реальную крепость самогона при температуре больше или меньше 20 °C.'}}/>
                    <CalcCard CalcCard={{Img: `${saharGlukoza}`, Name: 'Калькулятор замены сахара глюкозой', descriptionCard: 'Определяет насколько меньше потребуется глюкозы, чтобы выход спирта из браги был как с 1 кг обычного сахара.'}}/>
                </div>
            </div>
        </section>
    )
}

export default CalcBlock;