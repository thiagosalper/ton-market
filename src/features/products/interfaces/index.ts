import { Product } from "../../../data";

export interface ProductsViewModel {
  list: Product[];
  addProduct(product: Product): void;
  removeProduct(index: number): void;
  loading: boolean;
}