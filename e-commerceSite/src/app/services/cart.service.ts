import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSource = new BehaviorSubject<any[]>([]);
  cart$ = this.cartSource.asObservable();

  private cartCountSource = new BehaviorSubject<number>(0);
cartCount$ = this.cartCountSource.asObservable();

  
  private apiUrl = 'http://localhost:3000/products'; 

  constructor(private http: HttpClient) {}

  addToCart(product: any) {
    const currentCart = this.cartSource.value;
    const productIndex = currentCart.findIndex(item => item.id === product.id);

    if (productIndex !== -1) {
      currentCart[productIndex].quantity += 1;
    } else {
      currentCart.push({ ...product, quantity: 1 });
    }

    // this.cartSource.next(currentCart);
    this.cartSource.next([...currentCart]);

    this.updateCartCount();

  }

  removeFromCart(productId: number) {
    const updatedCart = this.cartSource.value.filter(product => product.id !== productId);
    this.cartSource.next(updatedCart);
    this.updateCartCount();
  }

  incrementQuantity(productId: number) {
    const currentCart = this.cartSource.value;
    const product = currentCart.find(item => item.id === productId);

    if (product) {
      product.quantity += 1;
      this.cartSource.next([...currentCart]);
      this.updateCartCount()
    }
  }

  decrementQuantity(productId: number) {
    const currentCart = this.cartSource.value;
    const product = currentCart.find(item => item.id === productId);

    if (product && product.quantity > 1) {
      product.quantity -= 1;
      this.cartSource.next([...currentCart]);
      this.updateCartCount();
    } else if (product && product.quantity === 1) {
      confirm("Are You sure You want to delete The product please Use Remove Cart Button")
      // this.removeFromCart(productId); 
    }
  }

  calculateTotal(): number {
    return this.cartSource.value.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  getProducts(limit: number, start: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?_limit=${limit}&_start=${start}`);
  }

  private updateCartCount() {
    // Calculate the total number of products in the cart
    const totalCount = this.cartSource.value.reduce((sum, item) => sum + item.quantity, 0);
  
    // Emit the updated cart count (you'll need a new BehaviorSubject for this)
    this.cartCountSource.next(totalCount);
  }
}
