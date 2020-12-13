export default (str: string): string => {
  // End result
  let product = ''

  // Loop through each char
  for (const char of str) {
    const makeUppercase = Math.random() < 0.5

    if (makeUppercase) {
      product += char.toUpperCase()
    } else {
      product += char.toLocaleLowerCase()
    }
  }

  return product
}
