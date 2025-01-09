import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
// import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartlist: any = [];
  grandTotal: number = 0;
  data: any;

  constructor(private cart: CartService, private api: ApiService) { }

  ngOnInit(): void {
    this.getAddedProduct()
  }

  getAddedProduct() {
    this.cart.getProducts().subscribe(res => {
      this.cartlist = res;
      this.cartlist.forEach((a: any) => {
        Object.assign(a, { quantity: a.quantity || 1, total: Math.floor((a.price * a.quantity) * 100) / 100 });
      });
      // this.grandTotal = this.cart.getTotalPrice();
      // this.grandTotal = Math.round(this.grandTotal * 100) / 100;
      this.calculateGrandTotal()

    });
    // console.log(this.cartlist)
    return this.cartlist;
  }
  removeItem(item: any) {
    this.cart.rempoveCartitem(item);
  }
  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      item.total = item.price * item.quantity;
      this.calculateGrandTotal();
    }
  }
  increaseQuantity(item: any) {
    item.quantity++;
    item.total = item.price * item.quantity;
    this.calculateGrandTotal();
  }

  calculateGrandTotal() {
    this.grandTotal = this.cart.getTotalPrice();
    this.grandTotal = Math.round(this.grandTotal * 100) / 100;
  }

}

