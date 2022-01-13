import { useContext } from "react";
import { ProductContextInterface } from "./interfaces";
import ProductsContext from "./products.context";

const useProducts = (): ProductContextInterface => useContext(ProductsContext);

export default useProducts;
