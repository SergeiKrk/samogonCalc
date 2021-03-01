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
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Полезные калькуляторы для винокуров и самогонщиков</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <CalcCard CalcCard={{Href: 'kalkulyator-razbavleniya-samogona-vodoj', Img: `${razbavSam}`, Title: 'Калькулятор разбавления самогона водой', Description: 'Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях'}}/>
                    <CalcCard CalcCard={{Href: 'kalkulyator-otbor-golov', Img: `${otborGolov}`, Title: 'Калькулятор отбор голов', Description: 'Рассчитает объем чистого спирта в полученном и объем вредных «голов» в спирте первой перегонки.'}}/>
                    <CalcCard CalcCard={{Href: 'kalkulyator-drobnoj-peregonki', Img: `${drobPeregon}`, Title: 'Калькулятор дробной перегонки спирта-сырца', Description: 'Хотите начать дробную перегонку? Я помогу отобрать головы и хвосты!'}}/>
                    <CalcCard CalcCard={{Href: 'razbavlenie-samogona-vodoj-posle-pervoj-peregonki', Img: `${razbavlPerv}`, Title: 'Калькулятор разбавления самогона водой (после первого перегона)', Description: 'Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях!'}}/>
                    <CalcCard CalcCard={{Href: 'razbavlenie-samogona-vodoj-posle-vtorogo-peregona', Img: `${razbavlVtor}`, Title: 'Калькулятор разбавления самогона водой (после второго перегона)', Description: 'Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях!'}}/>
                    <CalcCard CalcCard={{Href: 'kalkulyator-smeshivaniya-spirtov', Img: `${smeshSpirt}`, Title: 'Калькулятор смешивания спиртов', Description: 'Смешиваете две разных крепости? Узнайте сейчас какой градус будет на выходе!'}}/>
                    <CalcCard CalcCard={{Href: 'kalkulyator-absolyutnogo-spirta', Img: `${absSpirt}`, Title: 'Калькулятор абсолютного спирта', Description: 'Рассчитает объем чистого спирта в полученном и объем вредных «голов» в спирте первой перегонки.'}}/>
                    <CalcCard CalcCard={{Href: 'kalkulyator-sebestoimosti-samogona', Img: `${sebestoim}`, Title: 'Калькулятор себестоимости самогона', Description: 'Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла.'}}/>
                    <CalcCard CalcCard={{Href: 'kalkulyator-saharnoj-bragi', Img: `${saharBragi}`, Title: 'Калькулятор сахарной браги', Description: 'Вычисляет крепость браги и оптимальные пропорции сахара и воды для браги.'}}/>
                    <CalcCard CalcCard={{Href: 'kalkulyator-vodki-iz-spirta', Img: `${vodka}`, Title: 'Калькулятор водки из спирта', Description: 'Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла.'}}/>
                    <CalcCard CalcCard={{Href: 'kalkulyator-spirta-ot-temperatury', Img: `${vspirtTemperatury}`, Title: 'Калькулятор спирта от температуры', Description: 'Рассчитает реальную крепость самогона при температуре больше или меньше 20 °C.'}}/>
                    <CalcCard CalcCard={{Href: 'kalkulyator-zameny-sahara-glyukozoj', Img: `${saharGlukoza}`, Title: 'Калькулятор замены сахара глюкозой', Description: 'Определяет насколько меньше потребуется глюкозы, чтобы выход спирта из браги был как с 1 кг обычного сахара.'}}/>
                </div>
            </div>
        </section>
    )
}

export default CalcBlock;