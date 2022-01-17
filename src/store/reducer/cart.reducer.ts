import { Reducer } from 'redux';
import { CartItem } from '../../data';
import { ActionCartReducer, CART_ACTIONS } from '../actions';

export interface CartReducerInterface {
  cart: CartItem[];
}

const initialState: CartReducerInterface = {
  cart: [],
}

export const CartReducer: Reducer<CartReducerInterface> = (
  state: CartReducerInterface = initialState, 
  action: ActionCartReducer
 ) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_PRODUCT:
      return { ...state, cart: action.payload };
    case CART_ACTIONS.REMOVE_PRODUCT:
      return { ...state, cart: action.payload };
    case CART_ACTIONS.INCREMENT_CART:
      return { ...state, cart: action.payload };
    case CART_ACTIONS.DECREMENT_CART:
      return { ...state, cart: action.payload };
    case CART_ACTIONS.CLEAR_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
}