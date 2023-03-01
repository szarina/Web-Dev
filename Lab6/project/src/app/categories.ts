import {cleansers, creams,serums,patches, Product} from "./products";

export interface Category {
  id: number;
  productList: Product[];

  name:String;
}
export  const categories=[
  {id:1,
  productList:cleansers,
  name:"Умывалки"},
  {id:2,
  productList: creams,
  name:"Крем"},
  {id:3,
    productList: serums,
    name:"Сыворотки"},
  {id:4,
    productList: patches,
    name:"Патчи"}

]
