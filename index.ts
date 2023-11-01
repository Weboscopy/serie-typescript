// "Primitives"  
let myname : string = "Paul"
let score : number = 12 
let isActive : boolean = true;

// Cas particuliers où le type et la valeur sont identiques
let nothing: null = null 
let indefini: undefined = undefined 


// "Structures" (instantiables avec le mot-clé new)
let categories : string[] = ["films", "musique", "livres"]
let temperatures : number[] = [20, -9, 4, 0, 9]
let phone : RegExp = /^(0|\+33)[1-9]([-.: ]?[0-9]{2}){4}$/
let today : Date = new Date() 
class User {

}

const tom : User = new User()

// objects littéraux (pas instancié par une classe)
let coordinates : {x: number, y: number} = {x: 2, y: 3}

// fonctions 
const sum : (a: number, b:number) => number = (a, b) => {
    return a + b
}

// le type any 
// il revient à faire un usage faiblement typé (= JavaScript standard) 
// En Typescript, le but va donc être d'éviter le plus possible ce type
let anything : any = 0
anything = "0"
anything = false 
anything = [0]


// inférence
// Typescript est capable de déduire le type d'une variable 
// Seuleuement lorsque une valeur est renseignée au moment de l'initialisation
let username = "quentin" 
username = 19

let password; 

password = 123 
password = "123-$" 


// Quand doit-on ajouter des annotations ?

// #1 lorsque on déclare une variable sans l'initialiser 
let adult : boolean

const test = (age : number) => {
    if(age > 18){
        adult = true 
    } else {
        adult = false
    }
}

// #2 lorsque un variable peut avoir plusieurs types, c'est le cas par exemple des unions 
let selectedRoom : number | null = null 
let availableRooms = [2, 22, 2, 9]

const checkAvailable = (input: number) => {
    for (let i = 0; i < availableRooms.length; i++){
        if(availableRooms[i] === input){
            selectedRoom = input
        }
    }
}

// #3 lorsque le type retourné par une fonction est inconnu 
const id = '{"value" : 2293939292}'

const parsedId : {data : number} = JSON.parse(id)

console.log(parsedId.value)
console.log(parsedId.data)


