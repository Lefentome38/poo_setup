import { Voiture } from "./Voiture"

export class Conducteur {
    public name: string
    public prenom: string
    public voitures: Voiture[]
  
    constructor(name:string, prenom:string, voitures: Voiture[]) {
      this.name = name
      this.prenom = prenom
      this.voitures = voitures
    }
  
    public crash(index: number): void {
        this.voitures[index].crasher()
    }

    public direbonjour(): void {
      console.log(`Bonjour, je m'appelle ${this.name} ${this.prenom}`);
    }
  }