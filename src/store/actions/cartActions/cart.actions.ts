import { useDispatch } from "react-redux"
import { CartItem, Product } from "../../../data";
import { useSelectorTyped } from "../../hooks/useSelectorTyped";
import { APP_ACTIONS } from "../appActions";

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

interface CartActionsInterface {
  add(item: Product): void;
  remove(id: number): void;
  removeAll(): void;
  incrementQuantity(item: Product): void;
  decrementQuantity(item: Product): void;
}

const useCartActions: () => CartActionsInterface = () => {
  const dispatch = useDispatch();
  const { cart } = useSelectorTyped((store) => store.cart);

  function add(item: Product) {
    const newList = cart;
    const newCartItem: CartItem = {
      quantity: 1,
      product: item,
    };
    newList.push(newCartItem)
    dispatch({ type: CART_ACTIONS.ADD_PRODUCT, payload: newList});
  }

  function remove(id: number) {
    const newList = cart;
    const indexRemoved = cart.findIndex((item: CartItem) => item.product.id === id);
    newList.splice(indexRemoved, 1);
    dispatch({ type: CART_ACTIONS.REMOVE_PRODUCT, payload: newList });
    dispatch({ type: APP_ACTIONS.PUSH_FEEDBACK, payload: { type: 'error', text: 'Produto removido do carrinho'}});
  }

  function removeAll() {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  }

  function incrementQuantity(item: Product) {
    dispatch({ type: CART_ACTIONS.INCREMENT_CART, payload: setQttList(item.id, 'INCREMENT') });
  }

  function decrementQuantity(item: Product) {
    dispatch({ type: CART_ACTIONS.DECREMENT_CART, payload: clearEmptyQtts(setQttList(item.id, 'DECREMENT')) });
  }

  function setQttList(id: number, type: 'INCREMENT' | 'DECREMENT'): CartItem[] {
    const newList = cart;
    return newList.map((itemList) => updateQuantityFromItem(itemList, id, type));
  }

  function updateQuantityFromItem(item: CartItem, idToFind: number, type: 'INCREMENT' | 'DECREMENT'): CartItem {
    if (item.product.id === idToFind) {
      return {...item, quantity: type === 'INCREMENT' ? item.quantity + 1 : item.quantity - 1};
    }
    return item;
  }

  function clearEmptyQtts(list: CartItem[]): CartItem[] {
    return list.filter((itemList) => itemList.quantity > 0)
  }

  return {
    add,
    remove,
    removeAll,
    incrementQuantity,
    decrementQuantity,
  }
}

export default useCartActions;
