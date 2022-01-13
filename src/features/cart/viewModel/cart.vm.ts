import { CartViewModel } from "../interfaces";

const useCartViewModel: () => CartViewModel = () => {
  // buscar o store 
  
  const list = {
    total: 0,
    products: []
  }
  function removeProduct() {
    //
  }

  return {
    list,
    removeProduct,
  }
};

export default useCartViewModel;
