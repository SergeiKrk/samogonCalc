import razbavlenieVodoj from "../assets/img/kalkulyator-razbavleniya-samogona-vodoj.png";
import otborGolov from "../assets/img/kalkulyator-otbor-golov.png";
import drobnojPeregonki from "../assets/img/kalkulyator-drobnoj-peregonki.png";
import poslePervoj from "../assets/img/razbavlenie-samogona-vodoj-posle-pervoj-peregonki.png";
import posleVtorogo from "../assets/img/razbavlenie-samogona-vodoj-posle-vtorogo-peregona.png";
import smeshivaniyaSpirtov from "../assets/img/kalkulyator-smeshivaniya-spirtov.png";
import absolyutnogoSpirta from "../assets/img/kalkulyator-absolyutnogo-spirta.png";
import sebestoimostiSamogona from "../assets/img/kalkulyator-sebestoimosti-samogona.png";
import stoimostSamogona from "../assets/img/primernaya-stoimost-samogona.png";
import saharnojBragi from "../assets/img/kalkulyator-saharnoj-bragi.png";
import vodkiIzSpirta from "../assets/img/kalkulyator-vodki-iz-spirta.png";
import otTemperatury from "../assets/img/kalkulyator-spirta-ot-temperatury.png";
import zamenySahara from "../assets/img/kalkulyator-zameny-sahara-glyukozoj.png";

let initialState = {
  addDilutionWaterData: [{ addwater: 0, afterDelution: 0 }],
  calculateHeadsData: [{ volOutHeads: 0, volAbsAlcohol: 0 }],
  calculateTailsData: [{ volOutHeads: 0, volAbsAlcohol: 0 }],
  calculateFractionalData: [
    {
      volAbsAlcohol: 0,
      reqVol: 0,
      volOutHeads: 0,
      volOutTails: 0,
      distillingFortr: 0,
    },
  ],
  calculateMixedStrengthData: [
    { id: 0, volMixedStrength: 0, volMixedVolume: 0 },
  ],
  calculateSebestoimostData: [
    {
      id: 0,
      volCostLiter: 0,
      volCostHalfLiter: 0,
      volDrink: 0,
    },
  ],
  calculateSebestoimApproxData: [
    {
      id: 0,
      volCostLiterApprox: 0,
      volCostHalfLiterApprox: 0,
      volAbsAlcoholApprox: 0,
      volReqVol: 0,
    },
  ],
  calculateBragaData: [
    {
      id: 0,
      volAlcoholStrength: 0,
      volRawAlcohol: 0,
      volWaterVolume: 0,
    },
  ],
  calculateVodkaData: [
    {
      id: 0,
      volWaterVol: 0,
      volMixedVolume: 0,
    },
  ],
  calculateTemperatureData: [
    {
      id: 0,
      volStrenghth: 0,
    },
  ],
  calculateZamenaData: [
    {
      id: 0,
      volGlucose: 0,
    },
  ],
  calcsData: [
    {
      id: 1,
      href: "kalkulyator-razbavleniya-samogona-vodoj",
      img: `${razbavlenieVodoj}`,
      title: "Калькулятор разбавления самогона водой",
      description:
        "Поможет рассчитать и смешать дистиллят с водой в нужных пропорциях",
    },
    {
      id: 2,
      href: "kalkulyator-otbor-golov",
      img: `${otborGolov}`,
      title: "Калькулятор отбор голов",
      description:
        "Рассчитает объем вредных «голов» и объем чистого спирта в полученном дистилляте",
    },
    {
      id: 3,
      href: "kalkulyator-drobnoj-peregonki",
      img: `${drobnojPeregonki}`,
      title: "Калькулятор дробной перегонки спирта-сырца",
      description:
        "Поможет отобрать «голов» и «хвосты» в процессе дробной перегонки",
    },
    {
      id: 4,
      href: "razbavlenie-samogona-vodoj-posle-pervoj-peregonki",
      img: `${poslePervoj}`,
      title: "Калькулятор разбавления спирта-сырца (после первого перегона)",
      description:
        "Поможет подготовить спирт-сырец к дробной перегонке, расчитать пропорции и разбавить его до приемлемой крепости",
    },
    {
      id: 5,
      href: "kalkulyator-smeshivaniya-spirtov",
      img: `${smeshivaniyaSpirtov}`,
      title: "Калькулятор смешивания спиртов",
      description:
        "Поможет узнайте сейчас какой градус будет после смешивания двух спиртосодержащих жидкостей",
    },
    {
      id: 6,
      href: "kalkulyator-absolyutnogo-spirta",
      img: `${absolyutnogoSpirta}`,
      title: "Калькулятор абсолютного спирта",
      description:
        "Рассчитает объем абсолютного (100°) спирта в полученном дистилляте или ректификате",
    },
    {
      id: 7,
      href: "kalkulyator-sebestoimosti-samogona",
      img: `${sebestoimostiSamogona}`,
      title: "Калькулятор себестоимости самогона",
      description:
        "Поможет рассчитать стоимость получившегося дистиллята исходя из затрат на сырье и ингредиенты",
    },
    {
      id: 8,
      href: "primernaya-stoimost-samogona",
      img: `${stoimostSamogona}`,
      title: "Калькулятор примерной стоимости самогона",
      description:
        "Рассчитает примерную себестоимость и объем самогона даже если вы еще не ставили брагу и не перегоняли дистиллят.",
    },
    {
      id: 9,
      href: "kalkulyator-saharnoj-bragi",
      img: `${saharnojBragi}`,
      title: "Калькулятор браги",
      description:
        "Поможет вычислить крепость браги и оптимальные пропорции сырья и воды для затора",
    },
    {
      id: 10,
      href: "kalkulyator-vodki-iz-spirta",
      img: `${vodkiIzSpirta}`,
      title: "Калькулятор водки из спирта",
      description:
        "Поможет разбавить спирт или дистиллят до водочной крепости в 40°",
    },
    {
      id: 11,
      href: "kalkulyator-spirta-ot-temperatury",
      img: `${otTemperatury}`,
      title: "Калькулятор спирта от температуры",
      description:
        "Рассчитает реальную крепость при любой температуре  дистиллята",
    },
    {
      id: 12,
      href: "kalkulyator-zameny-sahara-glyukozoj",
      img: `${zamenySahara}`,
      title: "Калькулятор замены сахара декстрозой",
      description:
        "Поможет определить сколько потребуется декстрозы для аналогичного выхода спирта из браги на сахаре.",
    },
  ],
  valInitVol: "",
  valInitFortr: "",
  valNecessFortr: "",
  alcoholVol: "",
  alcoholFortr: "",
  partHeadVol: "",
  distillingFortr: "",
  partTailVol: "",
  firstVol: "",
  firstStr: "",
  firstTemp: "20",
  secondVol: "",
  secondStr: "",
  secondTemp: "20",
  materialCost: "",
  materialMass: "",
  yeastCost: "",
  bentoniteCost: "0",
  coalCost: "0",
  wgeCostCost: "50",
  volumeDrinkCost: "",
  rawMaterials: "",
  massMaterials: "",
  costMaterials: "",
  wge: "50",
  bentoniteCoal: "0",
  efficiency: "80",
  heads: "",
  tails: "",
  sugar: "",
};

const calcsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-CALCULATE-DILUTE": {
      let newCalculateDilute = {
        addwater: action.initWater,
        afterDelution: action.reqVol,
      };
      let stateCopy = { ...state };
      stateCopy.addDilutionWaterData.splice(0);
      stateCopy.addDilutionWaterData = [...state.addDilutionWaterData];
      stateCopy.addDilutionWaterData.push(newCalculateDilute);
      return stateCopy;
    }
    case "UPDATE-ALL-DATA-DILUTE":
      return {
        ...state,
        valInitVol: action.valInitVol,
        valInitFortr: action.valInitFortr,
        valNecessFortr: action.valNecessFortr,
      };
    case "ADD-CALCULATE-MIXED-STRENGTH": {
      let newCalculateMixedStrength = {
        volMixedStrength: action.mixedStrength,
        volMixedVolume: action.mixedVolume,
      };
      let stateCopy = { ...state };
      stateCopy.calculateMixedStrengthData.splice(0);
      stateCopy.calculateMixedStrengthData = [
        ...state.calculateMixedStrengthData,
      ];
      stateCopy.calculateMixedStrengthData.push(newCalculateMixedStrength);
      return stateCopy;
    }
    case "UPDATE-ALL-DATA-MIXED-STRENGTH":
      return {
        ...state,
        firstVol: action.firstVol,
        firstStr: action.firstStr,
        firstTemp: action.firstTemp,
        secondVol: action.secondVol,
        secondStr: action.secondStr,
        secondTemp: action.secondTemp,
      };
    case "ADD-CALCULATE-SEBESTOIMOST": {
      let newCalculateSebestoimost = {
        volCostLiter: action.costLiter,
        volCostHalfLiter: action.costHalfLiter,
        volDrink: action.volumeDrink,
      };
      let stateCopy = { ...state };
      stateCopy.calculateSebestoimostData.splice(0);
      stateCopy.calculateSebestoimostData = [
        ...state.calculateSebestoimostData,
      ];
      stateCopy.calculateSebestoimostData.push(newCalculateSebestoimost);
      return stateCopy;
    }
    case "ADD-CALCULATE-SEBESTOIM-APPROX": {
      let newCalculateSebestoimApprox = {
        volCostLiterApprox: action.costLiterApprox,
        volCostHalfLiterApprox: action.costHalfLiterApprox,
        volAbsAlcoholApprox: action.volumeAbsAlcoholApprox,
        volReqVol: action.reqVolApprox,
      };
      let stateCopy = { ...state };
      stateCopy.calculateSebestoimApproxData.splice(0);
      stateCopy.calculateSebestoimApproxData = [
        ...state.calculateSebestoimApproxData,
      ];
      stateCopy.calculateSebestoimApproxData.push(newCalculateSebestoimApprox);
      return stateCopy;
    }
    case "ADD-CALCULATE-BRAGA": {
      let newCalculateBraga = {
        volRawAlcohol: action.rawAlcohol,
        volWaterVolume: action.waterVolume,
        volAlcoholStrength: action.alcoholStrength,
      };
      let stateCopy = { ...state };
      stateCopy.calculateBragaData.splice(0);
      stateCopy.calculateBragaData = [...state.calculateBragaData];
      stateCopy.calculateBragaData.push(newCalculateBraga);
      return stateCopy;
    }
    case "ADD-CALCULATE-VODKA": {
      let newCalculateVodka = {
        volWaterVol: action.waterVol,
        volMixedVolume: action.mixedVolume,
      };
      let stateCopy = { ...state };
      stateCopy.calculateVodkaData.splice(0);
      stateCopy.calculateVodkaData = [...state.calculateVodkaData];
      stateCopy.calculateVodkaData.push(newCalculateVodka);
      return stateCopy;
    }
    case "ADD-CALCULATE-TEMPERATURE": {
      let newCalculateTemperature = {
        volStrenghth: action.Strenghth,
      };
      let stateCopy = { ...state };
      stateCopy.calculateTemperatureData.splice(0);
      stateCopy.calculateTemperatureData = [...state.calculateTemperatureData];
      stateCopy.calculateTemperatureData.push(newCalculateTemperature);
      return stateCopy;
    }
    case "UPDATE-ALL-DATA-SEBESTOIMOST":
      return {
        ...state,
        materialCost: action.materialCost,
        materialMass: action.materialMass,
        yeastCost: action.yeastCost,
        bentoniteCost: action.bentoniteCost,
        coalCost: action.coalCost,
        wgeCostCost: action.wgeCostCost,
        volumeDrinkCost: action.volumeDrinkCost,
      };
    case "UPDATE-ALL-DATA-SEBESTOIM-APPROX":
      return {
        ...state,
        rawMaterials: action.rawMaterials,
        massMaterials: action.massMaterials,
        costMaterials: action.costMaterials,
        yeastCost: action.yeastCost,
        wge: action.wge,
        bentoniteCoal: action.bentoniteCoal,
        efficiency: action.efficiency,
        heads: action.heads,
        tails: action.tails,
      };
    case "UPDATE-ALL-DATA-BRAGA":
      return {
        ...state,
        rawMaterials: action.rawMaterials,
        massMaterials: action.massMaterials,
        mashVolume: action.mashVolume,
      };
    case "UPDATE-ALL-DATA-VODKA":
      return {
        ...state,
        firstVol: action.firstVol,
        firstStr: action.firstStr,
        firstTemp: action.firstTemp,
        secondTemp: action.secondTemp,
      };
    case "UPDATE-ALL-DATA-TEMPERATURE":
      return {
        ...state,
        firstStr: action.firstStr,
        firstTemp: action.firstTemp,
      };
    case "ADD-CALCULATE-ZAMENA": {
      let newCalculateZamena = {
        volGlucose: action.glucose,
      };
      let stateCopy = { ...state };
      stateCopy.calculateZamenaData.splice(0);
      stateCopy.calculateZamenaData = [...state.calculateZamenaData];
      stateCopy.calculateZamenaData.push(newCalculateZamena);
      return stateCopy;
    }
    case "UPDATE-ALL-DATA-ZAMENA":
      return {
        ...state,
        sugar: action.sugar,
      };
    case "ADD-CALCULATE-HEADS": {
      let newCalculateHeads = {
        volOutHeads: action.outHeads,
        volAbsAlcohol: action.absAlcohol,
      };
      let stateCopy = { ...state };
      stateCopy.calculateHeadsData = [...state.calculateHeadsData];
      stateCopy.calculateHeadsData.splice(0);
      stateCopy.calculateHeadsData.push(newCalculateHeads);
      return stateCopy;
    }
    case "UPDATE-ALL-DATA-HEADS":
      return {
        ...state,
        alcoholVol: action.alcoholVol,
        alcoholFortr: action.alcoholFortr,
        partHeadVol: action.partHeadVol,
      };
    case "ADD-CALCULATE-FRACTIONAL": {
      let newCalculateFraction = {
        volAbsAlcohol: action.absAlcohol,
        reqVol: action.reqVol,
        volOutHeads: action.outHeads,
        volOutTails: action.outTails,
        distillingFortr: action.distillingFortr,
      };
      let stateCopy = { ...state };
      stateCopy.calculateFractionalData = [state.calculateFractionalData];
      stateCopy.calculateFractionalData.splice(0);
      stateCopy.calculateFractionalData.push(newCalculateFraction);
      return stateCopy;
    }
    case "UPDATE-ALL-DATA-FRACTIONAL":
      return {
        ...state,
        alcoholVol: action.alcoholVol,
        alcoholFortr: action.alcoholFortr,
        distillingFortr: action.distillingFortr,
        partHeadVol: action.partHeadVol,
        partTailVol: action.partTailVol,
      };
    default:
      return state;
  }
};

export const addCalculateSebestoimostActionCreator = (
  costLiter,
  costHalfLiter,
  volumeDrink
) => {
  return {
    type: "ADD-CALCULATE-SEBESTOIMOST",
    costLiter: costLiter,
    costHalfLiter: costHalfLiter,
    volumeDrink: volumeDrink,
  };
};
export const addCalculateSebestoimApproxActionCreator = (
  costLiterApprox,
  costHalfLiterApprox,
  volumeAbsAlcoholApprox,
  reqVolApprox
) => {
  return {
    type: "ADD-CALCULATE-SEBESTOIM-APPROX",
    costLiterApprox: costLiterApprox,
    costHalfLiterApprox: costHalfLiterApprox,
    volumeAbsAlcoholApprox: volumeAbsAlcoholApprox,
    reqVolApprox: reqVolApprox,
  };
};

export const updateAllDataSebestoimostActionCreator = (
  materialCost,
  materialMass,
  yeastCost,
  bentoniteCost,
  coalCost,
  wgeCostCost,
  volumeDrinkCost
) => {
  return {
    type: "UPDATE-ALL-DATA-SEBESTOIMOST",
    materialCost: materialCost,
    materialMass: materialMass,
    yeastCost: yeastCost,
    bentoniteCost: bentoniteCost,
    coalCost: coalCost,
    wgeCostCost: wgeCostCost,
    volumeDrinkCost: volumeDrinkCost,
  };
};

export const updateAllDataSebestoimApproxActionCreator = (
  rawMaterials,
  massMaterials,
  costMaterials,
  yeastCost,
  wge,
  bentoniteCoal,
  efficiency,
  heads,
  tails
) => {
  return {
    type: "UPDATE-ALL-DATA-SEBESTOIM-APPROX",
    rawMaterials: rawMaterials,
    massMaterials: massMaterials,
    costMaterials: costMaterials,
    yeastCost: yeastCost,
    wge: wge,
    bentoniteCoal: bentoniteCoal,
    efficiency: efficiency,
    heads: heads,
    tails: tails,
  };
};

export const addCalculateBragaActionCreator = (
  rawAlcohol,
  waterVolume,
  alcoholStrength
) => {
  return {
    type: "ADD-CALCULATE-BRAGA",
    rawAlcohol: rawAlcohol,
    waterVolume: waterVolume,
    alcoholStrength: alcoholStrength,
  };
};
export const updateAllDataBragaActionCreator = (
  rawMaterials,
  massMaterials,
  mashVolume
) => {
  return {
    type: "UPDATE-ALL-DATA-BRAGA",
    rawMaterials: rawMaterials,
    massMaterials: massMaterials,
    mashVolume: mashVolume,
  };
};

export const addCalculateVodkaActionCreator = (waterVol, mixedVolume) => {
  return {
    type: "ADD-CALCULATE-VODKA",
    waterVol: waterVol,
    mixedVolume: mixedVolume,
  };
};
export const updateAllDataVodkaActionCreator = (
  firstVol,
  firstStr,
  firstTemp,
  secondTemp
) => {
  return {
    type: "UPDATE-ALL-DATA-VODKA",
    firstVol: firstVol,
    firstStr: firstStr,
    firstTemp: firstTemp,
    secondTemp: secondTemp,
  };
};

export const addCalculateZamenaActionCreator = (glucose) => {
  return {
    type: "ADD-CALCULATE-ZAMENA",
    glucose: glucose,
  };
};
export const updateAllDataZamenaActionCreator = (sugar) => {
  return {
    type: "UPDATE-ALL-DATA-ZAMENA",
    sugar: sugar,
  };
};

export const addCalculateTemperatureActionCreator = (Strenghth) => {
  return {
    type: "ADD-CALCULATE-TEMPERATURE",
    Strenghth: Strenghth,
  };
};
export const updateAllDataTemperatureActionCreator = (firstStr, firstTemp) => {
  return {
    type: "UPDATE-ALL-DATA-TEMPERATURE",
    firstStr: firstStr,
    firstTemp: firstTemp,
  };
};

export const addCalculateMixedStrengthActionCreator = (
  mixedStrength,
  mixedVolume
) => {
  return {
    type: "ADD-CALCULATE-MIXED-STRENGTH",
    mixedStrength: mixedStrength,
    mixedVolume: mixedVolume,
  };
};

export const updateAllDataMixedStrengthActionCreator = (
  firstVol,
  firstStr,
  firstTemp,
  secondVol,
  secondStr,
  secondTemp
) => {
  return {
    type: "UPDATE-ALL-DATA-MIXED-STRENGTH",
    firstVol: firstVol,
    firstStr: firstStr,
    firstTemp: firstTemp,
    secondVol: secondVol,
    secondStr: secondStr,
    secondTemp: secondTemp,
  };
};

export const addCalculateHeadsActionCreator = (absAlcohol, outHeads) => {
  return {
    type: "ADD-CALCULATE-HEADS",
    absAlcohol: absAlcohol,
    outHeads: outHeads,
  };
};

export const updateAllDataHeadsActionCreator = (
  alcoholVol,
  alcoholFortr,
  partHeadVol
) => {
  return {
    type: "UPDATE-ALL-DATA-HEADS",
    alcoholVol: alcoholVol,
    alcoholFortr: alcoholFortr,
    partHeadVol: partHeadVol,
  };
};

export const addCalculateFractionalActionCreator = (
  absAlcohol,
  reqVol,
  outHeads,
  outTails,
  distillingFortr
) => {
  return {
    type: "ADD-CALCULATE-FRACTIONAL",
    absAlcohol: absAlcohol,
    reqVol: reqVol,
    outHeads: outHeads,
    outTails: outTails,
    distillingFortr: distillingFortr,
  };
};

export const updateAllDataFractionalActionCreator = (
  alcoholVol,
  alcoholFortr,
  distillingFortr,
  partHeadVol,
  partTailVol
) => {
  return {
    type: "UPDATE-ALL-DATA-FRACTIONAL",
    alcoholVol: alcoholVol,
    alcoholFortr: alcoholFortr,
    distillingFortr: distillingFortr,
    partHeadVol: partHeadVol,
    partTailVol: partTailVol,
  };
};

export const updateAllDataDiluteActionCreator = (
  valInitVol,
  valInitFortr,
  valNecessFortr
) => {
  return {
    type: "UPDATE-ALL-DATA-DILUTE",
    valInitVol: valInitVol,
    valInitFortr: valInitFortr,
    valNecessFor: valNecessFortr,
  };
};

export const addCalculateDilute = (initWater, reqVol) => {
  return {
    type: "ADD-CALCULATE-DILUTE",
    initWater: initWater,
    reqVol: reqVol,
  };
};

export default calcsReducer;
