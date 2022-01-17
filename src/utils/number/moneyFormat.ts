import currency from 'currency.js';

const moneyFormat = (entry: number) => {
  const value = entry || 0;
  return currency(value, { separator: '.', decimal: ',', symbol: 'R$' }).format();
}

export default moneyFormat;
