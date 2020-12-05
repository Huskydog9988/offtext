import genBizarre from '../../src/utils/genBizarre'
import { expect } from 'chai'
import 'mocha'

describe('genBizarre', () => {
  it('should be a string', () => {
    const result = genBizarre('tEst cASe')
    expect(result).to.be.a('string')
  })
  it('should have a length of at least 9', () => {
    const result = genBizarre('tEst cASe')
    // Needs to be 1 less than required length
    expect(result.length).to.be.greaterThan(8)
  })
})
