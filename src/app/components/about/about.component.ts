import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { fadeInDelay, slideInUp, slideInUpLong } from '../../shared/animations/animations';
import { CommonModule, NgIf } from '@angular/common';
import { EducationComponent } from './education/education.component';
import { LocationComponent } from './location/location.component';
// import { IntersectionAnimationDirective } from '../../directives/intersection-animation.directive';
import { SkillsComponent } from './skills/skills.component';
import { StacksComponent } from './stacks/stacks.component';
import { CommentaireComponent } from './commentaire/commentaire.component';

@Component({
  selector: 'app-about',
  imports: [RouterModule, NgIf, HeaderComponent, EducationComponent, SkillsComponent, CommonModule,StacksComponent, CommentaireComponent],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [slideInUpLong, slideInUp, fadeInDelay]
})

export class AboutComponent {
    isComment = false;
    commentOnBody = true
    editComment = false

    constructor(private renderer: Renderer2){}

    // ouverture du popup des commentaires
    openComment(){
        this.isComment = !this.isComment;
        this.updateBodyScroll();
    }

    // fermeture du popup des commentaires
    closeComment(){
        this.isComment = false;
        this.updateBodyScroll();
    }

    // empeche le scroll du body quand le popup est ouvert
    updateBodyScroll(){
        if(this.isComment){
            this.renderer.addClass(document.body, 'overflow-y-hidden')
        }else{
            this.renderer.removeClass(document.body, 'overflow-y-hidden')
        }
    }

    // ==================== commentOnBody =======================
    editCom(){
        this.commentOnBody = !this.commentOnBody
        this.editComment = !this.editComment
    }
    updateEditComment(){
        this.editCom()
    }
    
    // commentaires
    comments = [
        {
            name: 'Nathan Sasa',
            comment: 'Un développeur passionné par la création d\'applications web modernes et réactives. Toujours à la recherche de nouveaux défis et de technologies innovantes.',
            date: '2023-10-01',
            avatar: 'https://i.ibb.co/r2CrWZvn/profile.jpg',
            job: 'Développeur Full Stack',
            class: 'bg-purple-500 text-white'
        },
        {
            name: 'Nathan Sasa',
            comment: 'Un développeur passionné par la création d\'applications web modernes et réactives. Toujours à la recherche de nouveaux défis et de technologies innovantes.',
            date: '2023-10-01',
            avatar: 'https://i.ibb.co/r2CrWZvn/profile.jpg',
            job: 'Développeur Full Stack',
            class: 'bg-purple-500 text-white'
        },
        {
            name: 'Nathan Sasa',
            comment: 'Un développeur passionné par la création d\'applications web modernes et réactives. Toujours à la recherche de nouveaux défis et de technologies innovantes.',
            date: '2023-10-01',
            avatar: 'https://i.ibb.co/r2CrWZvn/profile.jpg',
            job: 'Développeur Full Stack',
            class: 'bg-purple-500 text-white'
        },
        {
            name: 'Nathan Sasa',
            comment: 'Un développeur passionné par la création d\'applications web modernes et réactives. Toujours à la recherche de nouveaux défis et de technologies innovantes.',
            date: '2023-10-01',
            avatar: 'https://i.ibb.co/r2CrWZvn/profile.jpg',
            job: 'Développeur Full Stack',
            class: 'bg-purple-500 text-white'
        },
    ]
}
