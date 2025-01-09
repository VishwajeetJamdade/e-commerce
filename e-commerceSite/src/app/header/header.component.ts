import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartCount = 0;
  constructor(private cartService: CartService,private router: Router) {}

  ngOnInit() {
    // this.cartService.cart$.subscribe(cart => {
    //   this.cartCount = cart.length;
    // });

    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
    
  }

  goToCart() {
    this.router.navigate(['/cart']);  }
}
