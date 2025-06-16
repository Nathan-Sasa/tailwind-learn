import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-only-projets',
  imports: [],
  templateUrl: './only-projets.component.html',
  styleUrl: './only-projets.component.css'
})
export class OnlyProjetsComponent {

    Project = [
        {
            projectName : 'Market Website',
            projectImage: '/tailwind-learn/src/app/assets/img/project/market-list.png',
            projectDescription: '',
            projectLink: '',
            projectTechnologies: [],
        },
    ]

}
