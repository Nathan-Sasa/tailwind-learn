import { CommonModule } from '@angular/common';
import { Component, Input, Output, Renderer2, EventEmitter, OnInit } from '@angular/core';
import { CommentaireService } from './commentaire.service';
import { Commentaire } from './commentaire.model';
import { Timestamp } from 'firebase/firestore';

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
        this.commentaireService.getCommentaires().subscribe(data => {
            this.commentaires = data
                .map(com => ({
                    ...com,
                    date: (com.date instanceof Timestamp) ? com.date.toDate() : com.date
                }))
                .sort((a, b) => b.date.getTime() - a.date.getTime())
        })
    }
}
