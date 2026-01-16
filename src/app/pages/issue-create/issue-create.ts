import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Products } from '../../core/services/products/products';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-issue-create',
  imports: [ReactiveFormsModule],
  templateUrl: './issue-create.html',
  styleUrl: './issue-create.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueCreate {
  private readonly fb = inject(FormBuilder);
  private readonly productsService = inject(Products);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly isSubmitting = signal(false);

  readonly productForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    price: [<number | null>null, [Validators.required, Validators.min(0.1)]],
    description: ['', [Validators.required]],
    category: ['', [Validators.required]],
    image: ['', [Validators.required]],
  });

  onSubmit(): void {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    this.productsService.createNewProduct(this.productForm.getRawValue() as any)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: () => {
          this.isSubmitting.set(false);
        },
      });
  }

  get f() {
    return this.productForm.controls;
  }
}
