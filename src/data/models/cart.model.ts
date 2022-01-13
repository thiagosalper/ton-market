import { Product } from "..";
import { CartItem } from "./cartItem.model";

export interface Cart {
  total: number;
  products: Product[] | undefined;
};
