import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    comptes = {
        facebook : "profile facebook",
        github : "profile github",
        linkedin: "profile linkedin",
        whatsapp: "profile whatsapp"
    }
}
