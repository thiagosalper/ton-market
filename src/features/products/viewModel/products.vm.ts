import { useNavigation } from "@react-navigation/core";
import React, { useCallback, useEffect, useState } from "react";
import { Product, ProductRepository } from "../../../data";
import { MainRouteProps } from "../../../routers/types";
import { ProductsViewModel } from "../interfaces";

const useProductsViewModel = (): ProductsViewModel => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[] | undefined>();
  const navigation = useNavigation<MainRouteProps>();

  const fetchProducts = useCallback( async () => {
    try {
      setLoading(true);
      const response = await ProductRepository.get();
      setProducts(response);
    } catch (error) {
      //
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  function addProduct(product: Product) {
    navigation.navigate('CartRoute');
  }

  function removeProduct() {
    //
  }

 return {
   list: products,
   addProduct,
   removeProduct,
   loading,
 }
}

export default useProductsViewModel;
