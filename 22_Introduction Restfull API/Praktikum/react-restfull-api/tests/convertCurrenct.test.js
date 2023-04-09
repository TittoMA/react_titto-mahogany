import convertCurrency from './convertCurrency';

describe('convertCurrency.js', () => {
  it('should be work correctly', async () => {
    const amount = await convertCurrency(100, 'USD', 'IDR');
    expect(amount).toBeTypeOf('number');
    expect(amount).toEqual(1498754);
  });
});
