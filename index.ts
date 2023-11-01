type User = {
    userId: number
    username: string
    // propriété image optionnelle <=> union string | undefined
    img ?: string
    location ? : {
        address? : string
    }
}

const getUserImg = ( user : User ) : string => {
    // if(user.img){
    //    return user.img
    // }

    // return "defaultImg.jpg"

    return user.img ? user.img : "defaultimg.jpg"
}

function getAddress(user: User) : string {
    return user?.location?.address ?? ""
}

// Paramètre optionnel dans une fonction
const order = (amount : number, price: number, discount ?: number ): string => {
    return `Montant de votre commande : ${discount ? amount * price - discount : amount * price}`
}

type Coord = {x: number, y : number}

// fonction callback optionnelle 
function translate (coord: Coord, cb?:(coord: Coord) => void)  {
    coord.x += 10 
    coord.y += 10 

    cb?.(coord)
}


const coord : Coord= {x : 0, y :0}

translate(coord, (coord) => console.log(coord))

class CustomDate {
    day: number = 1
    month: number = 1
    year: number = 2000
    constructor(day: number, month : number, year: number){
        this.day = day 
        this.month = month 
        this.year = year
    }
}

// garde de type
const getFormatedDate = ( date : number | Date | CustomDate ) : string => {

    // on utilise typeof pour les primitives
    if(typeof date === "number"){
        return new Date(date).toLocaleString()
    }

    // on utilise instanceof pour les structures
    if(date instanceof Date){
        return date.toLocaleString()
    }

    if(date instanceof CustomDate){
        return `${date.day} - ${date.month} - ${date.year}`
    }

    throw new Error("Erreur format date")
}



