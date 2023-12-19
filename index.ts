// Capitalize 
type Loading = "loading"

const loadingText : `${Capitalize<Loading>}...` = "Loading..."

// Record 

type CategoryObject = {
    desc: string,
    count: number
}

type Categories = {
    filmm: number,
    musics: number,
    books: number
}

type categoriesUnion = "films" | "musics" | "books"


type mappedCategories1 = {
    // [K in categoriesUnion] : CategoryObject
    [K in keyof Categories]: CategoryObject
}


type mappedCategories2 = Record<keyof Categories, CategoryObject>


const ids: Record<number, string> = {
    10: "A",
    20: "B"
}

type MyRecord <T extends string, U>  = Record<T ,U> 

type mappedCategories3 = MyRecord<categoriesUnion, CategoryObject>



interface  User {
    id: number,
    username: string,
    email: string
    img?: string
    phone?: number
}


// Partial 
const updateUser = (user: User, props: Partial<User>): User => {
    return { ...user, ...props }
}


// Required 
const requiredUser: Required<User> = {
    id: 23,
    username: "Bob",
    email: "bob@mail.com",
    img: "default.jpg",
    phone: 339294839
}

// Pick 
type idAndEmail = Pick<User, "id" | "email">

// Omit 
type UserPreview = Omit<User, "id" | "email" | "phone">


// Téléphone requis pour certains utilisateurs
let UserWithPhone: User & Required<Pick<User, "phone">> = {
    id: 23,
    username: "bob",
    email: "bob@mail.com",
    phone: 39394994
}

// Record - type à partir du champ
const mappedById = (users: User[]): Record<User["id"], Omit<User, "id">> => {
    return users.reduce((acc, curr) => {
        const {id, ...rest} = curr
        return {
            ...acc, 
            [id]: rest
        }
    }, {})
}

console.log(
    mappedById([
        {
            id: 1,
            username: "paul",
            email: "paul@mail.com"
        },
        {
            id: 2,
            username: "tom",
            email: "tom@mail.com"
        }
    ])
)


// Readonly 
type immutableUser = Readonly<User>

const immUser: immutableUser = {
    id: 394,
    username: "bob",
    email: "bob@mail.com"
}

// immUser.id = 334

// Extract 
type Grades = "A" | "B" | "C" | "D" | "E" | "F"

type BestGrades = Extract<Grades, "A" | "B">

// Exclude 
type Admitted = Exclude<Grades, "F">

// NonNullable 
type Status = "loading" | "pending" | "rejected" | null | undefined
type viableSatus = NonNullable<Status>

// Return type 

function getEmails(users: User[]) {
    return users.map(user => user.email)
}


const emails: ReturnType<typeof getEmails> = getEmails(
    [
        { id: 1, username: "paul", email: "paul@mail.com" },
        { id: 2, username: "tom", email: "tom@mail.com" }
    ]
)

// Params 
function createUser (id: number, username: string, email: string ): User{
    return {id, username, email}
}

const args : Parameters<typeof createUser> = [1, "paul", "paul@mail.com"]

createUser(...args)

function createUsers(
    data: Parameters<typeof createUser>[]
): ReturnType<typeof createUser>[] {
    return data.map(item => createUser(...item))
}


function createMany <T extends (...args : any[]) => any > (
    create : T, 
    data: Parameters<T>[]
) : ReturnType<T>[]{
    return data.map(item => create(...item))
}

const users = createMany(createUser, [ [1, "paul", "paul@mail.com"], [2, "zoe", "zoe@mail.com"]])
 
console.log(users)


class Developer {
    constructor (public firstName: string, public lastName: string) {}

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const createDevs = (
    data: ConstructorParameters<typeof Developer>[] 
) : InstanceType<typeof Developer>[] => {
    return data.map(item => new Developer(...item))
}


const createObjects =  <T extends new (...args: any[]) => any > (
    jsClass : T, 
    data: ConstructorParameters<T>[] 
) : InstanceType<T>[] => {
    return data.map(item => new jsClass(...item))
}


console.log(
    createObjects(Developer, [["bob", "dylan"], ["bob", "marley"]]).map(
        dev => dev.fullName
    )

)

interface Post {
    userId: number, 
    id: number, 
    title: string,
    body: string
}


// Awaited
const fetchPosts = async (): Promise<Post[]> => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .catch(err => {
            if(err instanceof Error) console.log(err.message)
        })

        return data
    
}

(async () => {
    let posts : Awaited<ReturnType<typeof fetchPosts>> = await fetchPosts()
    console.log(posts)
})()


