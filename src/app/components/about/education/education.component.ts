import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { fadeInDelay, fadeInDelayXl, fadeInDelayXxl, slideInDown, slideInRight, slideInUp, slideInUpLong, slideInUpLongXl, slideInUpLongXxl} from '../../../shared/animations/animations';

@Component({
  selector: 'app-education',
  imports: [NgFor, CommonModule],
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
            class             :  ' bg-gradient-to-br from-pink-50 to-pink-100 hover:bg-gradient-to-rb hover:from-indigo-100 hover:to-pink-100 transition duration-300 lg:cursor-none',
            description     :  'Formation approfondie en informatique avec spécialisation en administration des réseaux et télécommunications. Acquisition de compétences solides en programmation, gestion de bases de données, sécurité informatique et architecture des systèmes d\'information.',
            bodyClass       : 'hover:shadow-xl'
        },
        {
            icon              :  'school',
            iconLocation  :  'location_pin',
            // location        : 'Institut Supérieur d\'informatique Programmation et Analyse/Kinshasa',
            grad              :  'Graduat en Informatique Industrielle',
            fac               :  'Formation technique spécialisée',
            university      :  'ISIPA – Kinshasa',
            class             :  ' bg-gradient-to-br from-pink-50 to-pink-100 hover:bg-gradient-to-rb hover:from-cyan-100 hover:to-red-100 transition duration-300 lg:cursor-none',
            description     : 'Formation technique en informatique industrielle couvrant l\'automatisation, la programmation de systèmes embarqués, la maintenance informatique et l\'intégration de solutions technologiques dans l\'environnement industriel. '
        }
    ]

    certifications =[ 
        {
            Icon: 'verified',
            certificateName: 'Angular',
            certificateSrc: 'Sololearn/Google',
            description: 'ri-angularjs-line',
            certificateClass: 'group-hover:text-red-500 |  text-red-500' ,
            link: 'https://www.sololearn.com/certificates/CC-BRCPY9UL'
        },
        {
            Icon: 'verified',
            certificateName: 'Javascript Intermédiaire',
            certificateSrc: 'Sololearn',
            description: 'icons8-javascript',
            certificateClass: '',
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
            certificateClass: 'group-hover:text-violet-500 |  text-violet-500',
            link: 'https;//www.sololearn.com/certificates/CC-MZAGS8FG'
        },
        {
            Icon: 'verified',
            certificateName: 'Codage des données',
            certificateSrc: 'Sololearn',
            description: 'ri-pie-chart-2-fill',
            certificateClass: 'group-hover:text-orange-500 |  text-orange-500',
            link: 'https;//www.sololearn.com/certificates/CC-13KB4DKE'
        },
        {
            Icon: 'verified',
            certificateName: 'Integration en HTML',
            certificateSrc: 'Sololearn',
            description: 'ri-html5-line',
            certificateClass: 'group-hover:text-pink-500 text-pink-600',
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
