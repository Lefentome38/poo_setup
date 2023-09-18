import { Pomme } from "./Pomme";
import { Conducteur } from "./Conducteuc";
import { Voiture } from "./Voiture"

const voiture_neuve = new Voiture('noire', 100);
const voiture_petite = new Voiture('rouge', 22);
voiture_neuve.crasher();

console.log("état de la voiture neuve",voiture_neuve.etat, "| couleur",voiture_neuve.couleur);
console.log("état de la petite voiture",voiture_petite.etat, "| couleur",voiture_petite.couleur);

console.log();

const conducteur_1 = new Conducteur("WASTEUR", "logane",[voiture_petite]);
conducteur_1.direbonjour();
conducteur_1.crash(0)

console.log();

conducteur_1.voitures.forEach(v => {console.log(v.couleur);});

console.log();

console.log(conducteur_1.voitures[0].etat);
console.log(voiture_petite.etat);



// const apple = new Pomme('Granny Smilt', 'Verte', 102)
// apple.Afficher();
// console.log();

// const apple2 = new Pomme('Pink Ledy', 'Pink', 522)
// apple2.Afficher()
// console.log();

// apple2.name = "Pink-Ledy"
// apple2.color = "Yellow"
// apple2.stock = 40;
// console.log(apple2.name, apple2.color, apple2.stock, "kg restant");
// console.log();

// console.log("le nombre de seconde:",Pomme.Donner_heur());

// classDiagram
//     Conducteur <|-- Voiture
//     class Voiture{
//         -string couleur
//         +number etat
//         +crasher()
//         +get couleur()
//     }

//     class Conducteur{
//         +string name
//         +string prenom
//         +Voiture[] voitures
//         +crash(index)
//         +direbonjour()
//     }

// sequenceDiagram 
//     programe->>Voiture: créer voiture [rouge, 100%]
//     Voiture->>programe: nouvelle instance ok
//     programe->>programe: crasher (méthode)
//     programe->>Voiture: nouvelle valeur 
//         destroy Voiture
//     Voiture->>programe: nouvelle instance ok
//     programe->>Conducteur: créer [V1]
//     Conducteur->>programe: nouvelle intance de voitures
//     programe->>Conducteur: affiche les voitures
//     Conducteur->>programe: le nombre de voiture = 1

// sequenceDiagram
//     Programme->>+Voiture: Créer [couleur, état]
//     Voiture->>-Programme: Nouvelle instance Voiture
//     Programme->>Programme: créer tableau voitures
//     Programme->>+Conducteur: Créer [nom, prenom, voitures]
//     Conducteur->>-Programme: Instance Conducteur
//     Programme->>+Conducteur: crashe toi + voiture(index)
//     Conducteur->>+Voiture: crashe toi
//     Voiture->>Voiture: etat -20%
//     Voiture->>-Conducteur: crashée
//     Conducteur->>+Voiture: nouvel etat ?
//     Voiture->>-Conducteur: etat = 80%
//     Conducteur->>-Programme: voiture(index) crashée (etat = 80%)