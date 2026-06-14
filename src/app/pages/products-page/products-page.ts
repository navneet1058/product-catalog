import { CurrencyPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-products-page',
  imports: [CurrencyPipe, ProductCard, RouterLink],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
  standalone: true
})
export class ProductsPage {
  protected readonly categoryFilter = signal<string>('all');
  protected readonly productService = inject(ProductService);

  protected readonly filteredProducts = () => {
    const category = this.categoryFilter();
    const products = this.productService.inStockProducts();
    return (category === 'all') ? products : products.filter(product => product.category === category);
  }

  onCategoryChange(event: Event): void {
    const selectedCategory = (event.target as HTMLSelectElement).value;
    this.categoryFilter.set(selectedCategory);
  }

  protected onAddToCart(product: Product): void {
    this.productService.addToCart(product);
  }
}
