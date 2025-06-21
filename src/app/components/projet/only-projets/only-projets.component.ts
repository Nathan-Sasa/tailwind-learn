import { CommonModule, NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjetBgDirective } from '../../../directives/project/projet-bg.directive';
import { slideInRight } from '../../../shared/animations/animations';

@Component({
  selector: 'app-only-projets',
  imports: [CommonModule, ProjetBgDirective],
  templateUrl: './only-projets.component.html',
  styleUrl: './only-projets.component.css'
})
export class OnlyProjetsComponent implements OnInit, OnDestroy {

    // DarkBg = false;
    currentIndex = 0;
    intervalId: any;

    project = [
        {
            projectName : 'Market Website',
            projectImage: 'assets/img/project/market-list.png',
            projectDescription: '',
            projectLink: '',
            projectTechnologies: [],
        //     slides : [
        //         {
        //             imgSlide : 'assets/img/project/market-list.png',
        //             buttonSlide: 'assets/img/project/market-list.png',
        //             classSlide: 'w-full h-full'
        //         },
        //         {
        //             imgSlide :'assets/img/project/market-edit.png',
        //             buttonSlide: 'assets/img/project/market-edit.png',
        //             classSlide: 'w-full h-full'
        //         },
        //         {
        //             imgSlide: 'assets/img/project/market-details.png',
        //             buttonSlide: 'assets/img/project/market-details.png',
        //             classSlide: 'w-full h-full'
        //         },
        //     ]

        },
    ]

    slides = [
            {
                imgSlide : 'assets/img/project/verz-entry-app.png',
                buttonSlide: 'assets/img/project/verz-entry-app.png',
                classSlide: 'w-full h-full',
                projectLink: 'https://verz-entry-app.web.app/',
                slideTitle: 'Verz App',
                projectDescription: 'A web application for managing entries and exits in a building, with features like user authentication, entry/exit tracking, and data visualization.',
                projectTechnologies: ['Angular', 'Firebase', 'Tailwind CSS']
            },
            {
                imgSlide :'assets/img/project/verz-illu2.png',
                buttonSlide: 'assets/img/project/verz-illu2.png',
                classSlide: 'w-full h-full',
                slideTitle: 'Portfolio',
                projectDescription: 'A web application for managing entries and exits in a building, with features like user authentication, entry/exit tracking, and data visualization.',
                projectTechnologies: ['Angular', 'Firebase', 'Tailwind CSS']
            },
            {
                imgSlide: 'assets/img/project/verz-meteo.png',
                buttonSlide: 'assets/img/project/market-details.png',
                classSlide: 'w-full h-full',
                slideTitle: 'Facebook Clone',
                projectDescription: 'A web application for managing entries and exits in a building, with features like user authentication, entry/exit tracking, and data visualization.',
                projectTechnologies: ['Angular', 'Firebase', 'Tailwind CSS']
            },
            {
                imgSlide: 'assets/img/project/verz-meteo-dark.png',
                buttonSlide: 'assets/img/project/market-details.png',
                classSlide: 'w-full h-full',
                slideTitle: 'Verz App Dark',
                projectDescription: 'A web application for managing entries and exits in a building, with features like user authentication, entry/exit tracking, and data visualization.',
                projectTechnologies: ['Angular', 'Firebase', 'Tailwind CSS']
            },
    ]

    // slide = this.project[1].slides;
    currentIndexes : number[] = [];
    intevalId: any;

    ngOnInit(): void {
        // this.currentIndexes = this.project.map((_, index) => index);
        this.currentIndexes = this.project.map(() => 0);
        this.startAutoSlide();
    }
    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }
    goToSlide(index: number): void{
        this.currentIndex = index
    }
    startAutoSlide(): void {
        this.intervalId = setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        }, 5000);
    }
    // nextSlide(projectIndex: number): void {
    //     const slidesLength = this.project[projectIndex].slides.length;
    //     this.currentIndexes[projectIndex] = (this.currentIndexes[projectIndex] + 1) % slidesLength;
    // }
    // goToSlide(projectIndex: number, slideIndex: number): void {
    //     this.currentIndexes[projectIndex] = slideIndex;
    // }
    // getCurrentSlide(projectIndex: number): any {
    //     return this.project[projectIndex].slides[this.currentIndexes[projectIndex]];
    // }
    // startAutoSlide(): void {
    //     this.intervalId = setInterval(() => {
    //         this.currentIndexes = this.currentIndexes.map((index, i) => {
    //             const slidesLength = this.project[i].slides.length;
    //             return (index + 1) % slidesLength;
    //         }
    //         );
    //     }, 5000);
    // }

}
