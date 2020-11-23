import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { StatemanagementService } from '../services/statemanagement.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  products = [];

  constructor(private statemanagementService: StatemanagementService) {
    setTimeout(() => {
      this.statemanagementService.getJSON().subscribe(data => {
        this.products = data
        console.log(this.products)
      });
    }, 3000);
  } 

  ngOnInit(): void {
  }

  addToCart(product){
    this.statemanagementService.addToCart(product)
  }
  
}
