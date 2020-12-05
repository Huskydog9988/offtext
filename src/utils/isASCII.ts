export default (str: string): boolean => {
  return /^[\x00-\x7F]*$/.test(str)
}
