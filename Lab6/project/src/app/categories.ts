import {Product, products} from "./products";

export interface Categories {
  id: number;
  productList: Product[];

  name:String;
}
export  const categories=[
  {id:1,
  productList:products,
  name:"Cleansers"}
]
