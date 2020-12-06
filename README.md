# offtext

![Package](https://github.com/Huskydog9988/offtext/workflows/Package/badge.svg)[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)[![forthebadge](https://forthebadge.com/images/badges/built-with-grammas-recipe.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/designed-in-ms-paint.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/powered-by-black-magic.svg)](https://forthebadge.com)

> Convert your ASCII into weird Unicode strings

offtext converts your traditional text into incongruous text, straight out of a seizure.

## 🏃‍♀️ Usage

```bash
npx offtext gen <your text here>
```

## 📒 Examples

Bash

```bash
npx offtext gen the generated text changes every time!
# Output: ₮𝔥𝑒 𝙜𝔼𝓷ꏂꋪ𝘢𝕥𝖊ԃ tꏂⓧㄒ ꀯ𝖍𝕒𝓃ＧΣs̶͙̗̮̖̋̂̎̚ ɛ꒦Eⓡყ Ƭ꒐𝙢𝑒!

npx offtext gen this text is super broken looking..
# Output: ₮ꍩ꒐ʂ 𝓽𝑒ｘ꓄ ꂑ𝔰 ֆʊק𝔼г ɮｒ𝐨𝓴𝔼ꋊ ᒪ𝕠𝔬𝘬IŇ𝙜..
```

JS

```js
const offtext = require('offtext')

const text = 'some random text'
console.log(offtext.genBizarre(text))
// Outputs: §𝑜𝓂𝑒 ɾΛⓝ𝔡𝓸𝙢 TΣ𝔁ｔ
```

## 📥 Install and Run

You can also install offtext as a global cli

```bash
npm install -g offtext
offtext gen <your text here>
```

## 📝 Notes

- The generate command is the default command meaning it can be used like: `offtext <your text here>`
