import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet'
import { fadeInDelay, slideInUp, slideInUpLong, slideInUpLongXl } from '../../../shared/animations/animations';


@Component({
  selector: 'app-location',
  imports: [],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css',
  animations: [fadeInDelay, slideInUpLong, slideInUpLongXl, slideInUp]
})
export class LocationComponent implements AfterViewInit {
    
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
