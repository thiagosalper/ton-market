import { Product } from "../../../data";

export interface ProductContextInterface {
  selection: Product[] | undefined;
  setSelection(item: Product): void;
}
