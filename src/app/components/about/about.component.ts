import { Component, ElementRef, OnInit, Renderer2, ViewChild, viewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { fadeInDelay, slideInUp, slideInUpLong, fadeInDelayXl, fadeInDelayXxl } from '../../shared/animations/animations';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'

import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { StacksComponent } from './stacks/stacks.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { CommentaireService } from './commentaire/commentaire.service';
import { Commentaire } from './commentaire/commentaire.model';
import { CommentAnimationDirective } from '../../directives/comment/comment-animation.directive';


@Component({
  selector: 'app-about',
  imports: [RouterModule, HeaderComponent, EducationComponent, SkillsComponent, CommonModule,StacksComponent, CommentaireComponent, FormsModule, CommentAnimationDirective],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [slideInUpLong, slideInUp, fadeInDelay, fadeInDelayXl, fadeInDelayXxl]
})

export class AboutComponent implements OnInit {
    isComment = false;
    commentOnBody = true
    editComment = false

    // editing comment
    nom = '';
    message= '';
    appreciation: 'pas assez' | 'pas mal' | 'bien' | '' = '';
    emojis: ('text-red-500' | 'text-orange-500' | 'text-blue-500')[]= ['text-red-500' , 'text-orange-500' , 'text-blue-500']
    choice: ('pas assez' | 'pas mal' | 'bien')[] = ['pas assez' , 'pas mal' , 'bien'];



    constructor(
        private renderer: Renderer2,
        private commentaireService: CommentaireService,
    ){ }

    // test firestore commentaire
    ngOnInit(): void {
        // this.commentaireService.ajouterCommentaireTest()
        this.commentaireService.getCommentaires()
    }

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

        if(!this.commentOnBody){
            this.renderer.addClass(document.body, 'overflow-y-hidden')
        }else{
            this.renderer.removeClass(document.body, 'overflow-y-hidden')
        }
    }

    @ViewChild('commentaireBody') commentaireBody!: ElementRef;

    scrollToCommentaireBody() {
        if (this.commentaireBody) {
            this.commentaireBody.nativeElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // =================== editing comment ================
    envoyerCommentaire(){
        if(!this.nom || !this.message || !this.appreciation) return;

        const nouveauxCommentaire: Commentaire = {
            nom: this.nom,
            message: this.message,
            appreciation: this.appreciation,
            date: new Date()
        }

        this.commentaireService.ajouterCommentaire(nouveauxCommentaire).then(() => {
            this.nom = '';
            this.message = '';
            this.appreciation= '';
        })
    }

    // ================= comments models ============
    comments = [
        {
            name: 'Steve',
            comment: 'J\'aime bien votre détermination et votre passion pour le développement web. Continuez à apprendre et à vous améliorer !',
            date: '2023-10-01',
            avatar: 'https://i.ibb.co/r2CrWZvn/profile.jpg',
            job: 'Développeur Full Stack',
            class: 'bg-purple-500 text-white'
        },
        {
            name: 'Marius',
            comment: 'Merci pour le travail que vous avez, j\'ai beaucoup apprécié !',
            date: '2023-10-01',
            avatar: 'https://i.ibb.co/r2CrWZvn/profile.jpg',
            job: 'Développeur Full Stack',
            class: 'bg-purple-500 text-white'
        },
        {
            name: 'Héritier Mokoli',
            comment: 'Vous avez un excellent portfolio et une belle présentation de vos compétences. J\'aime beaucoup votre style de développement !',
            date: '2023-10-01',
            avatar: 'https://i.ibb.co/r2CrWZvn/profile.jpg',
            job: 'Développeur Full Stack',
            class: 'bg-purple-500 text-white'
        },
        {
            name: 'Darilson Yussuf',
            comment: 'J\'ai été impressionné par votre portfolio et vos compétences en développement web. Vous avez un bel avenir devant vous ! Un de ces jours nous pourrons travailler ensemble !',
            date: '2023-10-01',
            avatar: 'https://i.ibb.co/r2CrWZvn/profile.jpg',
            job: 'Développeur Full Stack',
            class: 'bg-purple-500 text-white'
        },
    ]
}
