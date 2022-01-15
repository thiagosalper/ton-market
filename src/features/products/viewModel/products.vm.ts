import { useCallback, useEffect, useState } from "react";
import { Product, ProductRepository } from "../../../data";
import { useProducts } from "../context";
import { ProductsViewModel } from "../interfaces";
import { useProductActions } from "../../../store";

const useProductsViewModel = (): ProductsViewModel => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[] | undefined>();
  const productContext = useProducts();
  const prodAction = useProductActions();

  const fetchProducts = useCallback( async () => {
    try {
      setLoading(true);
      const response = await ProductRepository.get();
      setProducts(response);
    } catch (error) {
      // log de erro
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  function addProduct(product: Product) {
    prodAction.add(product);
  }

  function removeProduct(id: number) {
    prodAction.remove(id);
  }

  function onCompare(product: Product) {
    productContext.setSelection(product);
  }

 return {
   list: products,
   addProduct,
   removeProduct,
   loading,
   selection: productContext.selection,
   onCompare,
 }
}

export default useProductsViewModel;
