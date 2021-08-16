const calcsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-CALCULATE-DILUTE':
            let newCalculateDilute = {
                addwater: action.initWater, afterDelution: action.reqVol
            }
            state.addDilutionWaterData.splice(0);
            state.addDilutionWaterData.push(newCalculateDilute);
            return  state;
        case 'UPDATE-ALL-DATA-DILUTE':
            state.valInitVol = action.valInitVol;
            state.valInitFortr = action.valInitFortr;
            state.valNecessFortr = action.valNecessFortr;
            return  state;
        case 'ADD-CALCULATE-HEADS':
            let newCalculateHeads = {
                volOutHeads: action.outHeads, volAbsAlcohol: action.absAlcohol
            }
            state.calculateHeadsData.splice(0);
            state.calculateHeadsData.push(newCalculateHeads);
            return  state;
        case 'UPDATE-ALL-DATA-HEADS':
            state.alcoholVol = action.alcoholVol;
            state.alcoholFortr = action.alcoholFortr;
            state.partHeadVol = action.partHeadVol;
            return  state;
        case 'ADD-CALCULATE-FRACTIONAL':
            let newCalculateFraction = {
                volAbsAlcohol: action.absAlcohol, reqVol: action.reqVol, volOutHeads: action.outHeads, volOutTails: action.outTails, distillingFortr: action.distillingFortr
            }
            state.calculateFractionalData.splice(0);
            state.calculateFractionalData.push(newCalculateFraction);
            return  state;
        case 'UPDATE-ALL-DATA-FRACTIONAL':
            state.alcoholVol = action.alcoholVol;
            state.alcoholFortr = action.alcoholFortr;
            state.distillingFortr = action.distillingFortr;
            state.partHeadVol = action.partHeadVol;
            state.partTailVol = action.partTailVol;
            return  state;
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