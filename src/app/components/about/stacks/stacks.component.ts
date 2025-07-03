import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-stacks',
  imports: [CommonModule],
  templateUrl: './stacks.component.html',
  styleUrl: './stacks.component.css'
})
export class StacksComponent {


    isStackInfo = false;
    currentIndex = 0;

    @Input() isVisible = false;
    @Output() closed = new EventEmitter<void>() 
    
    Onclose(){
        this.closed.emit();
    }

    constructor(private renderer: Renderer2){}

    stackOpen(){
        this.isStackInfo = !this.isStackInfo;
        this.updateBodyScroll();
    }
    closeMenu(){
        this.isStackInfo = false;
        this.updateBodyScroll();
    }

    updateBodyScroll(){
        if(this.isStackInfo){
            this.renderer.addClass(document.body, 'overflow-hidden')
        }else{
            this.renderer.removeClass(document.body, 'overflow-hidden')
        }
    }


    stacks = [
        {
            name: 'HTML',
            icon: 'ri-html5-line',
            description: 'Langage de balisage standard pour créer des pages web.',
            class: 'text-orange-500 group-hover:text-orange-600'
        },
        {
            name: 'CSS',
            icon: 'ri-css3-line',
            description: 'Langage de style utilisé pour décrire la présentation des documents HTML.',
            class: 'text-blue-500 group-hover:text-blue-600'
        },
    ]

    indexStack = this.stacks.map((stack, index) => ({
        name: stack.name,
        icon: stack.icon,
        description: stack.description,
        class: stack.class,
        index: index
    }));
}
