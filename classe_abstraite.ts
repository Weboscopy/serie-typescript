// Version classe abstraite

// abstract class Item {
//     constructor (public name: string, public description : string, public price: number){}

//     logInfo():void {
//         console.log(`${this.name} - ${this.description}`)
//     }

//     abstract calculateVATCost():number
// }


// class Product extends Item {
//     constructor (name: string, description : string, price: number){
//         super(name, description, price)
//     }

//     calculateVATCost():number{
//         return this.price * 5.5 
//     }
// }


// class Service extends Item {
//     constructor ( name: string, description : string, price: number){
//         super(name, description, price)
//     }

//     calculateVATCost():number{
//         return this.price * 20 
//     }
// }


// class User implements Loggable, mappable{
//     coord: {x: number, y : number} = {x: 43, y: 56}
//     constructor(public name: string, public description: string, public img: string){} 

//     logInfo(): void {
//         console.log(`${this.name} - ${this.description} - ${this.img}`)
//     }

//     map(){
//         console.log(`lat ${this.coord.x} - lng ${this.coord.y}`)
//     }
// }
