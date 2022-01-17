import { CartViewModel } from "../interfaces";
import { useSelectorTyped } from "../../../store/hooks/useSelectorTyped";
import { useCartActions } from "../../../store";

const useCartViewModel: () => CartViewModel = () => {
  const { cart } = useSelectorTyped((store) => store.cart); 
  const prodActions = useCartActions();
  
  function removeProduct(id: number) {
    prodActions.remove(id);
  }

  function sumTotalPrice(): number {
    let total = 0;
    cart.forEach((item) => total += (item.product.price * item.quantity));
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
