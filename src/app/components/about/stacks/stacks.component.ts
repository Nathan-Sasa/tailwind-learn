import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { SkillAnimationDirective } from '../skills/skill-animation.directive';
import { IntersectionAnimationDirective } from '../../../directives/intersection-animation.directive';

@Component({
  selector: 'app-stacks',
  imports: [CommonModule, SkillAnimationDirective],
  templateUrl: './stacks.component.html',
  styleUrl: './stacks.component.css'
})
export class StacksComponent {


    // isStackInfo = false;
    selectedStack:any = null;

    // @Input() isVisible = false;
    // @Output() closed = new EventEmitter<void>()

    // Onclose(){
    //     this.closed.emit();
    // }

    constructor(private rend: Renderer2){}

    updateBodyscroll(){
        if(this.selectedStack){
            this.rend.addClass(document.body, 'overflow-y-hidden');
        }else{
            this.rend.removeClass(document.body, 'overflow-y-hidden');
        }
    }

    // closeStack(){
    //     this.isStackInfo = false;
    //     this.updateBodyScroll();
    // }
    // stackOpen(){
    //     this.isStackInfo = !this.isStackInfo;
    //     this.updateBodyScroll();
    // }

    // updateBodyScroll(){
    //     if(this.isStackInfo){
    //         this.rend.addClass(document.body, 'overflow-y-hidden')
    //     }else{
    //         this.rend.removeClass(document.body, 'overflow-y-hidden')
    //     }
    // }

    // updateBodyScrollOnStackOpen(){
    //     this.renderer.addClass(document.body, 'overflow-y-hidden')
    // }
    // updateBodyScrollOnStackClose(){
    //     this.renderer.removeClass(document.body, 'overflow-y-hidden')
    // }


    stacks = [
        {
            name: 'HTML',
            icon: 'ri-html5-line',
            illustration: 'bi bi-code-square',
            description: 'Langage de balisage standard pour créer des pages web.',
            class: 'text-orange-500 group-hover:text-orange-600'
        },
        {
            name: 'CSS',
            icon: 'ri-css3-line',
            illustration: 'bi bi-brush',
            description: 'Langage de style utilisé pour décrire la présentation des documents HTML.',
            class: 'text-blue-500 group-hover:text-blue-600'
        },
        {
            name: 'JavaScript',
            icon: 'bi-javascript',
            illustration: 'bi bi-diagram-2',
            description: 'Langage de programmation pour rendre les pages web interactives.',
            class: 'text-yellow-500 group-hover:text-yellow-900'
        },
        {
            name: 'Angular',
            icon: 'ri-angularjs-line',
            illustration: 'bi bi-graph-up',
            description: 'Framework JavaScript pour construire des applications web dynamiques.',
            class: 'text-red-500 group-hover:text-red-600'
        },
        {
            name: 'TypeScript',
            icon: 'bi bi-typescript',
            illustration: 'bi bi-braces-asterisk',
            description: 'Superset de JavaScript qui ajoute des types statiques et des fonctionnalités avancées.',
            class: 'text-blue-600 group-hover:text-blue-700'
        },
        {
            name: 'Tailwind CSS',
            icon: 'ri-tailwindcss-line',
            illustration: 'bi bi-palette',
            description: 'Framework CSS utilitaire pour créer des designs modernes et réactifs.',
            class: 'text-indigo-500 group-hover:text-indigo-600',
            img: 'https://i.ibb.co/wh1f0vMJ/tailwindcss-icon.png',
            classImg: 'w-8'
        },
        {
            name: 'Bootstrap',
            icon: 'bi bi-bootstrap-fill',
            illustration: 'bi bi-grid',
            description: 'Framework CSS populaire des composants pour développer des sites web responsives et mobiles.',
            class: 'text-indigo-500 group-hover:text-indigo-600'
        },
        {
            name: 'Firebase',
            icon: 'ri-firebase-line',
            illustration: 'bi bi-cloud',
            description: 'Plateforme de développement d\'applications web et mobiles avec des services backend comme l\'authentification et la base de données en temps réel.',
            class: 'text-yellow-600 group-hover:text-yellow-700',
            img: 'https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png',
            classImg: 'w-8'
        },
        {
            name: 'Git',
            icon: 'ri-git-branch-line',
            illustration: 'bi bi-usb-symbol',
            description: 'Système de contrôle de version distribué pour suivre les modifications du code source.',
            class: 'text-orange-600 group-hover:text-orange-700'
        },
        {
            name: 'GitHub',
            icon: 'ri-github-line',
            illustration: 'bi bi-bezier2',
            description: 'Plateforme de développement collaboratif pour héberger et gérer des projets de code source.',
            class: 'text-gray-800 group-hover:text-gray-900'
        },
        {
            name: 'Figma',
            icon: 'ri-figma-line',
            illustration: 'bi bi-menu-up',
            description: 'Outil de conception d\'interface utilisateur pour créer des maquettes et des prototypes interactifs.',
            class: 'text-pink-500 group-hover:text-pink-600',
            img: 'https://images.icon-icons.com/2699/PNG/512/figma_logo_icon_170157.png',
            classImg: 'w-6'
        },
        {
            name: 'Visual Studio Code',
            icon: 'ri-vscode-line',
            illustration: 'bi bi-regex',
            description: 'Éditeur de code source léger et puissant avec des fonctionnalités avancées pour le développement web.',
            class: 'text-blue-500 group-hover:text-blue-600',
            img: 'https://chris-ayers.com/assets/images/vscode-logo.png',
            classImg: 'w-6'
        },
        {
            name: 'Postman',
            icon: 'ri-postman-line',
            illustration: 'bi bi-clipboard-data',
            description: 'Outil de test d\'API pour envoyer des requêtes HTTP et inspecter les réponses.',
            class: 'text-orange-500 group-hover:text-orange-600',
            img: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
            classImg: 'w-6'
        },
        {
            name: 'Linux',
            icon: 'ri-linux-line',
            illustration: 'bi bi-terminal',
            description: 'Système d\'exploitation open source basé sur le noyau Linux, utilisé pour le développement et l\'hébergement de serveurs.',
            class: 'text-green-600 group-hover:text-green-700',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png',
            classImg: 'w-5'
        },
        {
            name: 'Docker',
            icon: 'ri-docker-line',
            illustration: 'bi bi-box-seam',
            description: 'Plateforme de conteneurisation pour automatiser le déploiement d\'applications dans des conteneurs légers et portables.',
            class: 'text-blue-500 group-hover:text-blue-600',
            img: 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg',
            classImg: 'w-8'
        },
        {
            name: 'Kubernetes',
            icon: 'ri-kubernetes-line',
            illustration: 'bi bi-cloud-fill',
            description: 'Système d\'orchestration de conteneurs pour automatiser le déploiement, la mise à l\'échelle et la gestion des applications conteneurisées.',
            class: 'text-blue-600 group-hover:text-blue-700',
            img: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg',
            classImg: 'w-6'
        },
        {
            name: 'MySQL',
            icon: 'ri-mysql-line',
            illustration: 'bi bi-database',
            description: 'Système de gestion de base de données relationnelle open source utilisé pour stocker et gérer des données.',
            class: 'text-blue-600 group-hover:text-blue-700',
            img: 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg',
            classImg: 'w-7'
        },
        {
             name: 'MongoDB',
            icon: 'ri-mongodb-line',
            illustration: 'bi bi-database-fill',
            description: 'Base de données NoSQL orientée document, utilisée pour stocker des données non structurées et semi-structurées.',
            class: 'text-green-600 group-hover:text-green-700',
            img: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg',
            classImg: 'w-7'
        },
        {
            name: 'Redis',
            icon: 'ri-redis-line',
            illustration: 'bi bi-database-fill',
            description: 'Base de données en mémoire clé-valeur, utilisée pour le stockage de données temporaires et la mise en cache.',
            class: 'text-red-600 group-hover:text-red-700',
            img: 'https://www.vectorlogo.zone/logos/redis/redis-icon.svg',
            classImg: 'w-7'
        },
        {
            name: 'GraphQL',
            icon: 'ri-graphql-line',
            illustration: 'bi bi-graph-up',
            description: 'Langage de requête pour les API, permettant de demander exactement les données nécessaires et rien de plus.',
            class: 'text-purple-600 group-hover:text-purple-700',
            img: 'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg',
            classImg: 'w-7'
        },
        {
            name: 'RESTful API',
            icon: 'ri-rest-api-line',
            illustration: 'bi bi-api',
            description: 'Architecture d\'API basée sur les principes REST, permettant la communication entre les clients et les serveurs via HTTP.',
            class: 'text-blue-600 group-hover:text-blue-700',
            img: 'https://cdn-icons-png.freepik.com/256/15356/15356470.png?semt=ais_hybrid',
            classImg: 'w-7'
        },
        {
            name: 'WebSockets',
            icon: 'ri-websocket-line',
            illustration: 'bi bi-websockets',
            description: 'Protocole de communication bidirectionnelle en temps réel entre le client et le serveur, utilisé pour les applications interactives.',
            class: 'text-blue-600 group-hover:text-blue-700',
            img: '',
            classImg: 'w-7'
        },
        {
            name: ''
        }
    ]

    indexStack = this.stacks.map((stack, index) => ({
        name: stack.name,
        icon: stack.icon,
        description: stack.description,
        class: stack.class,
        index: index
    }));
}
