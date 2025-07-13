import { Injectable } from "@angular/core";
import { collection } from "firebase/firestore";
import { collectionData, Firestore, addDoc } from "@angular/fire/firestore";
import { Commentaire } from "./commentaire.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CommentaireService {

    private commentaireRef

    constructor (
        private firestore: Firestore
    ) {
        this.commentaireRef = collection(this.firestore, 'commentaires');
    }

    ajouterCommentaire(commentaire: Commentaire){
        const commentaireAvecDate: Commentaire = {
            ...commentaire,
            date: new Date() // Ajoute la date actuelle
        }
        return addDoc(this.commentaireRef, commentaireAvecDate)
    }

    getCommentaires(): Observable<Commentaire[]> {
        return collectionData(this.commentaireRef, {idField: 'id'}) as Observable<Commentaire[]>;
    }

    ajouterCommentaireTest(){
        const docRef = addDoc(this.commentaireRef, {
            nom: 'Testeur',
            message: 'ceci est un test',
            appreciation: '🙂',
            date: new Date()
        })

        docRef.then(() => console.log('✅ Document ajouter avec succès'))
                .catch((err) => console.log('❌ Erreur Firestore : ', err))
    }
}