export interface Commentaire {
    id?: string; // généré par Firestore
    nom: string; // nom de l'utilisateur
    message: string; // commentaire de l'utilisateur
    humeur: '😕' | '🙂' | '😀';
    date: string; // date du commentaire
}