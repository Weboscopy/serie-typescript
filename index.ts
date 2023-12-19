
const logDate = (fn: Function) => {
    return (...args: any[]) => {
        console.log(new Date().toLocaleString())
        return fn(...args)
    }
}

let add = (a: number, b: number): void => {
    console.log(a + b)
}

// add = logDate(add)

// add(2, 3)


@classDecorator1
@classDecorator2
class User {

    @fieldDecorator
    static description : string = "Classe utilisée pour générer des Utilisateurs"

    constructor(public firstName: string, public lastName: string) { }


    @getterDecorator1
    @getterDecorator2("Nom complet")
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    @methodDecorator1
    generateRandomPassword() {
        console.log(window.crypto.randomUUID())
    }

    @AsyncMethodDecorator
    async getPosts(){
        const res = await fetch("http://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        return data
    }

    @AsyncMethodDecorator
    async getPost(id : number ){
        const res = await fetch("http://jsonplaceholder.typicode.com/posts/"+ id )
        const data = await res.json()
        return data
    }
}

function methodDecorator1(originalMethod: Function, context: ClassMethodDecoratorContext) {
    return function (this: ThisType<object>) {
        console.log(`Méthode ${String(context.name)} - ${new Date().toLocaleDateString()}`)
        originalMethod.call(this);
    }
}



function AsyncMethodDecorator (originalMethod: Function, context: ClassMethodDecoratorContext) {
        return async function (this: ThisType<object>, ...args : any[]) {
            console.time(String(context.name))
            const post = await originalMethod.apply(this, args)
            console.timeEnd(String(context.name))
            return post
        }
    }


function fieldDecorator(target: any, context: ClassFieldDecoratorContext<ThisType<object>, string>) {
    if (context.static) {
        return function (prop: string) {
            return prop.toUpperCase()
        }
    }
}

function getterDecorator1 (getter: Function, context: ClassGetterDecoratorContext) {
    return function(this: ThisType<object>){
       return getter.call(this).toUpperCase()
    }
}

function getterDecorator2 (val: string) {
    return function(getter: Function, context: ClassGetterDecoratorContext){
        return function (this : ThisType<object>){
           return val  + " : " + getter.call(this)
        }
    }
}


function classDecorator1(originalClass: (new (...args: any[]) => any), context: ClassDecoratorContext): void {
    originalClass.prototype.date = new Date().toLocaleString()
}

// Version Mixin
function classDecorator2<T extends (new (...args: any[]) => any)>(base: T, context: ClassDecoratorContext) {
    return class extends base {
        date = new Date().toLocaleString()
    }
}


const user = new User("tom", "bombadil")


user.generateRandomPassword()

console.log(User.description)

console.log(user.fullName)

console.log(user);


(async () => {
    const posts = await user.getPosts()
    console.log(posts)

    const post = await user.getPost(3)
    console.log(post)
})()

