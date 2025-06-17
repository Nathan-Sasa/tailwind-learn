import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-only-projets',
  imports: [CommonModule],
  templateUrl: './only-projets.component.html',
  styleUrl: './only-projets.component.css'
})
export class OnlyProjetsComponent {

    project = [
        {
            projectName : 'Market Website',
            projectImage: '/tailwind-learn/src/app/assets/img/project/market-list.png',
            projectDescription: '',
            projectLink: '',
            projectTechnologies: [],
        },
    ]

}
