import TonApi, {TON_API_ERRORS} from "../../api";
import { ProductData } from "../interfaces/product.data";
import { Product } from "../models/product.model";

const ProductRepository: ProductData = {
  get: () => new Promise<Product[]>( async(resolve, reject) => {
    try {
      const response = await TonApi.execute('products', 'GET');
      resolve(response);
      // resolve([
      //   {
      //     "id": 1,
      //     "name": "Product name",
      //     "description": "description from product here",
      //     "image": null,
      //     "price": 15000
      //   },
      //   {
      //     "id": 2,
      //     "name": "New product name",
      //     "description": "description from product here",
      //     "image": null,
      //     "price": 29900
      //   },
      //   {
      //     "id": 3,
      //     "name": "New product name",
      //     "description": "description from product here",
      //     "image": null,
      //     "price": 29900
      //   },
      //   {
      //     "id": 4,
      //     "name": "New product name",
      //     "description": "description from product here",
      //     "image": null,
      //     "price": 29900
      //   },
      //   {
      //     "id": 5,
      //     "name": "New product name",
      //     "description": "description from product here",
      //     "image": null,
      //     "price": 29900
      //   }
      // ]);
    } catch(error) {
      reject(TON_API_ERRORS[error.statusCode] ? TON_API_ERRORS[error.statusCode] : TON_API_ERRORS.DEFAULT);
    
    }
  }),
};

export default ProductRepository;
