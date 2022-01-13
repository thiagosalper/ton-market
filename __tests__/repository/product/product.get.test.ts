import MockAdapter from 'axios-mock-adapter';
import TonApi, { TON_API_ERRORS } from '../../../src/api';
import { ProductRepository } from '../../../src/data';

// nao separei o adapter e mock por ter apenas 1 caso de testes
const mockAdapter = new MockAdapter(TonApi.getInstance());

const RESPONSE_MOCK = [
  {
    "id": 1,
    "name": "Product name",
    "description": "description from product here",
    "image": null,
    "price": 15000
  },
  {
    "id": 2,
    "name": "New product name",
    "description": "description from product here",
    "image": null,
    "price": 29900
  }
];

describe('getProducts repository', () => {
  it('should return a success', async () => {
    mockAdapter.onGet('products').reply(200, RESPONSE_MOCK);
    const response = await ProductRepository.get();
    expect(response).toEqual(RESPONSE_MOCK);
  });
  it('should return an default error', async () => {
    mockAdapter.onGet('products').reply(499, RESPONSE_MOCK);
    const response = ProductRepository.get();
    await expect(response).rejects.toEqual(TON_API_ERRORS.DEFAULT);
  });
  it('should return a timeout error', async () => {
    mockAdapter.onGet('products').reply(408, RESPONSE_MOCK);
    const response = ProductRepository.get();
    await expect(response).rejects.toEqual(TON_API_ERRORS[408]);
  });
  it('should return a timeout error', async () => {
    mockAdapter.onGet('products').reply(500, RESPONSE_MOCK);
    const response = ProductRepository.get();
    await expect(response).rejects.toEqual(TON_API_ERRORS[500]);
  });
});