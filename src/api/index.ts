import TonApiClass from "./tonApi.class";
export { default as TON_API_ERRORS } from './errors';

const config = {
  baseURL: 'https://my-json-server.typicode.com/thiagosalper/fake-repository/',
  headers: {},
}

const TonApi = new TonApiClass(config);

export default TonApi;
