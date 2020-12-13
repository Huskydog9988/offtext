export default (str: string): boolean => {
  // checks if string is ASCII using regex
  return /^[\x00-\x7F]*$/.test(str)
}
