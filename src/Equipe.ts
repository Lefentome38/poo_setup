import { Joueur } from "./joueur"

export class Equipe{

   public joueur: Joueur[]
    
    constructor( joueur:Joueur[]){
        this.joueur = joueur
    }

    // public formationéquipe(index: number): void {
    //     this.joueur[index]
    // }

    public afficher(): void {
        console.log(this.joueur.length);
    }
}