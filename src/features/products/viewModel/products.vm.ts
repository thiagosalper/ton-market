import { useCallback, useEffect, useState } from "react";
import { Product, ProductRepository } from "../../../data";
import { useProducts } from "../context";
import { ProductsViewModel } from "../interfaces";
import { useCartActions } from "../../../store";
import { useSelectorTyped } from "../../../store/hooks/useSelectorTyped";
import useAppActions from "../../../store/actions/appActions";

const useProductsViewModel: () => ProductsViewModel = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const productContext = useProducts();
  const cartAction = useCartActions();
  const appAction = useAppActions();
  const { cart } = useSelectorTyped((store) => store.cart);

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
    cartAction.add(product);
    appAction.showFeedback({ type: 'success', text: 'Produto Adicionado ao Carrinho'});
  }

  function removeProduct(id: number) {
    cartAction.remove(id);
  }

  function onCompare(product: Product) {
    productContext.setSelection(product);
  }

  function checkIsCartItem(id: number) {
    return cart.some((item) => item.product.id === id);
  }

 return {
   list: products,
   addProduct,
   removeProduct,
   loading,
   selection: productContext.selection || [],
   onCompare,
   checkIsCartItem,
 }
}

export default useProductsViewModel;
