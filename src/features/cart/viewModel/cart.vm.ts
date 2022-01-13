import { CartViewModel } from "../interfaces";
import { useSelectorTyped } from "../../../utils/hooks/useSelectorTyped";

const useCartViewModel: () => CartViewModel = () => {
  const { cart } = useSelectorTyped((store) => store.products); 
  
  function removeProduct() {
    //
  }

  function sumTotalPrice() {
    let total = 0;
    return cart.forEach((item) => total += item.price);
  }

  return {
    list: {
      total: sumTotalPrice(),
      products: cart
    },
    removeProduct,
  }
};

export default useCartViewModel;
