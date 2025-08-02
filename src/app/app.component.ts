import { ViewportScroller } from '@angular/common';
import { Component, HostListener, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './components/header/header.component';


import Lenis from '@studio-freight/lenis'
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
    
    title = 'Portfolio';

    
    private lenis!: Lenis;

    constructor(
        private router: Router,
        private viewportScroller: ViewportScroller
    ){
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // Scroll to top on navigation
                this.viewportScroller.scrollToPosition([0, 0]); //scroll en haut
            }
        }
    );
    }


    // if (this.isOverflow = true) {
        
    // }
    

    // l'effort de smooth lors de scroll gere par Lenis

    ngAfterViewInit(): void {
        // this.lenis = new Lenis({
        //     duration: 1.2,
        //     easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        //     direction: 'vertical',
        //     gestureDirection: 'vertical',
        //     smooth: true,
        //     smouthTouche: false,
        //     smoothWheel: true,
        //     mouseMultiplier: 1,
        //     touchMultiplier: 2,
        //     infinite: false,
        // } as any)

        // this.lenis.on('scroll', ( e:{
        //     scroll: number, 
        //     limit: number, 
        //     velocity: number, 
        //     direction: number, 
        //     progress: number,

        // }) =>{
        //     const { scroll, limit, velocity, direction, progress} = e
        //     // console.log(scroll, limit, velocity, direction, progress);
        // })

        // const raf = (time: number) => {
        //     this.lenis.raf(time);
        //     requestAnimationFrame(raf);
        // }
        // requestAnimationFrame(raf);
    }






    // changeBg = false;

    // @HostListener('window:scroll', [])
    // onWindowScroll() {
    //     const scrollY = window.scrollY || document.documentElement.scrollTop;
    //     this.changeBg = scrollY > 550
    // }
}
