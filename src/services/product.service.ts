import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private readonly _cart = signal<Product[]>([]);
    private readonly _products = signal<Product[]>([
        { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true },
        { id: 2, name: 'Smartphone', price: 499.99, category: 'Electronics', inStock: true },
        { id: 3, name: 'Headphones', price: 199.99, category: 'Accessories', inStock: false },
        { id: 4, name: 'Coffee Maker', price: 79.99, category: 'Home Appliances', inStock: true },
        { id: 5, name: 'Gaming Console', price: 299.99, category: 'Electronics', inStock: false }
    ]);

    readonly products = this._products.asReadonly();
    readonly cart = this._cart.asReadonly();

    readonly categories = computed(() => {
        return [ ...new Set(this._products().map(product => product.category)) ];
    });

    readonly inStockProducts = computed(() => {
        return this._products().filter(product => product.inStock);
    });

    addProduct(product: Product): void {
        this._products.update(products => [...products, product]);
    }

    addToCart(product: Product): void {
        this._cart.update((items) => [...items, product]);
    }

    removeFromCart(product: Product): void {
        this._cart.update((items) => items.filter((item) => item.id !== product.id));
    }

}