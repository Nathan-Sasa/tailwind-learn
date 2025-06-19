import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { fadeInDelay, slideInDown, slideInUpLong } from '../../shared/animations/animations';
import { RouterModule } from '@angular/router';
import { interval } from 'rxjs';
import { OnlyProjetsComponent } from './only-projets/only-projets.component';

@Component({
  selector: 'app-projet',
  imports: [CommonModule, HeaderComponent, RouterModule, OnlyProjetsComponent],
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css',
  animations: [slideInDown, fadeInDelay, slideInUpLong]
})
export class ProjetComponent implements OnInit, OnDestroy{

    currentIndex = 0;
    intervalId: any;

    // DarkBg = false;

    slides = [
        {
            imgSlide : 'https://i.ibb.co/ksCGX4bc/home-capture-mobile-2.png',
            buttonSlide: 'Mobile',
            classSlide: 'w-52 || max-md:w-32'
        },
        {
            imgSlide :'https://i.ibb.co/PsQXVcYf/home-capture-tablette.png',
            buttonSlide: 'Tablette',
            classSlide: 'w-110'
        },
        {
            imgSlide: 'https://i.ibb.co/w8jhvLp/about-laptop.png',
            buttonSlide: 'Pc',
            classSlide: 'w-200'
        }

    ]

    ngOnInit(): void {
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

    // @HostListener('window:scroll', [])
    // onWindowScroll() {
    //     const scrollY = window.scrollY || document.documentElement.scrollTop;
    //     this.DarkBg = scrollY > 550
    // }
}
