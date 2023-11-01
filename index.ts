// Classe avec annotation
class User {
    name : string
    age: number 
    constructor(name : string, age: number){
        this.name = name 
        this.age = age 
    } 

    getUserInfo():void {
        console.log(`L'utilisateur ${this.name} a ${this.age}`)
    }
}

class Developer extends User {
    language: string 
    constructor(name: string, age: number, language: string){
        super(name, age)
        this.language = language 
    }

    // Overriding (réécriture de la méthode GetUserInfo pour la sous-classe Developer)
    getUserInfo(): void {
        console.log(`Le développeur ${this.name} a ${this.age}`)
    }

    getDevInfo(){
        console.log(`${this.name} connaît ${this.language}`)
    }

    // accesseurs
    get _language (): string{
        return this.language
    }

    set _language(language : string) {
        this.language = language
    }
}

// Modifieurs de visibilité (public, private, protected, readonly)

class FileClass {

    static maxSize = 20000
    private static numberOfFiles = 0;

    constructor(public name: string, protected size: number){
        FileClass.numberOfFiles++
    }

    getFileInfo(): string{
        return `Ce fichier s'appelle ${this.name} et pèse ${this.size} ko`
    }


    static getNumberOfFiles () : string {
        return `${FileClass.numberOfFiles} fichiers ont été créés`
    }
}

const myFile = new FileClass("mon_ficher", 2000)

// attrribut statique
FileClass.maxSize 
// méthode statique
FileClass.getNumberOfFiles()


class PDF extends FileClass {
    private extension : string = ".pdf"
    
    // assignation des propriétés directement dans le constructeur grâce aux modifieurs de visibilité
    constructor (public name: string, public size: number, readonly content : string){
        super(name, size)
    }

    getFullName(): string{
        return this.name + this.extension
    }

    checkPDFSize(): boolean{
       return  this.size > FileClass.maxSize ? true : false
    }
}   


const myPDF = new PDF("mon_pdf", 1000, "ceci est le contenu de mon pdf")

// la propriété content a été marquée read-only, elle n'est pas modifiable
myPDF.content = "Mdofier le contenu"
console.log(myPDF.content)


// Utiliser la fonction constructeur en JavaScript 
// pour créer des propriétés privées et statisques
function JSCoder(name){
    // attribut privé
    let password  = 22939392
    this.name = name 

    

    this.getInfo = () => {
        console.log(`Codeur : ${this.name} ${getPassword()}`)
    }

    // méthode privée
    const getPassword = () => {
        return password
    }
}

// attribut statique
JSCoder.count = 0 

// méthode statique
JSCoder.incrment = () => {
    JSCoder.count++ 
}


JSCoder.incrment()
console.log(JSCoder.count)





