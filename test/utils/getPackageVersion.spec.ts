import getPackageVersion from '../../src/utils/getPackageVersion'
import { expect } from 'chai'
import 'mocha'

describe('getPackageVersion', () => {
  it('should return a string', async () => {
    const result = await getPackageVersion()
    expect(result).to.be.a('string')
  })
})
