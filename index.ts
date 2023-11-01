// Constante
const PORT  = 5000 
let port = 3000

type PORT = 5000

// Types littéraux 
function emitEvent(name: "Login", data: {userId: number}) : void
function emitEvent(name: "SendMessage", data: {message: string}) : void
function emitEvent(name: string, data: unknown){
    console.log(`on${name}: ${JSON.stringify(data)}`)
}


const checkStatus = (status: "pending" | "success"  ) : string => {
    if(status === "pending"){
        return "En cours de traitement"
    }

    if(status === "success" ){
        return "Votre demande a été acceptée"
    }

    throw new Error("Erreur ")
}

checkStatus("pending")

// Enumérateur numérique
const httpRequest = (status: number) => {
    switch(status){
        case 0:
            return "Succès"
        case 1: 
            return "Redirection"
        case 3:
            return "Mauvaise requête"
        case 4:
            return "Erreur serveur"
        default:
            return "Temps écoulé"
    }
}

// Union de type littéraux
type status = "success" | "redirect" | "failed" | "error"

const httpRequest2 = (status: status) : string => {
    switch(status){
        case "success":
            return "succès !"
        case "redirect":
            return "redirection..."
        case "failed":
            return  "mauvaise requête"
        case "error":
            return "erreur serveur"
    }
}

const failedReq = (type : "forbidden" | "unauthorized") => {
    return type === "forbidden" ? 401 : 403
 }

 // Enumération dynamique
enum Status {
    success =  200,
    redirect = 300,
    failed = failedReq("forbidden"),
    error = 500,
}

const httpRequest3 = (status: Status) : string => {
    switch(status){
        case 200:
            return "En attente"
        case 300: 
            return "Succès !"
        case 400:
            return "Mauvaise requête"
        case 500:
            return "Erreur serveur !"
        default: 
            return "temps écoulé"
    }
}

console.log(httpRequest3(3))

// Enumérateur de chaînes de caractères 
enum PrimaryColor {
    red = "#FF0000",
    green = "#00FF00",
    blue = "#0000FF",
}

enum Color  {
    primary = "#FFF",
    secondary = "#000",
    tertiary = "#eee",
    red = PrimaryColor.red
}

const darkTheme = {
    color: Color.primary,
    backgroundColor: Color.secondary,
    borderColor: Color.tertiary
}

const lightTheme = {
    color: Color.secondary,
    backgroundColor: Color.primary,
    borderColor: Color.red
}


const getColorName = (color: Color)  : string => {
    switch(color){
        case Color.primary:
            return "black"
        case Color.secondary:
            return "white"
        case Color.tertiary:
            return "gray"
        default: 
            return "black"
    }
}


