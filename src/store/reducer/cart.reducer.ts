import { Product } from '../../data';
import { ActionCartReducer, CART_ACTIONS } from '../actions';

export interface StoreState {
  product: CartReducerInterface,
}

export interface CartReducerInterface {
  cart: Product[];
}

const initialState: CartReducerInterface = {
  cart: [],
}

export const CartReducer = (
  state: CartReducerInterface = initialState, 
  action: ActionCartReducer
) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_PRODUCT:
      return { ...state, cart: action.payload };
    case CART_ACTIONS.REMOVE_PRODUCT:
      return { ...state, cart: action.payload };
    case CART_ACTIONS.CLEAR_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
}