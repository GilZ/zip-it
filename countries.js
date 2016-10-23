var all = /.*/,
    twoDigits = /^\d{2}$/,
    threeDigits = /^\d{3}$/,
    fourDigits = /^\d{4}$/,
    fiveDigits = /^\d{5}$/,
    sixDigits = /^\d{6}$/,
    threeAndTwoDigits = /^\d{3} \d{2}$/,
    americanStyle = /^\d{5}(-\d{4})?$/,
    jersey = /^GY\d{1,2} \d[A-Z]{2}$/;

module.exports = {
    AD: /^AD\d{3}$/
    , AE: all
    , AF: fourDigits
    , AG: all
    , AI: /^AI-2640$/
    , AL: fourDigits
    , AM: fourDigits
    , AO: all
    , AR: /^(\d{4})|([A-Z]\d{4}[A-Z]{4})$/ // Argentina has both new and old formats. This supports both.
    , AS: /^96799(-\d{4})?$/
    , AT: fourDigits
    , AU: fourDigits
    , AW: all
    , AZ: fourDigits
    , BA: fiveDigits
    , BB: /^BB11000$/
    , BD: fourDigits
    , BE: fourDigits
    , BF: all
    , BG: fourDigits
    , BH: /^\d{3,4}$/
    , BI: all
    , BJ: all
    , BM: /^[A-Za-z]{2} \d{2}|[A-Za-z]{2}$/
    , BN: /^[A-Za-z]{2}\d{4}$/
    , BO: all
    , BQ: all
    , BR: /^\d{5}-\d{3}$/
    , BS: all
    , BT: fiveDigits
    , BW: all
    , BY: sixDigits
    , BZ: all
    , CA: /^[A-CEGHJ-MPR-TV-Y]\d[A-CEGHJ-MPR-TV-Z] |-\d[A-CEGHJ-MPR-TV-Z]\d$/ // But other than that, Canadian are really great people.
    , CD: all
    , CF: all
    , CG: all
    , CH: fourDigits
    , CI: all
    , CK: all
    , CL: /^\d{3}-?\d{4}$/
    , CM: all
    , CN: sixDigits
    , CO: sixDigits
    , CR: americanStyle
    , CU: /.*|(^\d{5}$)/ // Cuba demands postal code only for mass mailing
    , CV: fourDigits
    , CW: all
    , CY: /^\d{4}|(99\d{3})$/
    , CZ: threeAndTwoDigits
    , DE: fiveDigits
    , DJ: all
    , DK: fourDigits
    , DM: all
    , DO: fiveDigits
    , DZ: /^[1-4]\d{4}$/
    , EC: sixDigits
    , EE: fiveDigits
    , EG: /^\d{4,5}$/
    , EH: all
    , ER: all
    , ES: fiveDigits
    , ET: fourDigits
    , FI: fiveDigits
    , FJ: all
    , FK: /^FIQQ 1ZZ$/
    , FM: /^9694[1-4](-\d{4})?$/
    , FO: threeDigits
    , FR: fiveDigits
    , GA: all
    , GB: /^[A-Z]{1,2}\d[A-Z0-9]( \d[A-Z]{2})?$/
    , GD: all
    , GE: fourDigits
    , GF: /^973\d{2}$/
    , GG: jersey
    , GH: all
    , GI: /^GX11 1AA$/
    , GL: fourDigits
    , GM: all
    , GN: threeDigits
    , GP: /^971\d{2}$/
    , GQ: all
    , GR: threeAndTwoDigits
    , GT: fiveDigits
    , GU: americanStyle
    , GW: fourDigits
    , GY: all
    , HK: all
    , HN: /^(HN)?\d{5}$/
    , HR: fiveDigits
    , HT: fourDigits
    , HU: fourDigits
    , ID: fiveDigits
    , IE: /^[A-Z]\d(\d|W) [A-Z][A-Z0-9]{3}$/
    , IL: /^\d{7}$/
    , IM: /^IM\d{1,2} \d[A-Z]{2}$/
    , IN: fiveDigits
    , IQ: fiveDigits
    , IR: /^\d{10}$/
    , IS: threeDigits
    , IT: fiveDigits
    , JE: jersey
    , JM: twoDigits
    , JO: fiveDigits
    , JP: /^\d{3}-\d{4}$/
    , KE: fiveDigits
    , KG: sixDigits
    , KH: fiveDigits
    , KI: all
    , KM: all
    , KN: all
    , KP: all
    , KR: fiveDigits
    , KW: fiveDigits
    , KY: /^KY\d-\d{4}$/
    , KZ: sixDigits
    , LA: fiveDigits
    , LB: /^\d{4}( \d{4})?$/
    , LC: /^LC\d{2} \d{3}$/
    , LI: /^94[8-9]\d$/
    , LK: fiveDigits
    , LR: fourDigits
    , LS: threeDigits
    , LT: /^LT-\d{5}$/
    , LU: fourDigits
    , LV: /^LV-\d{4}$/
    , LY: all
    , MA: fiveDigits
    , MC: /^980\d{2}$/
    , MD: /^MD-?\d{4}$/
    , ME: fiveDigits
    , MG: threeDigits
    , MH: /^969[6-7]\d(-\d{4})?$/
    , MK: fourDigits
    , ML: all
    , MM: fiveDigits
    , MN: sixDigits
    , MO: all
    , MP: /^9695[0-2](-\d{4})?$/
    , MQ: /^972\d{2}$/
    , MR: all
    , MS: /^MSR 1110-1350$/
    , MT: /^[A-Za-z]{3} \d{4}$/
    , MU: fiveDigits
    , MV: fiveDigits
    , MW: all
    , MX: fiveDigits
    , MY: fiveDigits
    , MZ: fourDigits
    , NA: all
    , NC: /^988\d{2}$/
    , NE: fourDigits
    , NG: sixDigits
    , NL: /^(NL-)?\W*\d{4}\W*[A-Z]$/
    , NO: fourDigits
    , NP: fiveDigits
    , NR: all
    , NU: all
    , NY: fiveDigits
    , NZ: fourDigits
    , OM: threeDigits
    , PA: fourDigits
    , PE: fiveDigits
    , PF: /^987\d{2}$/
    , PG: threeDigits
    , PH: fourDigits
    , PK: fiveDigits
    , PL: /^\d{2}-\d{3}$/
    , PM: /^97500$/
    , PR: /^00[679]\d{2}(-\d{4})?$/
    , PS: /^\d{3}|\d{7}$/
    , PT: fourDigits
    , PW: /^96940(-\d{4})?$/
    , PY: fourDigits
    , QA: all
    , RE: /^974\d{2}$/
    , RO: sixDigits
    , RS: fiveDigits
    , RU: sixDigits
    , RW: all
    , SA: americanStyle
    , SB: all
    , SC: all
    , SD: fiveDigits
    , SE: threeAndTwoDigits
    , SG: twoDigits
    , SH: /^(STHL)|(ASCN)|(TDCU) 1ZZ$/
    , SI: /^(SI-)?\d{4}$/
    , SK: threeAndTwoDigits
    , SL: all
    , SM: /^4789\d$/
    , SN: /^(C\.?P\.?\W*)?\d{5}$/
    , SO: /^[A-Z]{2}\W*\d{5}$/
    , SR: all
    , SS: all
    , ST: all
    , SV: fourDigits
    , SX: all
    , SY: all
    , SZ: /^[A-Za-z]\d{3}$/
    , TC: /^TKCA 1ZZ$/
    , TD: all
    , TG: all
    , TH: fiveDigits
    , TJ: sixDigits
    , TK: all
    , TL: all
    , TM: sixDigits
    , TN: fourDigits
    , TO: all
    , TR: fiveDigits
    , TT: sixDigits
    , TV: all
    , TW: /^\d{3}(-\d{2})?$/
    , TZ: fiveDigits
    , UA: fiveDigits
    , UG: all
    , US: fiveDigits
    , UY: fiveDigits
    , UZ: sixDigits
    , VA: /^00120$/
    , VC: /^VC\d{4}$/
    , VE: /^\d{4}(-[A-Z])?$/
    , VG: /^VG11[1-6]\d$/
    , VI: /^008\d{2}(-\d{4})?$/
    , VN: sixDigits
    , VU: all
    , WF: /^986\d{2}$/
    , WS: /^WS\d{4}$/
    , YE: all
    , YT: /^976\d{2}$/
    , ZA: fourDigits
    , ZM: fiveDigits
    , ZW: all
};