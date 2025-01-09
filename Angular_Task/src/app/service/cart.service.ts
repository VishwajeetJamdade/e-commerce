import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItem:any;
  cartItemList:any[]=[];
  productList = new BehaviorSubject<any>([])
  constructor() { }

  getProducts(){
    return this.productList.asObservable()
  }

  setProduct(product:any){
this.cartItemList.push(...product);
this.productList.next(product);
  }

  cartAddedProduct(product:any){
    // console.log("from service",product)
    // console.log("productQuantity",product.quantity)
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    // console.log("cartitemlist",this.cartItemList)
  }

  getTotalPrice(){
    let grandTotalval = 0;
    this.cartItemList.map((a:any)=>{
      // console.log("total value",a.total)
      grandTotalval += a.total;
    })
    return grandTotalval;
  }

  rempoveCartitem(product:any){
this.cartItemList.map((a:any, index:any)=>{
  if(product.id === a.id){
    this.cartItemList.splice(index,1);
  }
})
this.productList.next(this.cartItemList)
  }


  
}
