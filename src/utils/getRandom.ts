export default (arry: string[]): string => {
  const randomIndex = Math.floor(
    Math.random() * arry.length,
  )
  return arry[randomIndex]
}
