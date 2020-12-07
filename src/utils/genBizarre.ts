import chars from './chars'
import getRandom from './getRandom'

export default (str: string): string => {
  let product = ''
  for (const rawChar of str) {
    const char = rawChar.toLowerCase()

    if (char in chars && chars[char].length > 0) {
      const randomChar = getRandom(chars[char]) // chars[char][0]
      product += randomChar
    } else {
      product += char
    }
  }

  return product
}
