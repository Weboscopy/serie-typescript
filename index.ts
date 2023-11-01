// function standard
function divide (a: number, b: number): number {
    return a / b;
}

// fonction fléchée 
const sub = (a: number, b: number): number => a - b


// inférence sur le type retourné (!! déconseillé !!)
const multiply = (a : number, b: number) => a * b


// alias
type MathFunction = (a: number, b: number) => number 


// paramètre(s) otpionnel(s) 
const concat = (a: string, b: string, c?: string): string => {
    if(typeof c !== "undefined"){
        return a + " " + b + " " + c 
    } 

    return a + " " + b
}

// paramètre(s) par défaut 
const add = (a: number, b : number, c: number = 2): number => {
    return a + b + c
}

// paramètre rest 

const salute = (greet : string, ...names : string[]) : string => {
    return `${greet} ${names.join(" ")}`
}



// le type void
const log = (message : string): void => {
    console.log(message)
}


// le type never

// const infinite = () => {
//     let i  = 0;
//     while(true){
//         i++
//     }
// }

const createError = (msg: string) : never => {
    throw new Error(msg)
}

const check  = (value: boolean): string => {
    if(value) return "Correct !"
    return createError("il y a eu une erreur")
}

// callbacks
function arrayMutate(arr : number[], mutate: (v: number) => number): number[]{
    return arr.map(mutate)
}

console.log(arrayMutate([1, 2, 3, 4,], v => v *10))
console.log(arrayMutate([1, 2, 3, 4 ], v => v * 100))

// promesses 
const createUser = (name : string) : Promise<string> => {
    return new Promise((resolve : (val: string) => void) => {
        setTimeout(() => {
            resolve(`user: ${name}`)
        }, 2000)
    })
}

createUser("Paul").then(val => console.log(val))


// fonctions curry 
const adder = (a : number) => {
    return (b: number) => {
        return  a + b
    }
}

const addFive = adder(5)

addFive(3)
addFive(4)


// closure 
const decrementer = (initial : number ) => {
    let value = initial 
    return () => {
        value -= 10;
        if(value > 0){
            console.log(`Il vous reste ${value}`)
        } else {
            console.log(`Votre compte est vide`)
        }
    }
}

const charge = decrementer(200)

charge()
charge()
charge()
charge()