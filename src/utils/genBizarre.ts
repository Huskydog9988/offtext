import chars from './chars'

export default (str: string): void => {
  let product = ''
  for (const rawChar of str) {
    const char = rawChar.toLowerCase()

    if (char in chars && chars[char].length > 0) {
      const randomChar =
        chars[char][
          Math.floor(Math.random() * chars[char].length)
        ]
      product += randomChar
    } else {
      product += char
    }
  }

  console.log(product)
}
