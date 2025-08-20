import { CommonModule } from '@angular/common';
import { Component, Input, Output, Renderer2, EventEmitter, OnInit } from '@angular/core';
import { CommentaireService } from './commentaire.service';
import { Commentaire } from './commentaire.model';
import { Timestamp } from 'firebase/firestore';
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'

@Component({
  selector: 'app-commentaire',
  imports: [CommonModule],
  templateUrl: './commentaire.component.html',
  styleUrl: './commentaire.component.css'
})
export class CommentaireComponent implements OnInit {

    commentaires: Commentaire[] = []

    constructor (
        private renderer: Renderer2,
        private commentaireService: CommentaireService
    ){}

    @Input() isOpen = false;
    @Output() closed = new EventEmitter<void>();

    onClose(){
        this.closed.emit();
    }

    ngOnInit(): void {
        this.commentaireService.getCommentaires().subscribe((data: any[]) => {
            console.log(data);

            this.commentaires = data.map(com => ({
                ...com,
                date: (com.date as Timestamp).toDate() as Date
            }))

            // this.commentaires = data
            //     .map((doc) => {
            //         const commentaire = doc.payload.doc.data() as Commentaire;
            //         const timestamp = (commentaire.date as any)?.toDate?.();
            //         return {
            //             ...commentaire,
            //             date: timestamp,
            //             relativeDate: timestamp
            //                 ? formatDistanceToNow(timestamp, {addSuffix: true, locale: fr})
            //                 : '',
            //         }
            //     })
            //     .sort((a ,b) => b.date.getTime() - a.date.getTime());
        })
    }
}
