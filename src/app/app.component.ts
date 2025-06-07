import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tailwind-learn';

  changeBg = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.changeBg = scrollY > 1150
  }
}
