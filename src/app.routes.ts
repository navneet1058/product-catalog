import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        loadComponent: () => import ('.pages/products-page/products-page.component').then(m => m.ProductsPageComponent)
    },
    {
        path: 'product/:id',
        loadComponent: () => import ('.pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
    },
    {
        path: 'cart',
        loadComponent: () => import ('.pages/cart-page/cart-page.component').then(m => m.CartPageComponent)
    }
];
