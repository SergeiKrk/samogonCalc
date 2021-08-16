const calcsReducer = (state, action) => {
    if(action.type === 'ADD-CALCULATE-DILUTE') {
            let newCalculateDilute = {
                addwater: action.initWater, afterDelution: action.reqVol
            }
            state.addDilutionWaterData.splice(0);
            state.addDilutionWaterData.push(newCalculateDilute);

        } else if (action.type === 'UPDATE-ALL-DATA-DILUTE') {
            state.valInitVol = action.valInitVol;
            state.valInitFortr = action.valInitFortr;
            state.valNecessFortr = action.valNecessFortr;

        } else if (action.type === 'ADD-CALCULATE-HEADS') {
            let newCalculateHeads = {
                volOutHeads: action.outHeads, volAbsAlcohol: action.absAlcohol
            }
            state.calculateHeadsData.splice(0);
            state.calculateHeadsData.push(newCalculateHeads);

        } else if (action.type === 'UPDATE-ALL-DATA-HEADS') {
            state.alcoholVol = action.alcoholVol;
            state.alcoholFortr = action.alcoholFortr;
            state.partHeadVol = action.partHeadVol;

        } else if (action.type === 'ADD-CALCULATE-FRACTIONAL') {
            let newCalculateFraction = {
                volAbsAlcohol: action.absAlcohol, reqVol: action.reqVol, volOutHeads: action.outHeads, volOutTails: action.outTails, distillingFortr: action.distillingFortr
            }
            state.calculateFractionalData.splice(0);
            state.calculateFractionalData.push(newCalculateFraction);

        } else if (action.type === 'UPDATE-ALL-DATA-FRACTIONAL') {
            state.alcoholVol = action.alcoholVol;
            state.alcoholFortr = action.alcoholFortr;
            state.distillingFortr = action.distillingFortr;
            state.partHeadVol = action.partHeadVol;
            state.partTailVol = action.partTailVol;

        }
    return state;
}

export default calcsReducer;