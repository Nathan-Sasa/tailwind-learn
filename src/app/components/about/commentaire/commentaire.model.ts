import { Timestamp } from "firebase/firestore";

export interface Commentaire {
    id?: string; // généré par Firestore
    nom: string; // nom de l'utilisateur
    message: string; // commentaire de l'utilisateur
    appreciation: 'pas assez' | 'pas mal' | 'bien';
    // date: string | Timestamp | Date | undefined; // date du commentaire
    date: Date;
}