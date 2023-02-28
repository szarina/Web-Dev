import { Component,Input ,OnInit} from '@angular/core';

import {categories, Categories} from "../categories";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  //Input() category ="";
  category :Categories | undefined;

  constructor(
    private route: ActivatedRoute,

  ) {}


  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));

    // Find the product that correspond with the id provided in route.
    this.category = categories.find(
      (category) =>  category.id === categoryIdFromRoute
    );
  }



  onNotify() {
    window.alert('Вам придет уведомление когда продукт будет на скидке!');
  }
}

