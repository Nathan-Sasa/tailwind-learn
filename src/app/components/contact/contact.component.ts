import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-contact',
  imports: [RouterModule, CommonModule, HeaderComponent, RouterModule],
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
            icon: 'bi bi-linkedin'
        },
        {
            title: 'GitHub',
            icon: 'bi bi-github'
        },
        {
            title: 'Twitter',
            icon: 'bi bi-twitter-x'
        },
        {
            title: 'Facebook',
            icon: 'bi bi-facebook'
        },
        {
            title: 'Instagram',
            icon: 'bi bi-instagram'
        },
        {
            title: 'WhatsApp',
            icon: 'bi bi-whatsapp'
        },
        //
    ]
}
