import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hearx-shop';
  closeResult = '';
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}


  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(ShoppingCartComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
