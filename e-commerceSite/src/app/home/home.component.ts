import { Component, ElementRef, HostListener } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any[] = [];
  cartCount = 0;
  start = 0;
  limit = 5;
  loading = false;

  constructor(private cartService: CartService,private router: Router) {}

  ngOnInit() {
    this.loadProducts();
    this.cartService.cart$.subscribe(cart => {
      this.cartCount = cart.length;
    });
  }

  loadProducts() {
    if (this.loading) return; 
    this.loading = true;

    this.cartService.getProducts(this.limit, this.start).subscribe(products => {
      this.products = [...this.products, ...products];
      this.start += this.limit;
      this.loading = false;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = document.documentElement.scrollTop + window.innerHeight;
    const bottomPosition = document.documentElement.scrollHeight;
    
    if (scrollPosition >= bottomPosition - 10 && !this.loading) {
      this.loadProducts();
    }
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.title} has been added to the cart!`);  // Alert for user
  }

  goToCart() {
    this.router.navigate(['/cart']);  }
}

