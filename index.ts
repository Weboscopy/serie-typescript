interface Loggable {
    logInfo():void
}

class User implements Loggable{
    logInfo(): void {
        console.log("Classe User")
    }
}

class Product implements Loggable{
    logInfo(): void {
        console.log("Classe Product")
    }
}

type CoordAlias = {
    x: number, 
    y: number
}

interface CoordInterface {
    x: number, 
    y: number
}


const coord : CoordInterface = {x: 12, y : 23}


// 
// type CoordAlias = {
//     z: number 
// }


interface CoordInterface {
    z: number 
}

const coord2 : CoordInterface = {
    x: 23,
    y: 12,
    z: 30
}


type LocationAlias = CoordAlias & {location?: string}

interface LocationInterface extends CoordInterface{
    location? : string
}


type IDAlias  = string | number 

type OrderedList = [number, number, string, string]

interface IDInterface {
    id: string | number
}


