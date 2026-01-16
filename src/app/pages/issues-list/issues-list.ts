import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Products } from '../../core/services/products/products';
import { Product } from '../../core/interfaces/products.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Card } from '../../shared/components/card/card';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issues-list',
  imports: [Card, FormsModule],
  templateUrl: './issues-list.html',
  styleUrl: './issues-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssuesList implements OnInit {
  private readonly productsService = inject(Products);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);

  readonly allProducts = signal<Product[]>([]);
  readonly searchTerm = signal<string>('');

  readonly filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.allProducts().filter(p =>
      p.title.toLowerCase().includes(term)
    );
  });

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getAllProducts()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          this.allProducts.set(res);
        },
        error: (err) => {
          console.error('Error fetching products:', err);
        }
      });
  }

  handleViewDetails(product: Product): void {
    this.router.navigate(['/issues-details', product.id]);
  }
}
