import { useContext } from "react";
import { ProductContextInterface } from "./interfaces";
import ProductsContext from "./products.context";

const useProducts = (): ProductContextInterface => {
  const context = useContext(ProductsContext);
  if (!context) throw new Error('Contexto inexistente');
  return context;
};

export default useProducts;
