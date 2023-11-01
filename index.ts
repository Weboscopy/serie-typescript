// Typescript est un langage fortement typé
// One ne peut pas changer le type d'une variable après déclaration
// Typescript est un langage statique 
// Le type d'une variable est connu au moment de la compilation du code 

// Intro
let id : string = "#12"

console.log(id)

console.log(typeof id)

id = 12

console.log(typeof id)

// Erreur 1
type Item  = {
    name: string
    desc: string 
    price : string
}

const item1 : Item = {
    name: "t-shirt",
    desc: "un super t-shirt",
    price: "12 €"
}

let cart : number = 0;

const addItemToCart = (item : Item) => {
    cart += item.price
}


// Erreur 2 

type Post = {
    title: string  
    desc : string
}
const post : Post = {
    title : "Les pires erreurs en js",
    desc: "Il arrive férquement d'utiliser une propriété qui n'exist pas sur un objet"
}

const logContent = (post : Post) => {
    console.log(`Description : ${post.description}`)
}

logContent(post)


// Erreur 3

type logUserInfoFunc = (loggedIn: boolean, username: string,  password: number) => void 


const logUserInfo : logUserInfoFunc= (username, password, loggedIn) => {
        if(loggedIn){
            console.log(username, password)
        }
}

logUserInfo("tom", 123, true)


