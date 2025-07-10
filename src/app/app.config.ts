import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { ExtraOptions, provideRouter, withEnabledBlockingInitialNavigation, withRouterConfig } from '@angular/router';
import { Routes } from '@angular/router';
import {provideAnimations} from '@angular/platform-browser/animations';

import {provideFirebaseApp, initializeApp} from '@angular/fire/app';
import {provideFirestore, getFirestore  } from '@angular/fire/firestore';

// import { routes } from './app.routes';

import { HomeComponent } from './components/home/home.component';
import { ProjetComponent } from './components/projet/projet.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { environment } from '../environments/environment';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch : 'full'},
    {path: 'project', component: ProjetComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    // {path: '**', component: PageNotFoundComponent},
    {path: '**', loadComponent: ()=> import('./components/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)}
]
const routerOptions : ExtraOptions = {
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64]
}

export const appConfig: ApplicationConfig = {


    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(
            routes,
        ),
        provideAnimations(),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
    ]
};
