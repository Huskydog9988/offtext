# offtext

Convert your ASCII strings into weird unicode strings

## 🏃‍♀️ Usage

```bash
npx offtext gen <your text here>
```

## 📒 Examples

```bash
npx offtext gen the generated text changes every time!
# Output: ₮𝔥𝑒 𝙜𝔼𝓷ꏂꋪ𝘢𝕥𝖊ԃ tꏂⓧㄒ ꀯ𝖍𝕒𝓃ＧΣs̶͙̗̮̖̋̂̎̚ ɛ꒦Eⓡყ Ƭ꒐𝙢𝑒!

npx offtext gen this text is super broken looking..
# Output: ₮ꍩ꒐ʂ 𝓽𝑒ｘ꓄ ꂑ𝔰 ֆʊק𝔼г ɮｒ𝐨𝓴𝔼ꋊ ᒪ𝕠𝔬𝘬IŇ𝙜..
```

## 📥 Install and Run

You can also install offtext as a global cli

```bash
npm install -g offtext
offtext gen <your text here>
```

## 📝 Notes

- The generate command is the default command meaning it can be used like: `offtext <your text here>`

- You can also used the exposed api in your projects:

```js
const offtext = require('offtext')

const text = 'some random text'
console.log(offtext.genBizarre(text))
// Outputs: §𝑜𝓂𝑒 ɾΛⓝ𝔡𝓸𝙢 TΣ𝔁ｔ
```
