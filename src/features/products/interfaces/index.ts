import { Product } from "../../../data";

export interface ProductsViewModel {
  list: Product[];
  addProduct(product: Product): void;
  removeProduct(index: number): void;
  onCompare(product: Product): void;
  loading: boolean;
  selection: Product[];
  checkIsCartItem(id: number): boolean;
}