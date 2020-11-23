import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { StatemanagementService } from '../services/statemanagement.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  products: Products[]

  constructor(private statemanagementService: StatemanagementService) { }

  ngOnInit(){
    this.products = []
    this.products = this.statemanagementService.cart
  }

}
