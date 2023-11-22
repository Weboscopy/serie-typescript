// Version interfaces


// abstract class Item implements Loggable{
//     constructor (public name: string, public description : string, public price: number){}

//     logInfo():void {
//         console.log(`${this.name} - ${this.description} - ${this.price}`)
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


// interface Loggable {
//     name: string 
//     description: string 
//     logInfo(): void 
// }


