import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIntersectionAnimation]'
})
export class IntersectionAnimationDirective implements AfterViewInit, OnDestroy {

    private observer!: IntersectionObserver;

    constructor(
        private el: ElementRef,
        private render : Renderer2
    ) { }

    ngAfterViewInit(): void {
        this.observer = new IntersectionObserver(
            ([entry]) =>{
                if(entry.isIntersecting){
                    this.render.addClass(this.el.nativeElement, 'visible');
                    // this.observer.unobserve(this.el.nativeElement)
                }else{
                    this.render.removeClass(this.el.nativeElement, 'visible');
                }
            },
            {
                threshold: 0.6
            }
        );
        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy(): void {
        if (this.observer){
            this.observer.disconnect();
        }
    }
}
