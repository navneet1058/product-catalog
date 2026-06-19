import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
  standalone: true
})
export class AddProduct {

  protected readonly productService = inject(ProductService);
  private readonly router = inject(Router);

  protected readonly productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    category: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    inStock: new FormControl(false)
  });

  get name() { return this.productForm.controls.name; }
  get price() { return this.productForm.controls.price; }
  get category() { return this.productForm.controls.category; }
  get description() { return this.productForm.controls.description; }

  protected onSubmit(): void {
    if (this.productForm.invalid) return;

    const { name, price, category, inStock } = this.productForm.getRawValue();

    this.productService.addProduct({
      id: Date.now(),
      name: name!,
      price: price!,
      category: category!,
      inStock: inStock!
    });

    this.router.navigate(['/products']);
  }

  protected onCancel(): void {
    this.router.navigate(['/products']);
  }
}
