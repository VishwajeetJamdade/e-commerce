import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItem: number = 0;
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart.getProducts().subscribe(res => {
      this.cartItem = res.length;
    }
     
    );
    // console.log("cartIten",this.cartItem)
  }

}

