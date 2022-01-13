import { createContext } from "react";
import { ProductContextInterface } from "./interfaces";

const initialProductsContext: ProductContextInterface = {
  selection: [],
  setSelection: () => {},
};

const ProductsContext = createContext<ProductContextInterface>(initialProductsContext);

export default ProductsContext;
