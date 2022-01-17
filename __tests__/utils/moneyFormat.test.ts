import moneyFormat from "../../src/utils/number/moneyFormat";

describe('util/moneyFormat', () => {
  const value = 100;
  const valueWrong = 'sddsd';
  it('should return a formated number', () => {
    const formated = moneyFormat(value);
    expect(formated).toBe('R$100,00');
  });
  it('should return a zero value', () => {
    const formated = moneyFormat(valueWrong);
    expect(formated).toBe('R$0,00');
  });
  it('should return a zero value from undefined value', () => {
    const formated = moneyFormat(undefined);
    expect(formated).toBe('R$0,00');  
  });
})