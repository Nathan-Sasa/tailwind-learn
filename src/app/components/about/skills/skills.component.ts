import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import {  } from '../../../directives/intersection-animation.directive';
import { SkillAnimationDirective } from './skill-animation.directive';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, SkillAnimationDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
