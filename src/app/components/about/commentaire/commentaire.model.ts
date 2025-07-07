export interface Commentaire {
    id?: string; // généré par Firestore
    name: string; // nom de l'utilisateur
    message: string; // commentaire de l'utilisateur
    humeur: '😕' | '🙂' | '😀';
    date: string; // date du commentaire
}