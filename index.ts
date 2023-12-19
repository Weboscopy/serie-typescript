const strState = (initial: string) : [() => string, (v: string) => void] => {
    let val = initial 
    return [
        () => val,
        (v: string) => val = v
    ]
}


const numberState = (initial: number) : [() => number, (v: number) => void] => {
    let val = initial 
    return [
        () => val,
        (v: number) => val = v
    ]
}

const booleanState = (initial: boolean) : [() => boolean, (v: boolean) => void] => {
    let val = initial 
    return [
        () => val,
        (v: boolean) => val = v
    ]
}

const [username, setUsername] = strState("tom")
const [getAge, setAge] = numberState(18)
const [isActive, setIsActive] = booleanState(true)

console.log(username())
setUsername("paul")
console.log(username())

// Fonction générique

const state = <T> (initial: T) : [() => T, (v: T) => void] => {
    let val = initial 
    return [
        () => val,
        (v: T) => val = v
    ]
}

const [password, setPassword] = state("230404034")
const [loading, setLoading] = state(true)
const [img, setImg] = state<string>("default.jpg")
const [room, setRoom] = state<number | null >(null)

setRoom(23)
console.log(room())
setRoom(null)


type Score = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 
class ScoreCollection {
    constructor(public data: Score[]){}

    get (index: number): Score {
        return this.data[index]
    }

    sortCollection (): Score[]{
       return this.data.sort()
    }
}

type Grade = "A" | "B" | "C" | "D" | "E" | "F" 

class GradesCollection {
    constructor(public data: Grade[]){}

    get (index: number): Grade{
        return this.data[index]
    }

    sortCollection(): Grade[]{
       return this.data.sort()
    }
}

// Classe générique

class Collection <T> {
    constructor(public data : T[]){}

    get(index: number): T{
        return this.data[index]
    }

    sortCollection(): T[]{
        return this.data.sort()
    }
}

const scores = new Collection<Score>([8, 4, 1])
const grades = new Collection<Grade>(["F", "D", "B"])

const collection = new Collection<boolean> ([true, true, false, false])

console.log(scores.sortCollection())
console.log(grades.sortCollection())

// Alias générique
type ResAlias <T> = {
    data: T,
    status: boolean 
}


const sendJSON = <T> (res: ResAlias<T>): string  => {
    if(res.status){
        return JSON.stringify(res.data)
    }

    throw new Error("impossible de récupéréer les données")
}

type User = {
    id: number
    name: string
}

const user : User = {
    id: 1,
    name: "tom"
}

const product = {
    productName: "t-shirt",
    description : "super t-shirt"
}

sendJSON({data: "text", status: true})

sendJSON<User>({data :user , status: true})

sendJSON<typeof product>({data: product, status: true})


// interface générique 

interface Filterable <T>{
    filterValue: T 
    filterCollection(): T[]
}

class TemperatureCollection  implements Filterable<number>{
    constructor(public data: number[], public filterValue: number){}

    filterCollection(): number[]{
        return this.data.filter(val => val > this.filterValue)
    }
}

class NamesCollection implements Filterable<string> {
    constructor(public data: string[], public filterValue: string){}

    filterCollection(): string[]{
        return this.data.filter(val => val.includes(this.filterValue))
    }
}


// Plusieurs génériques

type PostProps = {
    title: string, 
    content: string, 
}

type BookProps = {
    title: string,
    pages: number,
}

class Post {

    slug: string = this.title.toLowerCase().replace(/[\s]+/g, "-")
    private constructor( public title: string, public content: string){}

    static build(props: PostProps): Post{
       return new Post(props.title, props.content)
    }
}


class Book {
    isbn : number = new Date().getTime()
    private constructor(public title: string, public pages: number){}

    static build(props: BookProps) : Book{
        return new Book(props.title, props.pages)
    }

}


class List   <T, U> {
    list : T[] = [] 

    constructor(
        public build : (props: U) => T
    ){}

    addItem(item: U): void{
        this.list.push(this.build(item))
    }

    get (): T[] {
        return this.list
    }
}


const postList = new List((props: PostProps) => Post.build(props))
const bookList = new List((props: BookProps) => Book.build(props))

postList.addItem({title: "Mon  premier post", content: " Mon Super Contenu"})
postList.addItem({title: "Mon second post", content: " Mon Super Second Livre"})

bookList.addItem({title: "Mon premier livre", pages: 23})
bookList.addItem({title: "Mon second livre", pages: 49})

console.log(postList.get())

console.log(bookList.get())

