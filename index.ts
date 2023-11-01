// annotation
let obj : object 

// En JavaScript/TypeScript,tout est un objet
obj = {}
obj = {name: "tom"}
obj = () => {}
obj = [1, 2, 3]

//objet instantié par une class 
class Coder {
    name: string;
    constructor(name: string){
        this.name = name
    }
}

const coder1: Coder = new Coder("Tom")

// Objets littéraux 
const coord : {x: number, y : number} = {x : 1, y: 2}

// Inférence 
const user = {
    name: "paul",
    age: 23,
    active: true
}

user.age = "24"
user.profile 


const getUserInfo = (user : {name: string, age: number, active: boolean}) => {
    console.log(user.name)
    console.log(user.age)
    console.log(user.active)
}


// Alias 

type Developer = {
    name : string,
    language: string, 
    experience: number
}

type Student = {
    school: string 
}

// Intersection
const studentDev : Developer & Student = {
    name: "zoé" ,
    language: "php",
    experience: 2,
    school: "Université de Bordeaux"
}

let jsDev : Developer =  {
    name: "Alex",
    language: "JavaScript",
    experience: 4
}

let javaDev : Developer = {
    name: "Paul",
    language: "Java",
    experience: 12
}

javaDev.active 
javaDev.language = 23

const getDevInfo = (dev : Developer) => {
    console.log(dev.name)
    console.log(dev.language)
    console.log(dev.experience)
}


// les alias ne servent pas que pour les objets 

type text = string 

const hello: text = "hello"

type stringOrBoolean = number | string 

let id : stringOrBoolean = "1"
let id2 : stringOrBoolean = 233


type DevFunc = (name: string, languag: string, experience: 12) => Developer 

const createDev : DevFunc = (name, language, experience ) => {
    return {name, language, experience}
}


// destructuration

const profile = {
    username: "tom",
    age: 20,
    location: {
        lat: 40,
        lng: 52
    },
    setAge(age: number){
        this.age = age
    }
}

const {age} : {age: number} = profile 
console.log(age)


const {location: {lat, lng}} : {location: {lat: number, lng: number}} = profile

console.log(lat, lng)