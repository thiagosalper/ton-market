import { combineReducers, createStore } from 'redux';
import { AppReducer, AppReducerInterface } from './reducer/app.reducer';
import { CartReducer, CartReducerInterface } from './reducer/cart.reducer';
export { useCartActions, CART_ACTIONS } from './actions';

interface StoreInterface {
  cart: CartReducerInterface;
  app: AppReducerInterface;
}

const combinedReducer = combineReducers<StoreInterface>({
  cart: CartReducer,
  app: AppReducer,
})

export const store = createStore(combinedReducer);

export type MainStoreStateType = ReturnType<typeof combinedReducer>;
