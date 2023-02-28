import { Component,Input } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  //Input() category ="";

  products = products;

  onNotify() {
    window.alert('Вам придет уведомление когда продукт будет на скидке!');
  }
}

