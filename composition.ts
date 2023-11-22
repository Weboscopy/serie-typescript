// Version composition 


abstract class Item {

    logger : Logger = new SuperLogger([this.name, this.description, this.price])
    
    constructor (
        public name: string, 
        public description : string, 
        public price: number,
        ){}


    abstract calculateVATCost():number

    get logInfo(){
        return this.logger.logInfo
    }
}


class Product extends Item {
    constructor (name: string, description : string, price: number){
        super(name, description, price)
    }

    calculateVATCost():number{
        return this.price * 5.5 
    }
}


class Service extends Item {
    constructor ( name: string, description : string, price: number){
        super(name, description, price)
    }

    calculateVATCost():number{
        return this.price * 20 
    }
}


interface Logger {
    logInfo(...props: (string | number)[]): void 
}


class SimpleLogger implements Logger {
    constructor(public props: (string | number)[]){}
    logInfo(): void {
        console.log(`${this.props.join("-")}`)
    }
}

class SuperLogger implements Logger {
    constructor(public props: (string | number)[]){}
    logInfo = (): void =>  {
        console.log(`${new Date().toLocaleString()} : ${this.props.join("-")}`)
    }
}


class User {

    logger : Logger = new SuperLogger([this.name, this.description, this.img])
    constructor(
        public name: string, 
        public description: string, 
        public img: string,
        ){} 

    get logInfo(){
        return this.logger.logInfo
    }
}


const user = new User("paul", "paul's description", "paul.jpg")

user.logInfo()


const product = new Product("basket", "super stan", 60)

product.logInfo()

const service = new Service("coiffure", "super coupe", 12)

service.logInfo()