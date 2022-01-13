import { Cart } from "../../../data";

export interface CartViewModel {
  list: Cart;
  removeProduct(index: number): void;
}