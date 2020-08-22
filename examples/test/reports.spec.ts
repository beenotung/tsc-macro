import { ReasonCodeType, reasons } from '../src/reports';

describe('Reports TestSuit', function() {
  it('should define list of reasons', function() {
    expect(reasons).toBeDefined();
    expect(Array.isArray(reasons)).toBeTruthy();
  });
  it('list of reasons should match the types', function() {
    expect(typeof ReasonCodeType === 'string');
    reasons.forEach(reason =>
      expect(ReasonCodeType.includes(reason.Code)).toBeTruthy(),
    );
  });
});
