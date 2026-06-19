import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        loadComponent: () => import ('./pages/products-page/products-page').then(m => m.ProductsPage)
    },
    {
        path: 'product/:id',
        loadComponent: () => import ('./pages/product-detail/product-detail').then(m => m.ProductDetail)
    },
    {
        path: 'cart',
        loadComponent: () => import ('./pages/cart-page/cart-page').then(m => m.CartPage)
    },
    {
        path: 'add-product',
        loadComponent: () => import ('./pages/add-product/add-product').then(m => m.AddProduct)
    }
];
