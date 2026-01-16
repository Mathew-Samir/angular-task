import { Component, signal } from '@angular/core';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-task');
}
