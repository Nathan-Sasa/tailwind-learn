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
            icon              :  '',
            grad              :  '',
            fac               :  '',
            university      :  ''
        },
        {
            icon              :  '',
            grad              :  '',
            fac               :  '',
            university      :  ''
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
