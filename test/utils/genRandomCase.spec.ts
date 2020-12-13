import genRandomCase from '../../src/utils/genRandomCase'
import { expect } from 'chai'
import 'mocha'

describe('genRandomCase', () => {
  it('should return a string', () => {
    const result = genRandomCase('tEst cASe')
    expect(result).to.be.a('string')
  })
  it('should return true', () => {
    const result = genRandomCase('tEst cASe')
    // Needs to be 1 less than required length
    expect(result.length).to.be.greaterThan(8)
  })
  it('should return false', () => {
    const result = genRandomCase('hello WORLD')
    // Needs to be 1 less than required length
    expect(result.length).to.be.greaterThan(10)
  })
})
