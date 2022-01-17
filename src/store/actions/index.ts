import { CartItem } from "../../data";

export enum CART_ACTIONS {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CLEAR_CART = 'CLEAR_CART',
}

interface actionAddProduct {
  type: CART_ACTIONS.ADD_PRODUCT;
  payload: CartItem[];
}

interface actionRemoveProduct {
  type: CART_ACTIONS.REMOVE_PRODUCT;
  payload: CartItem[];
}

interface actionClearCart {
  type: CART_ACTIONS.CLEAR_CART;
}

export type ActionCartReducer = 
  actionAddProduct | 
  actionRemoveProduct | 
  actionClearCart;

export { default as useCartActions } from './cart.actions';
