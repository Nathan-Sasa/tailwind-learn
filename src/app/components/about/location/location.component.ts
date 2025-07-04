import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet'
import { fadeInDelay, slideInUp, slideInUpLong, slideInUpLongXl } from '../../../shared/animations/animations';
import { IntersectionAnimationDirective } from '../../../directives/intersection-animation.directive';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-location',
  imports: [IntersectionAnimationDirective, CommonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css',
  animations: [fadeInDelay, slideInUpLong, slideInUpLongXl, slideInUp]
})
export class LocationComponent implements AfterViewInit {

    // map // leaflet map
    
    ngAfterViewInit(): void {
        const KinshasaCoords: [number, number] = [-4.37460, 15.34540];

        const map = L.map('map').setView(KinshasaCoords, 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        L.marker(KinshasaCoords).addTo(map)
            .bindPopup('Nathan se trouve à kinshasa ')
            .openPopup()
    }
}
