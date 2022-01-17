import { Cart, Product } from "../../../data";

export interface CartViewModel {
  list: Cart;
  removeProduct(index: number): void;
  clearAll(): void;
  increment(item: Product): void;
  decrement(item: Product): void;
}