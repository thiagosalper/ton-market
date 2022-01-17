import { useDispatch } from "react-redux"
import { CART_ACTIONS } from ".";
import { CartItem, Product } from "../../data";
import { useSelectorTyped } from "../hooks/useSelectorTyped";

interface CartActionsInterface {
  add(item: Product): void;
  remove(id: number): void;
  removeAll(): void;
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
  }

  function removeAll() {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  }

  return {
    add,
    remove,
    removeAll,
  }
}

export default useCartActions;
