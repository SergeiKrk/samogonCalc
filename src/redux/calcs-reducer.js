let initialState = {
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

const calcsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-CALCULATE-DILUTE': {
            let newCalculateDilute = {
                addwater: action.initWater, afterDelution: action.reqVol
            };
            let stateCopy = {...state};
            stateCopy.addDilutionWaterData.splice(0);
            stateCopy.addDilutionWaterData = [...state.addDilutionWaterData];
            stateCopy.addDilutionWaterData.push(newCalculateDilute);
            return stateCopy;
        }
        case 'UPDATE-ALL-DATA-DILUTE':
            return {
                ...state,
                valInitVol: action.valInitVol,
                valInitFortr: action.valInitFortr,
                valNecessFortr: action.valNecessFortr
            };
        case 'ADD-CALCULATE-HEADS': {
            let newCalculateHeads = {
                volOutHeads: action.outHeads, volAbsAlcohol: action.absAlcohol
            };
            let stateCopy = {...state};
            stateCopy.calculateHeadsData = [...state.calculateHeadsData];
            stateCopy.calculateHeadsData.splice(0);
            stateCopy.calculateHeadsData.push(newCalculateHeads);
            return stateCopy;
        }
        case 'UPDATE-ALL-DATA-HEADS':
            return {
                ...state,
                alcoholVol: action.alcoholVol,
                alcoholFortr: action.alcoholFortr,
                partHeadVol: action.partHeadVol
            };
        case 'ADD-CALCULATE-FRACTIONAL': {
            let newCalculateFraction = {
                volAbsAlcohol: action.absAlcohol,
                reqVol: action.reqVol,
                volOutHeads: action.outHeads,
                volOutTails: action.outTails,
                distillingFortr: action.distillingFortr
            };
            let stateCopy = {...state};
            stateCopy.calculateFractionalData = [state.calculateFractionalData];
            stateCopy.calculateFractionalData.splice(0);
            stateCopy.calculateFractionalData.push(newCalculateFraction);
            return stateCopy;
        }
        case 'UPDATE-ALL-DATA-FRACTIONAL':
            return {
                ...state,
                alcoholVol: action.alcoholVol,
                alcoholFortr: action.alcoholFortr,
                distillingFortr: action.distillingFortr,
                partHeadVol: action.partHeadVol,
                partTailVol: action.partTailVol
            };
        default:
            return  state;
    }
}

export const addCalculateHeadsActionCreator = (absAlcohol,outHeads) => {
    return {
        type: 'ADD-CALCULATE-HEADS',
        absAlcohol: absAlcohol,
        outHeads: outHeads
    }
}

export const updateAllDataHeadsActionCreator = (alcoholVol,alcoholFortr,partHeadVol) => {
    return {
        type: 'UPDATE-ALL-DATA-HEADS',
        alcoholVol: alcoholVol,
        alcoholFortr: alcoholFortr,
        partHeadVol: partHeadVol
    }
}

export const addCalculateFractionalActionCreator = (absAlcohol,reqVol,outHeads,outTails,distillingFortr) => {
    return {
        type: 'ADD-CALCULATE-FRACTIONAL',
        absAlcohol: absAlcohol,
        reqVol: reqVol,
        outHeads: outHeads,
        outTails: outTails,
        distillingFortr: distillingFortr
    }
}

export const updateAllDataFractionalActionCreator = (alcoholVol,alcoholFortr,distillingFortr,partHeadVol,partTailVol) => {
    return {
        type: 'UPDATE-ALL-DATA-FRACTIONAL',
        alcoholVol: alcoholVol,
        alcoholFortr: alcoholFortr,
        distillingFortr: distillingFortr,
        partHeadVol: partHeadVol,
        partTailVol: partTailVol
    }
}

export const updateAllDataDiluteActionCreator = (valInitVol,valInitFortr,valNecessFortr) => {
    return {
        type: 'UPDATE-ALL-DATA-DILUTE',
        valInitVol: valInitVol,
        valInitFortr: valInitFortr,
        valNecessFor: valNecessFortr
    }
}

export const addCalculateDilute = (initWater,reqVol) => {
    return {
        type: 'ADD-CALCULATE-DILUTE',
        initWater: initWater,
        reqVol: reqVol
    }
}

export default calcsReducer;