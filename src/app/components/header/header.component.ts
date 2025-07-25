import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { RouterModule} from '@angular/router';
import { MenuToggleComponent } from './menu-toggle/menu-toggle.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, MenuToggleComponent],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    public dev = {
        DevName : "Nathan Sasa",
        Pseudo: "NathDev",
        // profile: "https://i.ibb.co/r2CrWZvn/profile.jpg",
        profile: "nbsProfile.png",
        img1: "",
    }
    isMenuOpen = false;
    constructor(private renderer: Renderer2) { }    

    toggleMenu(){
        this.isMenuOpen = !this.isMenuOpen;
        this.updateBodyScroll();
    }
    closeMenu(){
        this.isMenuOpen = false;
        this.updateBodyScroll();
    }

    updateBodyScroll(){
        if(this.isMenuOpen){
            this.renderer.addClass(document.body, 'overflow-hidden')
        }else{
            this.renderer.removeClass(document.body, 'overflow-hidden')
        }
    }


}
