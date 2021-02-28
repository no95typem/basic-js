const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    return typeof(sampleActivity)=="string"
    && !isNaN(+sampleActivity) 
    && +sampleActivity > 0
    && +sampleActivity <= MODERN_ACTIVITY 
    && Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / (Math.log(2) / HALF_LIFE_PERIOD));
};
