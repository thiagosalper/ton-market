import { CartViewModel } from "../interfaces";
import { useSelectorTyped } from "../../../utils/hooks/useSelectorTyped";
import { useCartActions } from "../../../store";

const useCartViewModel: () => CartViewModel = () => {
  const { cart } = useSelectorTyped((store) => store.cart); 
  const prodActions = useCartActions();
  
  function removeProduct(id: number) {
    prodActions.remove(id);
  }

  function sumTotalPrice(): number {
    let total = 0;
    cart.forEach((item) => total += item.price);
    return total;
  }

  function clearAll() {
    prodActions.removeAll();
  }

  return {
    list: {
      total: sumTotalPrice(),
      products: cart
    },
    removeProduct,
    clearAll,
  }
};

export default useCartViewModel;
