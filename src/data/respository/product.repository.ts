import TonApi, {TON_API_ERRORS} from "../../api";
import { ProductData } from "../interfaces/product.data";
import { Product } from "../models/product.model";

const ProductRepository: ProductData = {
  get: () => new Promise<Product[]>( async(resolve, reject) => {
    try {
      const response = await TonApi.execute('products', 'GET');
      resolve(response);
    } catch(error) {
      reject(TON_API_ERRORS[error.statusCode] ? TON_API_ERRORS[error.statusCode] : TON_API_ERRORS.DEFAULT);
    
    }
  }),
};

export default ProductRepository;
