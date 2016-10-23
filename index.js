var regExes = require('./countries');

function verifyCode(countryCode, postalCode) {
    var regex = getRegexForCountry(countryCode);
    return regex && regex.test(postalCode);
}

function getRegexForCountry(countryCode) {
    return regExes[countryCode];
}

function isCountrySupported(countryCode) {
    return !!regExes[countryCode];
}

function supportedCountryCodes() {
    return Object.keys(regExes);
}

module.exports = {
    verifyCode: verifyCode,
    getRegexForCountry: getRegexForCountry,
    isCountrySupported: isCountrySupported,
    supportedCountryCodes: supportedCountryCodes
};