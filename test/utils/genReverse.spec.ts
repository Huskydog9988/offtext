import genReverse from '../../src/utils/genReverse'
import { expect } from 'chai'
import 'mocha'

describe('genReverse', () => {
  it('should return a string', () => {
    const result = genReverse('tEst cASe')
    expect(result).to.be.a('string')
  })
  it('should return true', () => {
    const result = genReverse('tEst cASe')
    expect(result).to.equal('eSAc tsEt')
  })
  it('should return false', () => {
    const result = genReverse('hello WORLD')
    expect(result).to.equal('DLROW olleh')
  })
})
