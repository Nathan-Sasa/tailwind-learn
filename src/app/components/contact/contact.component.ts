import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { LocationComponent } from '../about/location/location.component';

@Component({
  selector: 'app-contact',
  imports: [RouterModule, CommonModule, HeaderComponent, RouterModule, LocationComponent],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

    @ViewChild('formRef') fromRef!: ElementRef<HTMLFormElement>;
    submitted = false;
    error = false;

    onSubmit() {
        this.submitted = true;
        this.error = false;
        // Here you can handle the form submission, e.g., send data to a server
        const form = this.fromRef.nativeElement;

        fetch('https://formspree.io/f/mzzgjqjg',{
            method: 'POST',
            body: new FormData(form),
            headers:{
                accept: 'application/json'
            },
        }).then((response) => {
            if (response.ok) {
                setTimeout(() => {
                    this.submitted = true;
                }, 5000);
                form.reset();
            } else {
                setTimeout(() => {
                    this.error = true;
                }, 5000);
            }
        }).catch(()=>{
            setTimeout(() => {
                this.error = true;
            }, 5000);
        })
    }

    addresses = [
        {
            title: 'Address',
            content: 'BLVD Lumumba Plazza, Kinshasa, RDC',
            icon: 'bi bi-geo-alt'
        },
        {
            title: 'Contact',
            content: '+243 825 854 332',
            icon: 'bi bi-telephone'
        },
        {
            title: 'Email',
            content: 'jonathanbikuta05@gmail.com',
            icon: 'bi bi-envelope'
        },
    ]
    socials = [
        {
            title: 'LinkedIn',
            icon: 'bi bi-linkedin',
            link: 'https://www.linkedin.com/in/nathan-sasa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
        },
        {
            title: 'GitHub',
            icon: 'bi bi-github',
            link: 'https://github.com/Nathan-Sasa'
        },
        {
            title: 'Twitter',
            icon: 'bi bi-twitter-x',
            link: 'https://x.com/s_nathan001?21'
        },
        {
            title: 'Facebook',
            icon: 'bi bi-facebook',
             link: 'https://facebook.com/jonathan.bikuta.05'
        },
        {
            title: 'Instagram',
            icon: 'bi bi-instagram',
            link: 'https://www.instagram.com/nathan_sasa00?igsh=MTZrYnAwdnd1dG9hbA%3D%3D&utm_source=qr'
        },
        {
            title: 'WhatsApp',
            icon: 'bi bi-whatsapp',
            link: 'https://wa.me/+243825854332?text=bounjour%20nathan%20je%20besoin%20de%20tes%20services%20de%20developpement%20web'
        },
        //
    ]
}
