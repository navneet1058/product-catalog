import { Component, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { CartItem } from './components/cart-item/cart-item';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CartItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly cart = signal<Product[]>([]);
  

  protected readonly cartTotal = () =>this.cart().reduce((total, product) => total + product.price, 0);


  
}
