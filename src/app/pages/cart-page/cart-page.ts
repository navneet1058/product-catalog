import { Component, inject } from '@angular/core';
import { CartItem } from '../../components/cart-item/cart-item';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  imports: [RouterLink, CartItem, CurrencyPipe],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
  standalone: true
})
export class CartPage {
  protected readonly productService = inject(ProductService);

  protected onRemoveFromCart(product: Product): void {
    this.productService.removeFromCart(product);
  }
}
