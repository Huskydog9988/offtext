import genCracked from '../../src/utils/genCracked'
import { expect } from 'chai'
import 'mocha'

describe('genCracked', () => {
  it('should return a string', () => {
    const result = genCracked('tEst cASe')
    expect(result).to.be.a('string')
  })
  it('should have a length of at least 9', () => {
    const result = genCracked('tEst cASe')
    // Needs to be 1 less than required length
    expect(result.length).to.be.greaterThan(8)
  })
})
