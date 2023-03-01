import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../products';
import { CartService } from '../cart.service';
import {categories, Category} from "../categories";
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  category :Category|undefined;
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));
    const productIdFromRoute = Number(routeParams.get('productId'));


    // Find the product that correspond with the id provided in route.
    //fins categorie in categories;then product in categorie.productList
    this.category= categories.find(
      (category)=> category.id === categoryIdFromRoute   );
    // @ts-ignore
    this.product = this.category.productList.find(
      (product) => product.id === productIdFromRoute

    );
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Продукт был добавлен в корзину!!');
  }
}
