import { Component,OnInit} from '@angular/core';

import {categories, Category } from "../categories";
import {Product } from "../products";
import {ActivatedRoute} from "@angular/router";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {filter, find} from "rxjs";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  category: Category | undefined;

  constructor(
    private route: ActivatedRoute,
  ) {
  }


  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));

    // Find the product that correspond with the id provided in route.
    this.category = categories.find(
      (category) => category.id === categoryIdFromRoute
    );
  }


  onNotify() {
    window.alert('Вам придет уведомление когда продукт будет на скидке!');
  }

  removeProduct(id: number) {
    // @ts-ignore
    //   let id:number = this.category.id;
    //   categories.
    //
    let categoryId: number = this.category?.id;
    for (let x of categories){
      if(x.id ==categoryId) {
        x.productList = x.productList.filter(function (el) {
          return el.id != id;
        });
      }
    }

  }
}
