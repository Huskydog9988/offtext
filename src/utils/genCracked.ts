import chars from './chars'
import getRandom from './getRandom'

export default (str: string): string => {
  // End result
  let product = ''

  // Loop through each char
  for (const rawChar of str) {
    // convert to lowercase for uniformality
    const char = rawChar.toLowerCase()

    // if the char has an array
    if (char in chars) {
      // get random char
      const randomChar = getRandom(chars[char])
      // add random char to end result
      product += randomChar
    } else {
      // add misc char to end result
      product += char
    }
  }

  return product
}
