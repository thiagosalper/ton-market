import { CartViewModel } from "../interfaces";
import { useSelectorTyped } from "../../../store/hooks/useSelectorTyped";
import { useCartActions } from "../../../store";
import { Product } from "../../../data";

const useCartViewModel: () => CartViewModel = () => {
  const { cart } = useSelectorTyped((store) => store.cart); 
  const cartActions = useCartActions();
  
  function removeProduct(id: number) {
    cartActions.remove(id);
  }

  function sumTotalPrice(): number {
    let total = 0;
    cart.forEach((item) => total += (item.product.price * item.quantity));
    return total;
  }

  function clearAll() {
    cartActions.removeAll();
  }

  function increment(item: Product) {
    cartActions.incrementQuantity(item);
  }

  function decrement(item: Product) {
    cartActions.decrementQuantity(item);
  }

  return {
    list: {
      total: sumTotalPrice(),
      products: cart
    },
    removeProduct,
    clearAll,
    increment,
    decrement,
  }
};

export default useCartViewModel;
