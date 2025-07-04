import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { fadeInDelay, fadeInDelayXl, fadeInDelayXxl, slideInDown, slideInRight, slideInUp, slideInUpLong, slideInUpLongXl, slideInUpLongXxl} from '../../../shared/animations/animations';
import { IntersectionAnimationDirective } from '../../../directives/intersection-animation.directive';
import { SkillAnimationDirective } from '../skills/skill-animation.directive';

@Component({
  selector: 'app-education',
  imports: [NgFor, CommonModule, SkillAnimationDirective],
  standalone: true,
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
  animations: [slideInDown, slideInRight, slideInUpLong, slideInUp, fadeInDelay,fadeInDelayXl, fadeInDelayXxl ,slideInUpLongXl, slideInUpLongXxl]
})
export class EducationComponent {

    // isVisible = false;

    educations = [
        {
            icon              :  'school',
            iconLocation  :  'location_pin',
            // location        : 'Institut Supérieur d\'informatique Programmation et Analyse/Kinshasa',
            grad              :  'Licence en Sciences Informatiques',
            fac               :  'Administration Réseaux et Télécommunications',
            university      :  'ISIPA – Kinshasa',
            class             :  '  ',
            description     :  'Formation approfondie en informatique avec spécialisation en administration des réseaux et télécommunications. Acquisition de compétences solides en programmation, gestion de bases de données, sécurité informatique et architecture des systèmes d\'information.',
            bodyClass       : 'hover:shadow-xl'
        },
        {
            icon              :  'school',
            iconLocation  :  'location_pin',
            grad              :  'Graduat en Informatique Industrielle',
            fac               :  'Formation technique spécialisée',
            university      :  'ISIPA – Kinshasa',
            class             :  ' ',
            description     : 'Formation technique en informatique industrielle couvrant l\'automatisation, la programmation de systèmes embarqués, la maintenance informatique et l\'intégration de solutions technologiques dans l\'environnement industriel. '
        }
    ]

    certifications =[
        {
            Icon: 'verified',
            certificateName: 'Angular',
            certificateSrc: 'Sololearn/Google',
            description: 'ri-angularjs-line',
            certificateClass: 'group-hover:text-purple-500 |  text-purple-500' ,
            link: 'https://www.sololearn.com/certificates/CC-BRCPY9UL'
        },
        {
            Icon: 'verified',
            certificateName: 'Javascript Intermédiaire',
            certificateSrc: 'Sololearn',
            description: 'bi bi-javascript',
            certificateClass: 'group-hover:text-purple-500 |  text-purple-500',
            // link: 'https://www.sololearn.com/certificates/CC-1X6K9F5G'
            link: 'https;//www.sololearn.com/certificates/CC-KDS5RLV1'
        },
        {
            Icon: 'verified',
            certificateName: 'Introduction à python',
            certificateSrc: 'Sololeqrn',
            description: 'icons8-python',
            certificateClass: '',
            link: 'https;//www.sololearn.com/certificates/CC-CEX7XY0C'
        },
        {
            Icon: 'verified',
            certificateName: 'Introduction à Sql',
            certificateSrc: 'Sololearn',
            description: 'ri-database-2-fill',
            certificateClass: 'group-hover:text-purple-500 |  text-purple-500',
            link: 'https;//www.sololearn.com/certificates/CC-MZAGS8FG'
        },
        {
            Icon: 'verified',
            certificateName: 'Codage des données',
            certificateSrc: 'Sololearn',
            description: 'ri-pie-chart-2-fill',
            certificateClass: 'group-hover:text-purple-500 |  text-purple-500',
            link: 'https;//www.sololearn.com/certificates/CC-13KB4DKE'
        },
        {
            Icon: 'verified',
            certificateName: 'Integration en HTML',
            certificateSrc: 'Sololearn',
            description: 'ri-html5-line',
            certificateClass: 'group-hover:text-purple-500 text-purple-600',
            link: ''
        },
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
