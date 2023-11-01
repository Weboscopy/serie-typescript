// annotations
let temperature : number[] = [9, 8, 4, -2]
let names : string[] = ["tom", "zoe", "alex"]
let prices : Array<number> = [23.69, 19.99, 12.99]
// tableau avec union 
let dates : (Date | string)[] = [new Date(), new Date("07/06/2O22"), "2023-11-08"]
// tableau à 2 dimensions
let twoDimensional : boolean[][] = [[true, false, true], [true, true, false]]



// inférences 
let cities = ["paris", "nantes", "marseille"]
let departments = ["gard", "jura", "lot", 78, 91]
let narbonne = ["aude", 11, true]


cities[0] = 23
departments.push(42)
departments.unshift(true)

// Hiérarchie des types 
cities = departments
departments = cities

cities = narbonne
departments = narbonne
narbonne = cities 
narbonne = departments


// initialisation 
let tableau = []
tableau.push(true)
tableau.push("hey")

let categories : string[] = []
categories.push("livres")


// méthode d'ordre supérieur 
let users = [{name: "paul", age: 20}, {name: "tom", age: 33}, {name: "zoe", age : 28}]
let usernames = users.map(user => {
    return user.name
})


// tuples (tableau ordonné) 
let rennes: [string, number, boolean] = ["Bretagne", 35, true]

rennes[1] = 42

// impossible de passer la référence ici puisque "narbonne" est un tableau standard (donc non ordonné)
rennes = narbonne

// tuples au sein des fonctions
function addCoord (a : [x: number, y: number], b: [x: number, y : number]): [x: number, y : number]{
    return [
        a[0] + b[0],
        a[1] + b[1]
    ]
}

// fonction de state pour les chaînes de caractères
function stringState(initial: string): [() => string, (v: string) => void]{
    // closure
    let str: string = initial 
    return [
        () => str,
        (v: string) => {
            str = v
        }
    ]
}

const [firstname, setFirstName] = stringState("Bob")
const [lastName, setLastName] = stringState("Marley")


console.log(firstname())
setLastName("Dylan")
console.log(lastName())
console.log(firstname())





