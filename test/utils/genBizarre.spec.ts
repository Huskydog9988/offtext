import genBizarre from '../../src/utils/genBizarre'
import { expect } from 'chai'
import 'mocha'

describe('genBizarre', () => {
  it('should be a string', () => {
    const result = genBizarre('tEst cASe')
    expect(result).to.be.a('string')
  })
  it('should have a length of 12', () => {
    const result = genBizarre('tEst cASe')
    expect(result.length).to.be.greaterThan(9)
  })
})
