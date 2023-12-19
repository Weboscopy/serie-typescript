class HorrorMovie  {
    scary : boolean = true
    scare(){
        console.log("ce film fait peur")
    }
}


class ComedyMovie  {
    funny : boolean = true
    
    makeLaugh(){
        console.log(`ce film fait rire`)
    }
}

// class HorrorComedyMovie extends Movie, Horror {

// }


type Class = new (...args : any[])=> any; 

const ComedyMovieMixin =  <T extends Class> (baseClass : T) => {
    return class extends baseClass {
        funny : boolean = true
    
        makeLaugh(){
            console.log(`ce film fait rire`)
        }
    }
}

const HorrorMovieMixin =  <T extends Class> (baseClass : T) => {
    return class extends baseClass {
        scary : boolean = true
        scare(){
            console.log("ce film fait peur")
        }
    }
}


const HorrorComedyMovie = ComedyMovieMixin(HorrorMovieMixin(
    class {}
))

const film = new HorrorComedyMovie()



const MiniDBMixin= <T extends Class, U> (baseClass: T) => {
    return class extends baseClass {
        protected db : Record<string, U> = {}
    
        set(key: string, val: U): void {
            this.db[key] = val 
        }

        get(): Record<string, U> {
            return this.db
        }
    }
}

const PersistantDBMixin = <T extends Class, U> (baseClass: T) => {
    return class extends baseClass {
        protected db : Record<string, U> = {}
        save() : string {
           return  JSON.stringify(this.db)
        }
    
        load(str : string) : void {
            this.db = JSON.parse(str)
        }
    }
}

let DB = PersistantDBMixin(MiniDBMixin(class {}))

const myDB = new DB()

myDB.set("user", {username: "paul"})
myDB.set("post", {title: "Article 1"})
myDB.set("comment", {comment: "hey !"})

console.log(myDB.get())

const saved = myDB.save()

myDB.set("user", {username: "tom"})

console.log(myDB.get())

myDB.load(saved)

console.log(myDB.get())
