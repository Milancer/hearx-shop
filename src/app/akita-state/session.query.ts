import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Products } from '../models/products';
import { ProductState, ProductStore } from './session.store';

export class ProductQuery extends Query<ProductState> {  
  constructor(protected productStore: ProductStore) {
    super(productStore);
  }

  getProducts(): Observable<Products[]>{
    return this.select(state => state.products)
  }
}