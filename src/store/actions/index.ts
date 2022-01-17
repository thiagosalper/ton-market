import { CartItem } from "../../data";

export enum CART_ACTIONS {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CLEAR_CART = 'CLEAR_CART',
  INCREMENT_CART = 'INCREMENT_CART',
  DECREMENT_CART = 'DECREMENT_CART',
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

interface actionIncrementCart {
  type: CART_ACTIONS.INCREMENT_CART;
  payload: CartItem[];
}

interface actionDecrementCart {
  type: CART_ACTIONS.DECREMENT_CART;
  payload: CartItem[];
}

export type ActionCartReducer = 
  actionAddProduct | 
  actionRemoveProduct | 
  actionClearCart |
  actionIncrementCart | 
  actionDecrementCart;

export { default as useCartActions } from './cart.actions';
