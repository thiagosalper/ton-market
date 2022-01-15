import { Cart, Product } from '../../data';
import { ActionProdReducer, PROD_ACTIONS } from '../actions';

export interface StoreState {
  product: ProdReducerInterface,
}

export interface ProdReducerInterface {
  cart: Product[];
}

const initialState: ProdReducerInterface = {
  cart: [],
}

export const ProductReducer = (
  state: ProdReducerInterface = initialState, 
  action: ActionProdReducer
) => {
  switch (action.type) {
    case PROD_ACTIONS.ADD_PRODUCT:
      return { ...state, cart: action.payload };
    case PROD_ACTIONS.REMOVE_PRODUCT:
      return { ...state, cart: action.payload };
    case PROD_ACTIONS.CLEAR_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
}