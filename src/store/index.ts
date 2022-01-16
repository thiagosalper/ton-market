import { combineReducers, createStore } from 'redux';
import { CartReducer } from './reducer/cart.reducer';
export { useCartActions, CART_ACTIONS } from './actions';

const combinedReducer = combineReducers({
  cart: CartReducer,
})

export const store = createStore(combinedReducer);

export type MainStoreStateType = ReturnType<typeof combinedReducer>;
