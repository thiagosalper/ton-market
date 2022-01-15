import { Product } from "../../data";

export enum PROD_ACTIONS {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CLEAR_CART = 'CLEAR_CART',
}

interface actionAddProduct {
  type: PROD_ACTIONS.ADD_PRODUCT;
  payload: Product[];
}

interface actionRemoveProduct {
  type: PROD_ACTIONS.REMOVE_PRODUCT;
  payload: Product[];
}

interface actionClearCart {
  type: PROD_ACTIONS.CLEAR_CART;
}

export type ActionProdReducer = 
  actionAddProduct | 
  actionRemoveProduct | 
  actionClearCart;

export { default as useProductActions } from './product.actions';
