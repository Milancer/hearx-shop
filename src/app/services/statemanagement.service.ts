import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class StatemanagementService {

  cart:Products[]
  cartCount: number

  constructor(private http: HttpClient) {
    this.cart = []
    this.cartCount = 0
  }

  getJSON(): Observable<any> {
    return this.http.get("./assets/data/product-list.json");
  }

  addToCart(product:Products){
    let index = this.cart.findIndex(x => x.id === product.id)
    this.cartCount = this.cartCount + 1
    console.log(this.cartCount)
    if(index == -1){
      this.cart.push({id: product.id,name: product.name,price: product.price, quantity: 1})
    } else {
      this.cart[index].quantity = this.cart[index].quantity + 1
    }
  }
}
