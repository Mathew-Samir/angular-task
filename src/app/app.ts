import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { RouterOutlet } from '@angular/router';
import { LoaderScreen } from './shared/components/loader-screen/loader-screen';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, LoaderScreen],
   templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('angular-task');
}
