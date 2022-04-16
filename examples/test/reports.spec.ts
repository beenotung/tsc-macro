import { expect } from 'chai'
import { ReasonCodeType, reasons, ReasonCodeTypes } from '../src/reports'

describe('Reports TestSuit', function () {
  it('should define list of reasons', function () {
    expect(reasons).not.to.be.undefined
    expect(reasons).to.be.an('array')
  })
  it('list of reasons should match the types', function () {
    expect(ReasonCodeTypes).to.be.an('array')
    expect(ReasonCodeTypes).to.have.length(11)
    reasons.forEach((reason) => {
      expect(ReasonCodeTypes).to.includes(reason.Code)
    })
  })
})
