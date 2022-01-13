import { useState } from "react";
import { Product } from "../../../data";
import ProductsContext from "./products.context";

const ProductsProvider: React.FC = ({children}) => {
  const [selection, setSelection] = useState<Product[]>();
  
  return (
    <ProductsContext.Provider value={{selection, setSelection}}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider;
