export class Pomme { //nom de la classe

    private _name: string
    private _color: string
    private _stock: number
  
      constructor( name: string, color: string, stock:number) { // les atribuets ex = this._name
        console.log('Initialisation de la pomme')
        this._name = name
        this._color = color
        this._stock = stock
      }
      
      public Afficher(): void { // les methodes
        console.log(`la couleur: '${this._color}' la variété: '${this._name}'  '${this._stock}'`);
      }
  
      static Donner_heur(): number{
        return Date.now()
      }
  
  
  
      public set name(name: string) {
        this._name = name;
     }
      public get name(): string {
       return this._name;
      }
  
      public set color(color: string) {
        this._color = color;
     }
      public get color(): string {
       return this._color;
      }
  
      public set stock(stock: number) {
        this._stock = stock;
     }
      public get stock(): number {
       return this._stock;
      }
  }