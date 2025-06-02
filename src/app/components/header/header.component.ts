import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    public dev = {
        DevName : "Nathan Sasa",
        Pseudo: "NathDev",
        profile: "https://i.ibb.co/r2CrWZvn/profile.jpg",
        img1: "",
    }
}
