import { CommonModule, NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjetBgDirective } from '../../../directives/project/projet-bg.directive';

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
            slides : [
                {
                    imgSlide : 'assets/img/project/market-list.png',
                    buttonSlide: 'assets/img/project/market-list.png',
                    classSlide: 'w-full h-full'
                },
                {
                    imgSlide :'assets/img/project/market-edit.png',
                    buttonSlide: 'assets/img/project/market-edit.png',
                    classSlide: 'w-full h-full'
                },
                {
                    imgSlide: 'assets/img/project/market-details.png',
                    buttonSlide: 'assets/img/project/market-details.png',
                    classSlide: 'w-full h-full'
                },
            ]

        },
        {
            projectName : 'Verz App',
            projectImage: 'assets/img/project/market-list.png',
            projectDescription: '',
            projectLink: '',
            projectTechnologies: [],
            slides : [
                {
                    imgSlide : 'assets/img/project/verz-entry-app.png',
                    buttonSlide: 'assets/img/project/verz-entry-app.png',
                    classSlide: 'w-full h-full'
                },
                {
                    imgSlide :'assets/img/project/verz-illu2.png',
                    buttonSlide: 'assets/img/project/verz-illu2.png',
                    classSlide: 'w-full h-full'
                },
                {
                    imgSlide: 'assets/img/project/verz-meteo.png',
                    buttonSlide: 'assets/img/project/market-details.png',
                    classSlide: 'w-full h-full'
                },
                {
                    imgSlide: 'assets/img/project/verz-meteo-dark.png',
                    buttonSlide: 'assets/img/project/market-details.png',
                    classSlide: 'w-full h-full'
                },
            ]

        },
    ]

    // slides = [
    //         {
    //             imgSlide : 'assets/img/project/verz-entry-app.png',
    //             buttonSlide: 'assets/img/project/verz-entry-app.png',
    //             classSlide: 'w-full h-full'
    //         },
    //         {
    //             imgSlide :'assets/img/project/verz-illu2.png',
    //             buttonSlide: 'assets/img/project/verz-illu2.png',
    //             classSlide: 'w-full h-full'
    //         },
    //         {
    //             imgSlide: 'assets/img/project/verz-meteo.png',
    //             buttonSlide: 'assets/img/project/market-details.png',
    //             classSlide: 'w-full h-full'
    //         },
    //         {
    //             imgSlide: 'assets/img/project/verz-meteo-dark.png',
    //             buttonSlide: 'assets/img/project/market-details.png',
    //             classSlide: 'w-full h-full'
    //         },
    // ]

    // slide = this.project[1].slides;
    currentIndexes : number[] = []

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
    // startAutoSlide(): void {
    //     this.intervalId = setInterval(() => {
    //         this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    //     }, 5000);
    // }
    startAutoSlide(): void {
        this.intervalId = setInterval(() => {
            this.currentIndexes = this.currentIndexes.map((index, i) => {
                const slidesLength = this.project[i].slides.length;
                return (index + 1) % slidesLength;
            }
            );
        }, 5000);
    }

}
