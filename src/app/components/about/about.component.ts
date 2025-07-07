import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { fadeInDelay, slideInUp, slideInUpLong } from '../../shared/animations/animations';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education/education.component';
import { LocationComponent } from './location/location.component';
import { IntersectionAnimationDirective } from '../../directives/intersection-animation.directive';
import { SkillsComponent } from './skills/skills.component';
import { StacksComponent } from './stacks/stacks.component';
import { CommentaireComponent } from './commentaire/commentaire.component';

@Component({
  selector: 'app-about',
  imports: [RouterModule, HeaderComponent, EducationComponent, SkillsComponent, CommonModule,StacksComponent, CommentaireComponent],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [slideInUpLong, slideInUp, fadeInDelay]
})

export class AboutComponent {

}
