type User = {
    id: number,
    username: string,
    email: string
}

type Product = {
    id: number,
    productName: string,
    price: number
}

interface HasId {
    id: number
}

// Contrainte 
// le type générique T doit avoir une propriété id de type nombre
class Collection<T extends HasId> {
    constructor(public data: T[]) { }

    findOne(id: number): T {
        const el = this.data.find(v => v.id === id)
        if (el) {
            return el
        }

        throw new Error("The item does not exist")
    }
}

const userCollection = new Collection<User>([
    { id: 1, username: "Paul", email: "paul@mail.com" },
    { id: 2, username: "tom", email: "tom@mail.com" }
]
)

console.log(userCollection.findOne(2))


let categories : string[] = []

let transaction1 = {shirt: 40, baskets: 90, tShirt: 40}
let transaction2 = {films: 20, books: 10, games: 40}

// Contrainte 
// le type générique T doit être un objet 
const addCategories = <T extends object> (obj: T) => {
        Object.keys(obj).forEach((key) => {
            categories.push(key)
        })
}

addCategories(transaction1)
addCategories(transaction2)


// Keyof
// un type qui équivaut à une union de types littéraux 
// où chaque type littéral est une clé d'un autre type 
type Book = {
    title: string,
    isbn: number,
    pages: number
}

const book1 : Book = {title: "mon livre", isbn: 1244, pages: 134}

type BookKeys1 = "title" | "isbn" | "pages"
type BookKeys2 = keyof Book
type BookKeys3 = keyof typeof book1 

// containte avec keyof 
// le type générique K doit correpondre à l'une des clé de l'objet book1
const reverKey = <K extends keyof typeof book1> (key: K) => {
   console.log(key.split("").reverse().join(""))
}

reverKey("pages")


type Course = {
    title: string, 
    lesson: number
}

const course1 : Course = {
    title: "TS 14",
    lesson: 14
}

// Le type générique K doit correspondre à une clé du type générique T
// Le type retournée par la fonction (T[K]) correspond au type de la valeur associée à clé K dans T
const extract = <T, K extends keyof T> (data : T, key : K) : T[K]=> {
    return data[key]
}

const courseLesson = extract(course1, "lesson" )
const bookTitle = extract(book1, "title")

const pluck = <T, K extends keyof T>(
    items: T[], 
    key: K 
    ): T[K][]  => {
    return items.map(item => item[key])
}   

const course2 : Course = {
    title: "TS 15",
    lesson: 16
}

const course3 : Course = {
    title: "TS 16",
    lesson: 16
}

const val = pluck([course1, course2, course3], "lesson")
console.log(val)


type AuthEvent = {
    time: Date,
    username: string
    token: number
}

type AddToCart = {
    productId: number,
    productName: string,
    price: number
}

type CheckoutEvent = {
    price: number,
    transactionId: number,
    cardNumber: BigInt
}

type EventMap = {
    authEvent: AuthEvent,
    addToCartEvent: AddToCart,
    checkoutEvent: CheckoutEvent
}

const sendEvent = <K extends keyof EventMap>(
    eventName: K,
    data: EventMap[K]
): void => {
    console.log([eventName, data])
}


