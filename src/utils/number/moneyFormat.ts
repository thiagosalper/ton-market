import currency from 'currency.js';

const moneyFormat = (entry: number) => {
  if (!entry) return entry;
  return currency(entry, { separator: '.', decimal: ',', symbol: 'R$' }).format();
}

export default moneyFormat;
