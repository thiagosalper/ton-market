import { CartItem } from "./cartItem.model";

export interface Cart {
  total: number;
  products: CartItem[] | undefined;
};
