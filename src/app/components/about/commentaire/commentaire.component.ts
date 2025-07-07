import { CommonModule } from '@angular/common';
import { Component, Input, Output, Renderer2, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-commentaire',
  imports: [CommonModule],
  templateUrl: './commentaire.component.html',
  styleUrl: './commentaire.component.css'
})
export class CommentaireComponent {

    @Input() isOpen = false;
    @Output() closed = new EventEmitter<void>();

    onClose(){
        this.closed.emit();
    }
}
