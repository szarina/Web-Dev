import {cleansers, Product} from "./products";

export interface Category {
  id: number;
  productList: Product[];

  name:String;
}
export  const categories=[
  {id:1,
  productList:cleansers,
  name:"Умывалки"}
]
