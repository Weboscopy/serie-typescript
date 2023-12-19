// signature d'index
interface FlexibleCategories  {
    readonly [key: string] : number  
    films: number 
    musics: number 
}


const categories1 : FlexibleCategories  = {
    films: 299,
    musics: 120,
    books: 20,
    games: 10,
    videos: 29
}

// categories.films = 30

 
interface  RigidCategory {
    films: number 
    books: number 
    games: number
}


const categories2 : RigidCategory  = {
    films: 299,
    books: 20,
    games: 10,
}

categories1.books 
categories1["books"]
let prop1 : string= "books"
categories1[prop1]
categories1.anything 


categories2.books
categories2["books"]
// let prop2: string = "books"
// let prop2: 'books' = "books"
const prop2 = "books"
categories2[prop2]
// categories2.anything 



const sum1 = (categories: FlexibleCategories) : number => {
    let total = 0
    for(const category in categories){
        total += categories[category]
    }

    return total 
}


const sum2 = (categories: RigidCategory) : number => {
    let total = 0
    for(const category in categories){
        // total += categories[category as keyof RigidCategory] 
        total += categories[category as keyof typeof categories] 
    }

    return total 
}


interface User {
    [key: string] : string  | number | string[] | undefined
    username: string 
    img?: string 
    id: number 
    skills?: string[]
}


// type mappé
type CategoryObj = {
    description: string 
    count: number 
}

 type categoryUnions = "books" | "films" | "musics"

type MappedCategory = {
    [K in categoryUnions ] : CategoryObj
}


type MappedCategory2 = {
    [K in keyof RigidCategory] : CategoryObj
}

const mapped2 : MappedCategory2 = {
    books: {description: "Catégorie pour les livres", count: 30},
    films: {description: "Catégorie pour les films", count: 20},
    games: {description: "Catégorie pour les jeux", count: 40},
}

// Type mappé générique
type MappedCategory3<T, U> = {
    [K in keyof T] : U
}


type FrenchCategories = {
    livres: number, 
    films: number, 
    jeux: number
}

const mapped3 : MappedCategory3<FrenchCategories, boolean> = {
    livres: true,
    films: false,
    jeux: true
}


// cas d'utilisation


type Student = {
    name: string 
    score: number
}

const student1 = {
    name: "paul", 
    score: 120
}

type StudentSetters = {
    [ K in keyof Student as `set${Capitalize<K>}`] : (v: Student[K]) => void 
}

type Setters<T> = {
    [K in keyof T as `set${Capitalize<string & K>}`]: (v : T[K]) => void
}


const attachSetters = <T extends object> (
    emptyObj: object,  
    obj: T, 
    setters : Setters<T>
) : T & Setters<T> => {
    return  Object.assign(emptyObj ,obj, setters)
}


const studentWithSetter = {} as Student & Setters<Student>

attachSetters(studentWithSetter, student1, {
    setName : (v: string) => studentWithSetter.name = v,
    setScore : (v: number) => studentWithSetter.score = v 
})

studentWithSetter.setName("tom")
console.log(student1)
console.log(studentWithSetter)
