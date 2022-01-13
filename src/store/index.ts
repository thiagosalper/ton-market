import { combineReducers, createStore } from 'redux';
import { ProductReducer } from './reducer/product.reducer';

const combinedReducer = combineReducers({
  products: ProductReducer,
})

export const store = createStore(combinedReducer);

export type MainStoreStateType = ReturnType<typeof combinedReducer>;
