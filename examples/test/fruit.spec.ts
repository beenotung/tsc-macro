import { fruit } from '../src/fruit';

describe('Enum TestSuit', function() {
  it('should define enums', function() {
    expect(fruit).toBeDefined();
    expect(fruit).toHaveProperty('apple');
    expect(fruit).toHaveProperty('orange');
  });
});
