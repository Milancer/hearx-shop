import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Products } from '../models/products';

export interface ProductState {
  products : Products[];
}

export function getInitialState(): ProductState {
  return {
    products: [],
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'products' })
export class ProductStore extends Store<ProductState> {
  constructor() {
    super(getInitialState());
  }
}