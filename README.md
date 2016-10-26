# zip-it

A small library that helps you to verify postal (zip) codes from around the globe

## Installation
####As a node package:
```bash
npm install zip-it --save
```

And in your code:
```javascript
const zipit = require('zip-it')
```

####As a bower component:
```bash
bower install zip-it --save
```

And in your page:
```html
<script src="bower_components/zip-it/zip-it.min.js"></script> <!-- of course, you can use zip-it.js if you want to -->
```

## Simple usage
```javascript
console.log(zipit.verifyCode('US', 37188)); // White house zip code
// => true
console.log(zipit.verifyCode('CA', 'H0H 0H0')); // Santa Claus's postal code
// => true
console.log(zipit.verifyCode('CN', 'Not a valid postal code'));
// => false
console.log(zipit.verifyCode('AA', 'Not a valid country code'));
// => undefined
```

## Full API
```javascript
zipit.verifyCode(countryCode, postalCode)
```
Returns `true` if `postalCode` is a valid postal code in the country, `false` if it's invalid or `undefined` if `countryCode` is not a valid country code
####Notes:
* The verification is not done on the exact address, but verifies `postalCode` adheres to the format of the postal code in the given country.
* Many countries (66 to be exact) don't have a postal code of any sort. In that case, any value of `postalCode` will return `true`.

####Arguments
1. `countryCode` (_String_) – a two capital letters string, representing the relevant country according to [iso 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)
2. `postalCode` (_String_|_Number_) – the postal code to verify

----

```javascript
zipit.isCountrySupported(countryCode)
```
Returns `true` if `countryCode` is supported, `false` otherwise.
Currently zip-it suppports all 234 countries I was able to find in Wikipedia, so if `isCountrySupported` returns `false`, there's a good chance the code is invalid.

####Arguments
1. `countryCode` (_String_) – a two capital letters string, representing the relevant country according to [iso 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)

----

```javascript
zipit.supportedCountryCodes()
```
Return all supported country codes

----

```javascript
zipit.getRegexForCountry(countryCode)
```
Returns the regular expression used for that country. Can be useful in a `pattern` attribute of an `<input>` tag

####Arguments
1. `countryCode` (_String_) – a two capital letters string, representing the relevant country according to [iso 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)


