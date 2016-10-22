var regExes = require('./countries');

function verifyCode(country, code) {
    var regex = getRegexForCountry(country);
    return regex && regex.test(code);
}

function getRegexForCountry(country) {
    return regExes[country];
}

module.exports = {
    verifyCode: verifyCode,
    getRegexForCountry: getRegexForCountry
};