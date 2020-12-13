import getRandom from '../../src/utils/getRandom'
import { expect } from 'chai'
import 'mocha'

const testArray = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
]

describe('getRandom', () => {
  it('should return a string', () => {
    const result = getRandom(testArray)
    expect(result).to.be.a('string')
  })
})
