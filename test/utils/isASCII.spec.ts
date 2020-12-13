import isASCII from '../../src/utils/isASCII'
import { expect } from 'chai'
import 'mocha'

describe('isASCII', () => {
  it('should return a boolean', () => {
    const result = isASCII('tEst cASe')
    expect(result).to.be.a('boolean')
  })
  it('should return true', () => {
    const result = isASCII('tEst cASe')
    expect(result).to.equal(true)
  })
  it('should return false', () => {
    const result = isASCII('𝙩ҽʂｔ ᑕＡ𝙨ḙ͇̣̗̽̃ͬͨ͟')
    expect(result).to.equal(false)
  })
})
