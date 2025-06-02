import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';

// import { routes } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProjetComponent } from './components/projet/projet.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch : 'full'},
    {path: 'project', component: ProjetComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent}
]

export const appConfig: ApplicationConfig = {


  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
