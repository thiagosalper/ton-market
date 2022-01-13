import { useCallback, useEffect, useState } from "react";
import { Product, ProductRepository } from "../../../data";
import { useProducts } from "../context";
import { ProductsViewModel } from "../interfaces";
import { useDispatch } from 'react-redux';
import { useSelectorTyped } from "../../../utils/hooks/useSelectorTyped";
import { PROD_ACTIONS } from "../../../store/actions";

const useProductsViewModel = (): ProductsViewModel => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[] | undefined>();
  const productContext = useProducts();
  const dispatch = useDispatch();
  const {cart} = useSelectorTyped((store) => store.products);

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
    const newlist = cart;
    newlist.push(product);
    dispatch({ type: PROD_ACTIONS.ADD_PRODUCT, payload: newlist});
  }

  function removeProduct() {
    //
  }

  /**
   * Funcionalidade incompleta, não consegui terminar a tempo
   */
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
