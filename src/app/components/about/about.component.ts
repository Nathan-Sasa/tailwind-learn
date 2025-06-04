import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { fadeInDelay, slideInUp, slideInUpLong } from '../../shared/animations/animations';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { EducationComponent } from './education/education.component';

@Component({
  selector: 'app-about',
  imports: [RouterModule, HeaderComponent, EducationComponent, CommonModule],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [slideInUpLong, slideInUp, fadeInDelay]
})
export class AboutComponent {

}
