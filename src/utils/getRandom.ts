export default (arry: string[]): string => {
  // gen random index of array
  const randomIndex = Math.floor(
    Math.random() * arry.length,
  )
  // return random string from array
  return arry[randomIndex]
}
