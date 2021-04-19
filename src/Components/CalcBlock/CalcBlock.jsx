import React from 'react'
import s from './CalcBlock.module.css'
import CalcCard from './CalcCard'
import DisqusBlock from "../Header/DisqusBlock";

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
                    <CalcCard Href='kalkulyator-razbavleniya-samogona-vodoj' Img="https://samogoncalc.ru/img/kalkulyator-razbavleniya-samogona-vodoj.png" Title='Калькулятор разбавления самогона водой' Description='Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях' />
                    <CalcCard Href='kalkulyator-otbor-golov' Img="https://samogoncalc.ru/img/kalkulyator-otbor-golov.png" Title='Калькулятор отбор голов' Description='Рассчитает объем чистого спирта в полученном и объем вредных «голов» в спирте первой перегонки.' />
                    <CalcCard Href='kalkulyator-drobnoj-peregonki' Img="https://samogoncalc.ru/img/kalkulyator-drobnoj-peregonki.png" Title='Калькулятор дробной перегонки спирта-сырца' Description= 'Хотите начать дробную перегонку? Я помогу отобрать головы и хвосты!' />
                    <CalcCard Href='razbavlenie-samogona-vodoj-posle-pervoj-peregonki' Img="https://samogoncalc.ru/img/razbavlenie-samogona-vodoj-posle-pervoj-peregonki.png" Title='Калькулятор разбавления самогона водой (после первого перегона)' Description= 'Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях!' />
                    <CalcCard Href='razbavlenie-samogona-vodoj-posle-vtorogo-peregona' Img="https://samogoncalc.ru/img/razbavlenie-samogona-vodoj-posle-vtorogo-peregona.png" Title='Калькулятор разбавления самогона водой (после второго перегона)' Description= 'Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях!' />
                    <CalcCard Href='kalkulyator-smeshivaniya-spirtov' Img="https://samogoncalc.ru/img/kalkulyator-smeshivaniya-spirtov.png" Title='Калькулятор смешивания спиртов' Description= 'Смешиваете две разных крепости? Узнайте сейчас какой градус будет на выходе!' />
                    <CalcCard Href='kalkulyator-absolyutnogo-spirta' Img="https://samogoncalc.ru/img/kalkulyator-absolyutnogo-spirta.png" Title='Калькулятор абсолютного спирта' Description= 'Рассчитает объем чистого спирта в полученном и объем вредных «голов» в спирте первой перегонки.' />
                    <CalcCard Href='kalkulyator-sebestoimosti-samogona' Img="https://samogoncalc.ru/img/kalkulyator-sebestoimosti-samogona.png" Title='Калькулятор себестоимости самогона' Description= 'Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла.' />
                    <CalcCard Href='kalkulyator-saharnoj-bragi' Img="https://samogoncalc.ru/img/kalkulyator-saharnoj-bragi.png" Title='Калькулятор сахарной браги' Description= 'Вычисляет крепость браги и оптимальные пропорции сахара и воды для браги.' />
                    <CalcCard Href='kalkulyator-vodki-iz-spirta' Img="https://samogoncalc.ru/img/kalkulyator-vodki-iz-spirta.png" Title='Калькулятор водки из спирта' Description= 'Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла.' />
                    <CalcCard Href='kalkulyator-spirta-ot-temperatury' Img="https://samogoncalc.ru/img/kalkulyator-spirta-ot-temperatury.png" Title='Калькулятор спирта от температуры' Description= 'Рассчитает реальную крепость самогона при температуре больше или меньше 20 °C.' />
                    <CalcCard Href='kalkulyator-zameny-sahara-glyukozoj' Img="https://samogoncalc.ru/img/kalkulyator-zameny-sahara-glyukozoj.png" Title='Калькулятор замены сахара глюкозой' Description= 'Определяет насколько меньше потребуется глюкозы, чтобы выход спирта из браги был как с 1 кг обычного сахара.' />
                </div>
            </div>
            <DisqusBlock />
        </section>
    )
}

export default CalcBlock;