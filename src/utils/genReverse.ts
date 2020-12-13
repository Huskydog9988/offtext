export default (str: string): string => {
  // Thanks to Davaakhuu Erdenekhuu on stackoverflow for this better string reverse function
  // https://stackoverflow.com/questions/48174796/is-there-a-faster-reverse-string-algorithm-for-javascript

  return str
    .split('')
    .reduce(
      (reversed, character) => character + reversed,
      '',
    )
}
