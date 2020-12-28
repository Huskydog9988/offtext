# Offtext

[![Package](https://github.com/Huskydog9988/offtext/workflows/Package/badge.svg)](https://github.com/Huskydog9988/offtext/actions)
[![current version](https://img.shields.io/npm/v/offtext.svg?style=flat-square)](https://www.npmjs.com/package/offtext)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![forthebadge](https://forthebadge.com/images/badges/built-with-grammas-recipe.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/designed-in-ms-paint.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-black-magic.svg)](https://forthebadge.com)

> Convert your ASCII into weird Unicode strings

Offtext converts your traditional text into incongruous text, straight out of a seizure.

## 🏃‍♀️ Quick Usage

```bash
npx offtext randomcase <your text here>
```

## 📥 Install and Run

You can also install Offtext as a global cli

```bash
npm install -g offtext
offtext gen <your text here>
```

## 📒 Examples

Bash

```bash
offtext randomcase "The Text's CASE is random"
# Output: tHE TEXT'S CaSE Is RandOm

offtext cracked this text is super broken looking..
# Output: ₮ꍩ꒐ʂ 𝓽𝑒ｘ꓄ ꂑ𝔰 ֆʊק𝔼г ɮｒ𝐨𝓴𝔼ꋊ ᒪ𝕠𝔬𝘬IŇ𝙜..

offtext reverse it has been reversed
# Output: desrever neeb sah ti
```

JS

```js
// CommonJS
const offtext = require('offtext')
// ES6
import * as offtext from 'offtext'

const text = 'some random text'

console.log(offtext.randomCase(text))
// Outputs: soME rAndoM tExt

console.log(offtext.cracked(text))
// Outputs: §𝑜𝓂𝑒 ɾΛⓝ𝔡𝓸𝙢 TΣ𝔁ｔ

console.log(offtext.reverse(text))
// Outputs: txet modnar emos
```

## 📝 Notes

- The randomcase command is the default command, meaning it can be used like: `offtext <your text here>`
