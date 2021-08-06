let store = {
    _state: {
        calcPage: {
            addDilutionWaterData: [
                {addwater: 0, afterDelution: 0}
            ],
            calculateHeadsData: [
                {volOutHeads: 0, volAbsAlcohol: 0}
            ],
            calculateTailsData: [
                {volOutHeads: 0, volAbsAlcohol: 0}
            ],
            calculateFractionalData: [
                {volAbsAlcohol: 0, reqVol: 0, volOutHeads: 0, volOutTails: 0, distillingFortr: 0}
            ],
            calcsData: [
                {id: 1, href: 'kalkulyator-razbavleniya-samogona-vodoj', img: 'https://samogoncalc.ru/img/kalkulyator-razbavleniya-samogona-vodoj.png', title:'Калькулятор разбавления самогона водой', description: 'Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях'},
                {id: 2, href: 'kalkulyator-otbor-golov', img: 'https://samogoncalc.ru/img/kalkulyator-otbor-golov.png', title: 'Калькулятор отбор голов', description: 'Рассчитает объем чистого спирта в полученном дистилляте и объем вредных «голов» в спирте первой перегонки.' },
                {id: 3, href: 'kalkulyator-drobnoj-peregonki', img: 'https://samogoncalc.ru/img/kalkulyator-drobnoj-peregonki.png', title: 'Калькулятор дробной перегонки спирта-сырца', description: 'Хотите начать дробную перегонку? Я помогу отобрать головы и хвосты!' },
                {id: 4, href: 'razbavlenie-samogona-vodoj-posle-pervoj-peregonki', img: 'https://samogoncalc.ru/img/razbavlenie-samogona-vodoj-posle-pervoj-peregonki.png', title: 'Калькулятор разбавления самогона водой (после первого перегона)', description: 'Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях!' },
                {id: 5, href: 'razbavlenie-samogona-vodoj-posle-vtorogo-peregona', img: 'https://samogoncalc.ru/img/razbavlenie-samogona-vodoj-posle-vtorogo-peregona.png', title: 'Калькулятор разбавления самогона водой (после второго перегона)', description: 'Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях!' },
                {id: 6, href: 'kalkulyator-smeshivaniya-spirtov', img: 'https://samogoncalc.ru/img/kalkulyator-smeshivaniya-spirtov.png', title: 'Калькулятор смешивания спиртов', description: 'Смешиваете две разных крепости? Узнайте сейчас какой градус будет на выходе!' },
                {id: 7, href: 'kalkulyator-absolyutnogo-spirta', img: 'https://samogoncalc.ru/img/kalkulyator-absolyutnogo-spirta.png', title: 'Калькулятор абсолютного спирта', description: 'Рассчитает объем чистого спирта в полученном и объем вредных «голов» в спирте первой перегонки.' },
                {id: 8, href: 'kalkulyator-sebestoimosti-samogona', img: 'https://samogoncalc.ru/img/kalkulyator-sebestoimosti-samogona.png', title: 'Калькулятор себестоимости самогона', description: 'Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла.' },
                {id: 9, href: 'kalkulyator-saharnoj-bragi', img: 'https://samogoncalc.ru/img/kalkulyator-saharnoj-bragi.png', title: 'Калькулятор сахарной браги', description: 'Вычисляет крепость браги и оптимальные пропорции сахара и воды для браги.' },
                {id: 10, href: 'kalkulyator-vodki-iz-spirta', img: 'https://samogoncalc.ru/img/kalkulyator-vodki-iz-spirta.png', title: 'Калькулятор водки из спирта', description: 'Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла.' },
                {id: 11, href: 'kalkulyator-spirta-ot-temperatury', img: 'https://samogoncalc.ru/img/kalkulyator-spirta-ot-temperatury.png', title: 'Калькулятор спирта от температуры', description: 'Рассчитает реальную крепость самогона при температуре больше или меньше 20 °C.' },
                {id: 12, href: 'kalkulyator-zameny-sahara-glyukozoj', img: 'https://samogoncalc.ru/img/kalkulyator-zameny-sahara-glyukozoj.png', title: 'Калькулятор замены сахара глюкозой', description: 'Определяет насколько меньше потребуется глюкозы, чтобы выход спирта из браги был как с 1 кг обычного сахара.' }
            ],
            valInitVol: '',
            valInitFortr: '',
            valNecessFortr: '',
            alcoholVol: '',
            alcoholFortr: '',
            partHeadVol: '',
            distillingFortr: '',
            partTailVol: ''
        }

    },
    _callSubscriber() {
        console.log('State is changed')
    },

    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    addCalculateDilute (initWater,reqVol) {

        let newCalculateDilute = {
            addwater: initWater, afterDelution: reqVol
        }
        this._state.calcPage.addDilutionWaterData.splice(0);
        this._state.calcPage.addDilutionWaterData.push(newCalculateDilute);
        this._callSubscriber();
    },
    updateAllDataDilute (valInitVol,valInitFortr,valNecessFortr) {

        this._state.calcPage.valInitVol = valInitVol;
        this._state.calcPage.valInitFortr = valInitFortr;
        this._state.calcPage.valNecessFortr = valNecessFortr;
        this._callSubscriber();
    },
    addCalculateHeads (absAlcohol,outHeads) {

        let newCalculateHeads = {
            volOutHeads: outHeads, volAbsAlcohol: absAlcohol
        }
        this._state.calcPage.calculateHeadsData.splice(0);
        this._state.calcPage.calculateHeadsData.push(newCalculateHeads);
        this._callSubscriber();
    },
    updateAllDataHeads (alcoholVol,alcoholFortr,partHeadVol) {
        this._state.calcPage.alcoholVol = alcoholVol;
        this._state.calcPage.alcoholFortr = alcoholFortr;
        this._state.calcPage.partHeadVol = partHeadVol;
        this._callSubscriber();
    },
    addCalculateFractional (absAlcohol, reqVol, outHeads, outTails, distillingFortr) {
        let newCalculateFraction = {
            volAbsAlcohol: absAlcohol, reqVol: reqVol, volOutHeads: outHeads, volOutTails: outTails, distillingFortr: distillingFortr
        }
        this._state.calcPage.calculateFractionalData.splice(0);
        this._state.calcPage.calculateFractionalData.push(newCalculateFraction);
        this._callSubscriber();
    },
    updateAllDataFractional (alcoholVol, alcoholFortr, distillingFortr, partHeadVol, partTailVol) {
        this._state.calcPage.alcoholVol = alcoholVol;
        this._state.calcPage.alcoholFortr = alcoholFortr;
        this._state.calcPage.distillingFortr = distillingFortr;
        this._state.calcPage.partHeadVol = partHeadVol;
        this._state.calcPage.partTailVol = partTailVol;
        this._callSubscriber();
    },
}

export default store;

window.store = store;