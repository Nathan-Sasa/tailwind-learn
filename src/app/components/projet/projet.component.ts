import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { fadeInDelay, slideInDown, slideInUpLong } from '../../shared/animations/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projet',
  imports: [CommonModule, HeaderComponent, RouterModule],
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css',
  animations: [slideInDown, fadeInDelay, slideInUpLong]
})
export class ProjetComponent {
    project = {

    }
}
