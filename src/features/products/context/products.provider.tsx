import { useState, useMemo } from "react";
import { Product } from "../../../data";
import ProductsContext from "./products.context";

const ProductsProvider: React.FC = ({children}) => {
  const [selection, setSelection] = useState<Product[]>([]);
  
  function addProduct(prod: Product) {
    const haveSome = selection?.some((item) => item.id === prod.id);
    if (!haveSome) {
      const list = selection;
      list.push(prod);
      setSelection(list);
    }
  }

  const payloadContext = useMemo(() => ({
    selection, 
    setSelection: addProduct
  }), [selection, addProduct])

  return (
    <ProductsContext.Provider value={payloadContext}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider;
