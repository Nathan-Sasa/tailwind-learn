import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { fadeInDelay, slideInUp, slideInUpLong } from '../../shared/animations/animations';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'

import { EducationComponent } from './education/education.component';
import { LocationComponent } from './location/location.component';
// import { IntersectionAnimationDirective } from '../../directives/intersection-animation.directive';
import { SkillsComponent } from './skills/skills.component';
import { StacksComponent } from './stacks/stacks.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { CommentaireService } from './commentaire/commentaire.service';
import { Commentaire } from './commentaire/commentaire.model';


@Component({
  selector: 'app-about',
  imports: [RouterModule, HeaderComponent, EducationComponent, SkillsComponent, CommonModule,StacksComponent, CommentaireComponent, FormsModule],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [slideInUpLong, slideInUp, fadeInDelay]
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
        this.commentaireService.ajouterCommentaireTest()
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
