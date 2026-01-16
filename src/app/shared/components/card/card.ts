import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Product } from '../../../core/interfaces/products.interface';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe, TitleCasePipe],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Card {
  product = input.required<Product>();
  viewDetails = output<Product>();

  onViewDetails(): void {
    this.viewDetails.emit(this.product());
  }
}
