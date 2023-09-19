import { Equipe } from "./Equipe"

export class Match{
    public equipe_1: Equipe
    public equipe_2: Equipe
    public point: [Number,Number] = [0,0]
    

    constructor(equipe_1:Equipe, equipe_2:Equipe, point_1:number, point_2:number) {
        this.equipe_1 = equipe_1
        this.equipe_2 = equipe_2
        this.point[0] = point_1
        this.point[1] = point_2
    }

    public creer_match() {
        this.point[0] = Math.floor(Math.random()*21)
        this.point[1] = Math.floor(Math.random()*21)
        console.log(this.point[0],"point pour l'équipe 1 |",this.point[1],"point pour l'équipe 2");
        if (this.point[0] > this.point[1]) {
            console.log("équipe 1 vaiqueur");
        }
        else if(this.point[1] > this.point[0]) {
            console.log("équipe 2 vainqueur");
        }
        else{
            console.log("égalité des deux équipe");
        }
    }
}