import { expect } from 'chai'
import { fruit } from '../src/fruit'

describe('Enum TestSuit', function () {
  it('should define enums', function () {
    expect(fruit).not.to.be.undefined
    expect(fruit).to.haveOwnProperty('apple')
    expect(fruit).to.haveOwnProperty('orange')
  })
})
