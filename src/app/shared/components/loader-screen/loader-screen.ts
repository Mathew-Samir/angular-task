import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LoadingService } from '../../../core/services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader-screen',
  imports: [CommonModule],
  templateUrl: './loader-screen.html',
  styleUrl: './loader-screen.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderScreen {
  protected readonly loadingService = inject(LoadingService);
}
