import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { fadeIn, slideInDown, slideInRight, slideInUp } from '../../shared/animations/animations';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, NgIf, HeaderComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [fadeIn, slideInUp, slideInDown, slideInRight]
})
export class HomeComponent {

    comptes = {
        facebook : "profile facebook",
        github : "profile github",
        linkedin: "profile linkedin",
        whatsapp: "profile whatsapp"
    }
    show = true;
    toggle(){
        this.show = !this.show
    }
}