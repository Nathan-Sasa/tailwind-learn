import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { fadeInDelay, slideInDown, slideInRight, slideInUp, slideInUpLong} from '../../../shared/animations/animations';

@Component({
  selector: 'app-education',
  imports: [NgFor, CommonModule],
  standalone: true,
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
  animations: [slideInDown, slideInRight, slideInUpLong, slideInUp, fadeInDelay]
})
export class EducationComponent {

    // isVisible = false;

    educations = [
        {
            icon              :  'school',
            iconLocation  :  'location_pin',
            location        : 'Institut Supérieur d\'informatique Programmation et Analyse/Kinshasa',
            grad              :  'Licence en Sciences Informatiques',
            fac               :  'Administration Réseaux et Télécommunications',
            university      :  'nstitut Supérieur – Kinshasa', 
            class             :  ' bg-gradient-to-br from-pink-50 to-pink-100',
            description     :  'Formation approfondie en informatique avec spécialisation en administration des réseaux et télécommunications. Acquisition de compétences solides en programmation, gestion de bases de données, sécurité informatique et architecture des systèmes d\'information.'
        },
        {
            icon              :  'school',
            iconLocation  :  'location_pin',
            location        : 'Institut Supérieur d\'informatique Programmation et Analyse/Kinshasa',
            grad              :  'Graduat en Informatique Industrielle',
            fac               :  'Formation technique spécialisée',
            university      :  'Institut Technique – Kinshasa',
            class             :  ' bg-gradient-to-br from-pink-50 to-pink-100',
            description     : 'Formation technique en informatique industrielle couvrant l\'automatisation, la programmation de systèmes embarqués, la maintenance informatique et l\'intégration de solutions technologiques dans l\'environnement industriel. '
        }
    ]

    // constructor(private el: ElementRef){
        
    //     // this.education[0].class {
    //     // }
    // }

    // ngAfterViewInit(): void {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if (entry.isIntersecting){
    //                 this.isVisible = true;
    //                 observer.unobserve(this.el.nativeElement)
    //             }
    //         },
    //         {threshold: 0.1}
    //     );
    //     observer.observe(this.el.nativeElement)
    // }
}
