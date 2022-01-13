import { Product } from "../../data";

export enum PROD_ACTIONS {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

interface actionAddProduct {
  type: PROD_ACTIONS.ADD_PRODUCT;
  payload: Product[];
}

interface actionRemoveProduct {
  type: PROD_ACTIONS.REMOVE_PRODUCT;
  payload: Product[];
}

export type ActionProdReducer = actionAddProduct | actionRemoveProduct;
