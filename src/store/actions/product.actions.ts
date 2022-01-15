import { useDispatch } from "react-redux"
import { PROD_ACTIONS } from ".";
import { Product } from "../../data";
import { useSelectorTyped } from "../../utils/hooks/useSelectorTyped";

interface CartActionsInterface {
  add(item: Product): void;
  remove(id: number): void;
  removeAll(): void;
}

const useProductActions: () => CartActionsInterface = () => {
  const dispatch = useDispatch();
  const { cart } = useSelectorTyped((store) => store.products);

  function add(item: Product) {
    const newList = cart;
    newList.push(item);
    dispatch({ type: PROD_ACTIONS.ADD_PRODUCT, payload: newList});
  }

  function remove(id: number) {
    const newList = cart;
    const indexRemoved = cart.findIndex((item: Product) => item.id === id);
    newList.splice(indexRemoved, 1);
    dispatch({ type: PROD_ACTIONS.REMOVE_PRODUCT, payload: newList });
  }

  function removeAll() {
    dispatch({ type: PROD_ACTIONS.CLEAR_CART });
  }

  return {
    add,
    remove,
    removeAll,
  }
}

export default useProductActions;
