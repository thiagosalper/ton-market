import { combineReducers, createStore } from 'redux';
import { CartReducer, CartReducerInterface } from './reducer/cart.reducer';
export { useCartActions, CART_ACTIONS } from './actions';

interface StoreInterface {
  cart: CartReducerInterface;
}

const combinedReducer = combineReducers<StoreInterface>({
  cart: CartReducer,
})

export const store = createStore(combinedReducer);

export type MainStoreStateType = ReturnType<typeof combinedReducer>;
