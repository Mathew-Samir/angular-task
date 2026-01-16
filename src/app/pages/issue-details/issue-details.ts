import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Products } from '../../core/services/products/products';
import { Product } from '../../core/interfaces/products.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-issue-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './issue-details.html',
  styleUrl: './issue-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueDetails implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly productsService = inject(Products);
  private readonly destroyRef = inject(DestroyRef);

  readonly product = signal<Product | null>(null);
  readonly isLoading = signal(true);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: string): void {
    this.productsService.getProductById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          this.product.set(res);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error('Error fetching product:', err);
          this.isLoading.set(false);
        }
      });
  }
}
