import { Joueur } from "./joueur"
export class Equipe{

   public joueurs: Joueur[]
    
    constructor( joueurs:Joueur[]){
        this.joueurs = joueurs
    }

    public afficher_nbr_j(): void {
        console.log("joueurs:",this.joueurs.length);
    }

    // public creer_point(): void{
    //     this.point = Math.floor(Math.random()*21)
    // }
}