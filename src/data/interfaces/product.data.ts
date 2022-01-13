import { Product } from "../models/product.model";

export interface ProductData {
  get(): Promise<Product[]>
}