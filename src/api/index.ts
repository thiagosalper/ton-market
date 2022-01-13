import TonApiClass from "./tonApi.class";
export { default as TON_API_ERRORS } from './errors';

const config = {
  baseURL: 'https://tonmarket.free.beeceptor.com/',
  headers: {},
}

const TonApi = new TonApiClass(config);

export default TonApi;
