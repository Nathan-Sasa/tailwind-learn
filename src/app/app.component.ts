import { Component, HostListener, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './components/header/header.component';

import Lenis from '@studio-freight/lenis'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

    // private lenis!: Lenis;

    title = 'Portfolio';

    // changeBg = false;

    // @HostListener('window:scroll', [])
    // onWindowScroll() {
    //     const scrollY = window.scrollY || document.documentElement.scrollTop;
    //     this.changeBg = scrollY > 550
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
        //     console.log(scroll, limit, velocity, direction, progress);
        // })

        // const raf = (time: number) => {
        //     this.lenis.raf(time);
        //     requestAnimationFrame(raf);
        // }
        // requestAnimationFrame(raf);
    }
}
