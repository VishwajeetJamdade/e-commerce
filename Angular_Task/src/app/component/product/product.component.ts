import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  productList: any[] = [];
  constructor(private api: ApiService, private cart: CartService) { }

  ngOnInit(): void {
    this.products = this.api.prduct;
    this.productList = this.api.list;

    this.productList.forEach((a: any) => {
      Object.assign(a, { quantity: 1, total: a.price });
    })
  }
  addTocart(item: any) {
    this.cart.cartAddedProduct(item);
    // console.log(item);

  }
}
