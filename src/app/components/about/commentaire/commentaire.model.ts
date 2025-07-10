import { Timestamp } from "firebase/firestore";

export interface Commentaire {
    id?: string; // généré par Firestore
    nom: string; // nom de l'utilisateur
    message: string; // commentaire de l'utilisateur
    appreciation: 'text-red-500' | 'text-orange-500' | 'text-blue-500';
    date: string | Timestamp | Date; // date du commentaire
}